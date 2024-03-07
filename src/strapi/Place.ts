// To parse this data:
//
//   import { Convert, Place } from "./file";
//
//   const place = Convert.toPlace(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Place {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    TitreLieu1:        string;
    LienLieu1:         string;
    TitreLieu2:        string;
    DescriptionLieu2:  string;
    DescriptionLieu:   null;
    DescriptionLieu1:  string;
    LienLieu2:         string;
    TitreLieu3:        string;
    DescriptionLieu3:  string;
    LienLieu3:         string;
    LesLieux:          string;
    SoustitreLesLieux: string;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
    locale:            string;
    PourPlusDInformations:  string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPlace(json: string): Place {
        return cast(JSON.parse(json), r("Place"));
    }

    public static placeToJson(value: Place): string {
        return JSON.stringify(uncast(value, r("Place")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Place": o([
        { json: "data", js: "data", typ: a(r("Datum")) },
        { json: "meta", js: "meta", typ: r("Meta") },
    ], false),
    "Datum": o([
        { json: "id", js: "id", typ: 0 },
        { json: "attributes", js: "attributes", typ: r("Attributes") },
    ], false),
    "Attributes": o([
        { json: "TitreLieu1", js: "TitreLieu1", typ: "" },
        { json: "LienLieu1", js: "LienLieu1", typ: "" },
        { json: "TitreLieu2", js: "TitreLieu2", typ: "" },
        { json: "DescriptionLieu2", js: "DescriptionLieu2", typ: "" },
        { json: "DescriptionLieu", js: "DescriptionLieu", typ: null },
        { json: "DescriptionLieu1", js: "DescriptionLieu1", typ: "" },
        { json: "LienLieu2", js: "LienLieu2", typ: "" },
        { json: "TitreLieu3", js: "TitreLieu3", typ: "" },
        { json: "DescriptionLieu3", js: "DescriptionLieu3", typ: "" },
        { json: "LienLieu3", js: "LienLieu3", typ: "" },
        { json: "LesLieux", js: "LesLieux", typ: "" },
        { json: "SoustitreLesLieux", js: "SoustitreLesLieux", typ: "" },
        { json: "createdAt", js: "createdAt", typ: Date },
        { json: "updatedAt", js: "updatedAt", typ: Date },
        { json: "publishedAt", js: "publishedAt", typ: Date },
        { json: "locale", js: "locale", typ: "" },
    ], false),
    "Meta": o([
        { json: "pagination", js: "pagination", typ: r("Pagination") },
    ], false),
    "Pagination": o([
        { json: "page", js: "page", typ: 0 },
        { json: "pageSize", js: "pageSize", typ: 0 },
        { json: "pageCount", js: "pageCount", typ: 0 },
        { json: "total", js: "total", typ: 0 },
    ], false),
};

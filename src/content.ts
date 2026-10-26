import { type Locale } from "./i18nConfig";
import fr from "../content/fr.json";
import en from "../content/en.json";
import de from "../content/de.json";
import es from "../content/es.json";
import ca from "../content/ca.json";

export interface SiteContent {
  home: { subtitle: string };
  cranio: {
    title: string;
    intro: string;
    systemTitle: string;
    systemText: string;
    sessionTitle: string;
    sessionParagraphs: string[];
    benefitsTitle: string;
    benefits: { title: string; text: string }[];
  };
  about: {
    title: string;
    paragraphs: string[];
    trainingTitle: string;
    unitsLabel: string;
    training: { year: string; title: string; school: string; place: string; units?: number }[];
  };
  places: {
    title: string;
    subtitle: string;
    list: {
      id: string;
      title: string;
      description: string;
      moreInfo?: string;
      moreInfoUrl?: string;
      moreInfoLabel?: string;
      bookingLabel?: string;
      bookingUrl?: string;
    }[];
  };
  prices: {
    title: string;
    description: string;
    items: string[];
    insuranceTitle: string;
    insurance: { text: string; link?: { url: string; label: string } }[];
  };
  contact: {
    title: string;
    phoneLabel: string;
    phone: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
}

const content: Record<Locale, SiteContent> = { fr, en, de, es, ca };

export function getContent(locale: Locale): SiteContent {
  return content[locale] ?? content.en;
}

"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <VerticalTimeline layout="1-column-left" className="text-amber-950">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "var(--timeline-background)" }}
        // contentArrowStyle={{ borderRight: "7px solid  rgb(217, 119, 5)" }}
        date="2023"
        iconStyle={{ background: "rgb(217, 119, 5)", color: "#153142" }}
        icon={""}
        visible={true}
      >
        <h3 className="vertical-timeline-element-title">
          Craniosacral thérapie Branchenzertifikats der OdA KT
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Zurich, CH</h4>
        <p>Apamed à Zurich/Jona CH (2710 unités d’enseignements)</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020"
        contentStyle={{ background: "var(--timeline-background)" }}
        iconStyle={{ background: "rgb(217, 119, 5)", color: "#153142" }}
        icon={""}
        visible={true}
      >
        <h3 className="vertical-timeline-element-title">Cranio Visceral</h3>
        <p>ICSA à Linz AT ( 114 unités d’enseignements)</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019"
        contentStyle={{ background: "var(--timeline-background)" }}
        iconStyle={{ background: "rgb(217, 119, 5)", color: "#153142" }}
        icon={""}
        visible={true}
      >
        <h3 className="vertical-timeline-element-title">
          Craniosacral Dynamics
        </h3>
        <p>ICSA à Salzburg AT (160 unités d’enseignements)</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018"
        contentStyle={{ background: "var(--timeline-background)" }}
        iconStyle={{ background: "rgb(217, 119, 5)", color: "#153142" }}
        icon={""}
        visible={true}
      >
        <h3 className="vertical-timeline-element-title">
          Therapie Manuelle Kaltenborn-Evjenth-Konzept
        </h3>
        <p>Gamt à Zurich CH (176 unités d’enseignements)</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2016"
        contentStyle={{ background: "var(--timeline-background)" }}
        iconStyle={{ background: "rgb(217, 119, 5)", color: "#153142" }}
        icon={""}
        visible={true}
      >
        <h3 className="vertical-timeline-element-title">
          Manuel Trigger point thérapie
        </h3>
        <p>ITF à Frankfurt DE (23 unités d’enseignements)</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015"
        contentStyle={{ background: "var(--timeline-background)" }}
        iconStyle={{ background: "rgb(217, 119, 5)", color: "#153142" }}
        icon={""}
        visible={true}
      >
        <h3 className="vertical-timeline-element-title">
          Drainage lymphatique manuel thérapie complexe décongestion
        </h3>
        <p>à Földischule Munich DE (170 unités d’enseignements)</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015"
        contentStyle={{ background: "var(--timeline-background)" }}
        iconStyle={{ background: "rgb(217, 119, 5)", color: "#153142" }}
        icon={""}
        visible={true}
      >
        <h3 className="vertical-timeline-element-title">
          Diplôme de Physiotherapie
        </h3>
        <p>à L’EUSES de l’Université de Gérone ES</p>
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={"T"}
        visible={true}
      /> */}
    </VerticalTimeline>
  );
}

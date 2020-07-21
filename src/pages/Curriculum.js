import React from "react";
import Timeline from "../components/Timeline";
import UnitLink from "../components/UnitLink";

export default function Curriculum() {
  return (
    <div className="curriculum page">
      <div className="info">
        <h1>Our Curriculum</h1>
        <h2>A roadmap of our meetings and topics.</h2>
        <UnitLink name="Algorithms" />
        <UnitLink name="Web development" />
        <UnitLink name="Systems" />
        <UnitLink name="Cybersecurity" />
      </div>
      <Timeline />
    </div>
  );
}

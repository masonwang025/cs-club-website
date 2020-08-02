import React from "react";
import Timeline from "../components/Timeline";
import UnitLink from "../components/UnitLink";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import { useEffect } from "react";

export default function Curriculum() {
  useEffect(() => {
    let backToTop = document.querySelector(".back-to-top");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        backToTop.classList = "back-to-top show";
      } else {
        backToTop.classList = "back-to-top hide";
      }
    });
  });
  return (
    <div className="curriculum page" id="top">
      <div className="info">
        <h1>Our Curriculum</h1>
        <h2>A roadmap of our meetings and topics.</h2>
        <p style={{ marginBottom: "4px" }}>
          <i>Click any unit to explore its content.</i>
        </p>
        <UnitLink name="General" />
        <UnitLink name="Algorithms" />
        <UnitLink name="Web development" />
        <UnitLink name="Systems" />
        <UnitLink name="Cybersecurity" />
        <UnitLink name="Machine learning" />
      </div>
      <Timeline />
      <AnchorLink href="#top">
        <RightArrow className="back-to-top" />
      </AnchorLink>
    </div>
  );
}

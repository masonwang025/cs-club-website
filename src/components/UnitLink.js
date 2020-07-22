import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function UnitLink({ name }) {
  let escapedName = name.replace(/\s+/g, "-").toLowerCase();
  return (
    <AnchorLink
      offset={() => {
        if (window.innerWidth <= 768) return 70;
        else return 100;
      }}
      href={`#${escapedName}-start`}
    >
      <div className={`unit-link ${escapedName}`}>{name}</div>
    </AnchorLink>
  );
}

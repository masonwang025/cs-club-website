import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function UnitLink({ name }) {
  let escapedName = name.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className={`unit-link ${escapedName}`}>
      <AnchorLink href={`#${escapedName}-start`}>{name}</AnchorLink>
    </div>
  );
}

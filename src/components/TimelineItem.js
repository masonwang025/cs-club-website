import React from "react";

import Fade from "react-reveal/Fade";

export default function TimelineItem(props) {
  let unit = props.unit.replace(/\s+/g, "-").toLowerCase();
  return (
    <Fade duration={1550}>
      <div className={`t-container ${unit}`}>
        {props.startOfUnit === true && <div id={`${unit}-start`}></div>}
        <div className="content">
          <h2>{props.title}</h2>
          {props.unit && <span className="unit">{props.unit}</span>}
          <span> {props.date && <small>~ {props.date}</small>}</span>
          {props.children}
        </div>
      </div>
    </Fade>
  );
}

import React from "react";

import Fade from "react-reveal/Fade";

export default function TimelineItem(props) {
  let unit = props.unit.replace(/\s+/g, "-").toLowerCase();
  return (
    <Fade duration={1550}>
      <div className={`t-container ${unit}`}>
        <div
          id={props.startOfUnit === true && `${unit}-start`}
          style={{
            visibility: "hidden",
            marginTop: "-100px",
            marginBottom: "100px",
          }}
        ></div>
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

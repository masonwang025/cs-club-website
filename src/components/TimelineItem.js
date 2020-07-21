import React from "react";

import Fade from "react-reveal/Fade";

export default function TimelineItem(props) {
  return (
    <Fade duration={1550}>
      <div className={`t-container ${props.unit.toLowerCase()}`}>
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

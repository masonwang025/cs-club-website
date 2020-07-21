import React from "react";

import Fade from "react-reveal/Fade";

export default function TimelineItem(props) {
  return (
    <Fade duration={1550}>
      <div className="t-container">
        <div className="content">
          <h2>{props.title}</h2>
          {props.unit && <span>{props.unit}</span>}
          {props.children}
        </div>
      </div>
    </Fade>
  );
}

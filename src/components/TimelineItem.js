import React from "react";

export default function TimelineItem(props) {
  return (
    <div className="t-container">
      <div className="content">
        <h2>{props.title}</h2>
        {props.unit && <span>{props.unit}</span>}
        {props.children}
      </div>
    </div>
  );
}

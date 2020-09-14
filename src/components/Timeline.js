import React from "react";
import TimelineItem from "../components/TimelineItem";
import timelineEntries from "../data/timelineEntries";

export default function Timeline() {
  return (
    <div className="main-container">
      <div className="timeline">
        {timelineEntries.map((entry, index) => (
          <TimelineItem
            key={index}
            title={entry.title}
            unit={entry.unit}
            date={entry.date}
            startOfUnit={entry.startOfUnit}
            lecture={entry.lecture}
          >
            {entry.content}
          </TimelineItem>
        ))}
      </div>
    </div>
  );
}

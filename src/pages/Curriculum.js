import React from "react";
import TimelineItem from "../components/TimelineItem";

export default function Curriculum() {
  return (
    <div className="curriculum page">
      <div className="info">
        <h1>Our Curriculum</h1>
        <h2>A Roadmap of our meetings and topics.</h2>
      </div>
      <div className="main-container">
        <div className="timeline">
          <TimelineItem title="Example Title" unit="Algorithms">
            <p>Content goes here</p>
          </TimelineItem>
          <TimelineItem title="Example Title" unit="Algorithms">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis in necessitatibus nulla eius id velit dolores tempore
              aut recusandae esse.
            </p>
          </TimelineItem>
          <TimelineItem title="Example Title" unit="Algorithms">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis in necessitatibus nulla eius id velit dolores tempore
              aut recusandae esse.
            </p>
          </TimelineItem>
          <TimelineItem title="Example Title" unit="Algorithms">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis in necessitatibus nulla eius id velit dolores tempore
              aut recusandae esse.
            </p>
          </TimelineItem>
          <TimelineItem title="Example Title" unit="Algorithms">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis in necessitatibus nulla eius id velit dolores tempore
              aut recusandae esse.
            </p>
          </TimelineItem>
          <TimelineItem title="Example Title" unit="Algorithms">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis in necessitatibus nulla eius id velit dolores tempore
              aut recusandae esse.
            </p>
          </TimelineItem>
          <TimelineItem title="Example Title" unit="Algorithms">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis in necessitatibus nulla eius id velit dolores tempore
              aut recusandae esse.
            </p>
          </TimelineItem>
        </div>
      </div>
    </div>
  );
}

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
          <TimelineItem
            title="Algorithms Unit Start"
            unit="Algorithms"
            date="9/14/20"
          >
            <p>
              Having <b>fast code</b> can mean the{" "}
              <b>difference between taking several years and a few seconds</b>{" "}
              to find the fastest route to your house on Google Maps. Algorithms
              such as Djikstra’s shortest path algorithm and quicksort are
              responsible for speeding up code by finding clever ways to reduce
              computations.
            </p>
          </TimelineItem>
          <TimelineItem
            title="Intro to Algorithms"
            unit="Algorithms"
            date="9/14/20"
          >
            <p>
              <b>Motivation behind algorithm study and big O analysis.</b>
              <br />
              Activity: Fibonacci recursion analysis and knapsack example.
            </p>
          </TimelineItem>
          <TimelineItem title="Systems Unit Start" unit="Systems">
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

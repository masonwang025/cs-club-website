import React from "react";
import TimelineItem from "../components/TimelineItem";

export default function Timeline() {
  return (
    <div className="main-container">
      <div className="timeline">
        <TimelineItem
          title="Algorithms Unit Start"
          unit="Algorithms"
          date="9/21/20"
          startOfUnit={true}
        >
          <p>
            Having <b>fast code</b> can mean the{" "}
            <b>difference between taking several years and a few seconds</b> to
            find the fastest route to your house on Google Maps. Algorithms such
            as Djikstra’s shortest path algorithm and quicksort are responsible
            for speeding up code by finding clever ways to reduce computations.
          </p>
        </TimelineItem>
        <TimelineItem
          title="Intro to Algorithms"
          unit="Algorithms"
          date="9/21/20"
        >
          <p>
            <b>Motivation behind algorithm study and big O analysis.</b>
            <br />
            Activity: Fibonacci recursion analysis and knapsack example.
          </p>
        </TimelineItem>
        <TimelineItem
          title="Web Development Unit Start"
          unit="Web Development"
          date="m/dd/yy"
          startOfUnit={true}
        >
          <p>
            Creating websites is an <b>essential skill</b> in any discipline,
            making it possible to market ideas and spread information in an
            engaging, accessible manner. With the help of various frameworks,
            you can
            <b>make a personalized website from scratch</b> in no time.
          </p>
        </TimelineItem>

        {/* FILL OUT REST OF MEETINGS */}

        <TimelineItem
          title="Systems Unit Start"
          unit="Systems"
          date="m/dd/yy"
          startOfUnit={true}
        >
          <p>
            <b>Your computer is powerful.</b> Of course, it can be used to play
            video games or surf the web, but by learning about its inner
            workings you can{" "}
            <b>learn how to host virtual machines and web servers</b>, share
            files instantaneously with your friends, and create real-time
            multiplayer games.
          </p>
        </TimelineItem>

        {/* FILL OUT REST OF MEETINGS */}

        <TimelineItem
          title="Cybersecurity Unit Start"
          unit="Cybersecurity"
          date="m/dd/yy"
          startOfUnit={true}
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis in necessitatibus nulla eius id velit dolores tempore
            aut recusandae esse.
          </p>
        </TimelineItem>
      </div>
    </div>
  );
}

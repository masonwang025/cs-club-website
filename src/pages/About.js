import React from "react";
import AboutInfoSection from "../components/AboutInfoSection";

import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div className="about">
      <AboutInfoSection />
      <Fade duration={1738}>
        <div className="mission section fcontainer">
          <div className="row vertical">
            <h1>Our Mission</h1>
            <p>
              Our mission is to <b>spread interest in computer science</b> by
              providing engaging programming activities, lessons, and resources
              for students to <b>discover the power of coding</b> for
              themselves. We also hope to provide insight into CS as a career
              and encourage students to pursue it in the future.
            </p>
          </div>
        </div>
      </Fade>

      <Fade duration={1738}>
        <div className="what-we-do section fcontainer">
          <div className="row vertical">
            <h1>What We Do</h1>
            <p>
              <b>Our meetings</b> consist of lectures on various CS topics,
              followed by interactive activities, demos, and challenges. In
              exploring competitive programming, computer security, web
              development, and systems, we hope to help students develop an
              understanding of{" "}
              <b>how vast computer science is and how they can get started</b>.
            </p>
            <p className="mt-0">
              This year, we are holding a club-wide competition where students
              receive flags for completing assignments and attending meetings,
              similar to Capture the Flag cybersecurity competitions:{" "}
              <b>
                <a
                  href="https://ctf.shscsclub.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline"
                >
                  SHS CS Club CTF
                </a>
              </b>
              .
            </p>
          </div>
        </div>
      </Fade>
      <Fade duration={1738}>
        <div
          className="officers section fcontainer"
          style={{ textAlign: "center" }}
        >
          <div className="row vertical">
            <h1>Meet the Officers</h1>
            <p>Meet the officers that run the Saratoga High School CS Club.</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

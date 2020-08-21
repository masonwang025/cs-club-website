import React, { useContext } from "react";
import { coverTransition } from "../animations/globalAnim";
import DelayLink from "react-delay-link";
import { HeaderContext } from "../contexts/HeaderContext";
import BackToTop from "./BackToTop";

export default function AboutInfoSection() {
  const { setDisabled } = useContext(HeaderContext);
  return (
    <div className="about-info fcontainer" id="top">
      <div className="row">
        <h1>SHS CS Club</h1>
      </div>
      <div className="row">
        <h2>
          We investigate the wide diversity of concepts in computer science.
        </h2>
      </div>
      <div className="buttons">
        <div className="row">
          <a
            href="https://www.facebook.com/groups/166826823766638"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-link"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i> Join our
            Facebook
          </a>
        </div>
        <div className="row buttons">
          <DelayLink
            to="/curriculum"
            delay={825}
            clickAction={() => {
              // disable navbar
              setDisabled(true);
              setTimeout(() => {
                setDisabled(false);
              }, 2000);

              coverTransition(true);
            }}
            replace={false}
          >
            Curriculum
          </DelayLink>
          <DelayLink
            to="/resources"
            delay={825}
            clickAction={() => {
              // disable navbar
              setDisabled(true);
              setTimeout(() => {
                setDisabled(false);
              }, 2000);

              coverTransition(true);
            }}
            replace={false}
          >
            Resources
          </DelayLink>
          <DelayLink
            to="/competitions"
            delay={825}
            clickAction={() => {
              // disable navbar
              setDisabled(true);
              setTimeout(() => {
                setDisabled(false);
              }, 2000);

              coverTransition(true);
            }}
            replace={false}
          >
            Competitions
          </DelayLink>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

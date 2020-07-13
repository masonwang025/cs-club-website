import React from "react";
import DelayLink from "react-delay-link";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import { aboutTransition } from "../animations/pageTransitions";

export default function Banner() {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="largeScreen">
              <div className="line">
                <span>We reveal the power of coding,</span>
              </div>
              <div className="line">
                <span>one line at a time.</span>
              </div>
            </div>
            <div className="smallScreen">
              <div className="line">
                <span>We reveal the power of</span>
              </div>
              <div className="line">
                <span>coding, one line at a time.</span>
              </div>
            </div>
            <div className="xsScreen">
              <div className="line">
                <span>We reveal</span>
              </div>
              <div className="line">
                <span>the power of coding,</span>
              </div>
              <div className="line">
                <span> one line at a time.</span>
              </div>
            </div>
          </h2>
          <div className="btn-row">
            <a
              href="https://www.facebook.com/groups/166826823766638"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our FB <RightArrow />
            </a>
            <DelayLink
              delay={2000}
              clickAction={aboutTransition}
              replace={false}
              to="/about"
            >
              About us <RightArrow />
            </DelayLink>
          </div>
        </div>
      </div>
    </section>
  );
}

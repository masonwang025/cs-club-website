import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

export default function Banner() {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="largeScreen">
              <div className="line">
                <span>We explore the power of coding,</span>
              </div>
              <div className="line">
                <span>one line at a time.</span>
              </div>
            </div>
            <div className="smallScreen">
              <div className="line">
                <span>We explore</span>
              </div>
              <div className="line">
                <span>the power of coding,</span>
              </div>
              <div className="line">
                <span>one line at a time.</span>
              </div>

              <div className="line">
                <span></span>
              </div>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              More about us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

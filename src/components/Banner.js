import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

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
            <Link to="/about">
              About us <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

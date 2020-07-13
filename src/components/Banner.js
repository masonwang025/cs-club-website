import React, { useContext } from "react";
import DelayLink from "react-delay-link";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import { coverTransition } from "../animations/globalAnim";
import { HeaderContext } from "../contexts/HeaderContext";

export default function Banner() {
  const { setDisabled } = useContext(HeaderContext);
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
              delay={825}
              clickAction={() => {
                // disable navbar
                setDisabled(true);
                setTimeout(() => {
                  setDisabled(false);
                }, 2200);

                coverTransition(true);
              }}
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

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function Menu({ state }) {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuSecondaryBg = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);

  useEffect(() => {
    if (!state.clicked) {
      // close
      menu.style.display = "none";
    } else if (state.clicked || state.initial === null) {
      // open
      menu.style.display = "block";
    }
  });

  return (
    <div ref={(el) => (menu = el)} className="menu">
      <div
        ref={(el) => (revealMenuSecondaryBg = el)}
        className="menu-secondary-bg-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="container">
          <div className="wrapper row v-center">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link ref={(el) => (line1 = el)} to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link ref={(el) => (line2 = el)} to="/curriculum">
                      Curriculum
                    </Link>
                  </li>
                  <li>
                    <Link ref={(el) => (line3 = el)} to="/competitions">
                      Competitions
                    </Link>
                  </li>
                  <li>
                    <Link ref={(el) => (line4 = el)} to="/resources">
                      Resources
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
                <h3>Extra Info</h3>
                <p>
                  Possibly a slogan, a contact email, etc. Whatever we choose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function Menu({ state }) {
  let menu = useRef(null);

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
      <div className="menu-secondary-bg-color"></div>
      <div className="menu-layer">
        <div className="container">
          <div className="wrapper row v-center">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link id="line1" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link id="line2" to="/curriculum">
                      Curriculum
                    </Link>
                  </li>
                  <li>
                    <Link id="line3" to="/competitions">
                      Competitions
                    </Link>
                  </li>
                  <li>
                    <Link id="line4" to="/resources">
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

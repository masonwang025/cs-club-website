import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-secondary-bg-color"></div>
      <div className="menu-layer">
        <div className="container">
          <div className="wrapper row v-center">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/curriculum">Curriculum</Link>
                  </li>
                  <li>
                    <Link to="/competitions">Competitions</Link>
                  </li>
                  <li>
                    <Link to="/resources">Resources</Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
                <h3>Our Goal</h3>
                <p>
                  Some corny slogan about our goal in CS club and how blah blah
                  you get the point. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Vel, quibusdam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

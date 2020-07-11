import React, { useState, useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import DelayLink from "react-delay-link";
import { ReactComponent as UpArrow } from "../assets/arrow-up.svg";
import Menu from "./Menu";
import { logoTransition } from "../animations/pageTransitions";

function Header({ history }) {
  const currPath = useLocation().pathname;
  // state for menu button
  const [clicked, setClicked] = useState(false);

  // state for disabled button
  const [disabled, setDisabled] = useState(false);

  // use effect for page changes
  useEffect(() => {
    // listen for page changes
    history.listen(() => {
      setClicked(false);
    });
  });

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <DelayLink
              delay={clicked || currPath === "/" ? 0 : 1100}
              to="/"
              clickAction={!(clicked || currPath === "/") && logoTransition}
              replace={false}
            >
              <span id="logoLink">SHS CS CLUB</span>
            </DelayLink>
          </div>
          <div className="nav-toggle">
            <button
              disabled={disabled}
              className="hamburger-menu"
              onClick={() => {
                disableMenu();
                setClicked(!clicked);
              }}
            >
              <span></span>
              <span></span>
            </button>
            <button
              disabled={disabled}
              className="hamburger-menu-close"
              onClick={() => {
                disableMenu();
                setClicked(!clicked);
              }}
            >
              <UpArrow />
            </button>
          </div>
          <Menu clicked={clicked} currPath={currPath} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);

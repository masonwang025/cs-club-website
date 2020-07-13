import React, { useState, useEffect, useContext } from "react";
import { withRouter, useLocation } from "react-router-dom";
import DelayLink from "react-delay-link";
import { ReactComponent as UpArrow } from "../assets/arrow-up.svg";
import Menu from "./Menu";
import { logoTransition } from "../animations/pageTransitions";
import { HeaderContext } from "../contexts/HeaderContext";

function Header({ history }) {
  const currPath = useLocation().pathname;

  // header disabled
  const { disabled, setDisabled } = useContext(HeaderContext);

  // state for menu button
  const [clicked, setClicked] = useState(false);

  // use effect for page changes
  useEffect(() => {
    // listen for page changes
    history.listen(() => {
      setClicked(false);
    });
  });

  const disableMenu = (ms = 1000) => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, ms);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <DelayLink
              delay={clicked || currPath === "/" ? 0 : 850}
              to="/"
              clickAction={
                !(clicked || currPath === "/") &&
                (() => {
                  logoTransition(window.innerHeight < 540);
                })
              }
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

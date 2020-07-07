import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/arrow-up.svg";
import Menu from "./Menu";

function Header({ history }) {
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
            <Link to="/">SHS CS CLUB</Link>
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
          <Menu clicked={clicked} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);

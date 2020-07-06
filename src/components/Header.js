import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Menu from "./Menu";

function Header({ history }) {
  // state for menu button
  const [clicked, setClicked] = useState(false);

  // state for disabled button
  const [disabled, setDisabled] = useState(false);

  //use effect for page changes
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
    }, 900);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link to="/">SHS CS CLUB</Link>
          </div>
          <button
            disabled={disabled}
            className="nav"
            onClick={() => {
              disableMenu();
              setClicked(!clicked);
            }}
          >
            <span></span>
            <span></span>
          </button>
          <Menu clicked={clicked} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);

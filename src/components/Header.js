import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Menu from "./Menu";

function Header({ history }) {
  // state for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
  });

  // state for disabled button
  const [disabled, setDisabled] = useState(false);

  //use effect for page changes
  useEffect(() => {
    // listen for page changes
    history.listen(() => {
      setState({ clicked: false });
    });
  });

  const handleMenu = () => {
    console.log(state.clicked);
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      });
    } else {
      setState({
        clicked: !state.clicked,
      });
    }
  };

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
            onClick={() => handleMenu()}
          >
            <span></span>
            <span></span>
          </button>
          <Menu state={state} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);

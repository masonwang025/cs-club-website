import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link to="/">SHS CS CLUB</Link>
          </div>
          <button className="nav">
            <span></span>
            <span></span>
          </button>
          <Menu />
        </div>
      </div>
    </div>
  );
}

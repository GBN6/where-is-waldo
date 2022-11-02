import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
      <div className="navbar">
        <div className="nav-button-container">
            <Link style={{ color: "#FFF" }} to="/leaderboard">
              <button className="left-nav-button nav-button">
                <span className="nav-button-span">Leaderboard</span>
              </button>
            </Link>
          </div>
          <h1 className="logo">LOGO</h1>
          <div className="nav-button-container">
            <button className="right-nav-button nav-button">
              <Link style={{ color: "#FFF" }} to="/info">
                <span className="nav-button-span">Info</span>
              </Link>
            </button>
          </div>
        </div>
  );
}

export default Navbar;
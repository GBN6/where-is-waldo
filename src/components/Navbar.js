import React from "react";
import { Link } from "react-router-dom";
import Character from "../Character";

const Navbar = (props) => {

  const {inGame, setInGame, inLeaderboard, inHome, inInfo, characters} = props

  let gameCharacters;

  gameCharacters = characters.map((character) => {
    return (
      <Character
        name={character.name}
        found={character.found}
        key={character.name}
      />
    );
  });

  return (
      <div className="navbar">
        {inHome === true && (
          <>
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
          </>
        )}
        {inGame === true && (
          <>
            <div className="nav-button-container">
              <Link style={{ color: "#FFF" }} to="/">
                <button className="left-nav-button nav-button">
                  <span className="nav-button-span">Home</span>
                </button>
              </Link>
            </div>
            <div className="characters-container">{gameCharacters}</div>
            <div className="nav-button-container"></div>
          </>
        )}
        {inLeaderboard === true && (
          <>
            <div className="nav-button-container">
              <Link style={{ color: "#FFF" }} to="/">
                <button className="left-nav-button nav-button">
                  <span className="nav-button-span">Home</span>
                </button>
              </Link>
            </div>
            <h1 className="logo">LEADERBOARD</h1>
            <div className="nav-button-container">
              <button className="right-nav-button nav-button">
                <Link style={{ color: "#FFF" }} to="/info">
                  <span className="nav-button-span">Info</span>
                </Link>
              </button>
            </div>
          </>
        )}
        {inInfo === true && (
          <>
            <div className="nav-button-container">
              <Link style={{ color: "#FFF" }} to="/">
                <button className="left-nav-button nav-button">
                  <span className="nav-button-span">Home</span>
                </button>
              </Link>
            </div>
            <h1 className="logo">INFORMATION</h1>
            <div className="nav-button-container">
              <button className="right-nav-button nav-button">
                <Link style={{ color: "#FFF" }} to="/leaderboard">
                  <span className="nav-button-span">Leaderboard</span>
                </Link>
              </button>
            </div>
          </>
        )}
      </div>
  );
}

export default Navbar;
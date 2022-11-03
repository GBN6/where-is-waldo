import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import boardsData from './BoardsData';
import Leaderboard from './pages/Leaderboard';
import Info from './pages/Info';
import Game from './pages/Game';

const App = () => {
  const [inGame, setInGame] = useState(false);
  const [inLeaderboard, setInLeaderboard] = useState(false);
  const [inHome, setInHome] = useState(false);
  const [inInfo, setInInfo] = useState(false);
  const [allBoardsData, setAllBoardData] = useState(boardsData);

  return (
    <Router>
      <Navbar
        inGame={inGame}
        setInGame={setInGame}
        inLeaderboard={inLeaderboard}
        inHome={inHome}
        inInfo={inInfo}
      />
      <div className='main-container'>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                boardsData={allBoardsData}
                setInGame={setInGame}
                setInLeaderboard={setInLeaderboard}
                setInHome={setInHome}
                setInInfo={setInInfo}
              />
            }
          />
          <Route
            path='/leaderboard'
            element={
              <Leaderboard
                setInGame={setInGame}
                setInLeaderboard={setInLeaderboard}
                setInHome={setInHome}
                setInInfo={setInInfo}
              />
            }
          />
          <Route
            path='/info'
            element={
              <Info
                setInGame={setInGame}
                setInLeaderboard={setInLeaderboard}
                setInHome={setInHome}
                setInInfo={setInInfo}
              />
            }
          />
          <Route
            path='/game'
            element={
              <Game
                setInGame={setInGame}
                setInLeaderboard={setInLeaderboard}
                setInHome={setInHome}
                setInInfo={setInInfo}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import boardsData from './BoardsData';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

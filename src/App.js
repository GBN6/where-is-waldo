import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import boardsData from './BoardsData';

function App() {

  const [allBoardsData, setAllBoardData] = useState(boardsData);


  return (
    <Router>
      <Navbar />
      <div class='main-container'>
        <Routes>
          <Route path='/' element={<Home boardsData={allBoardsData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div class="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;

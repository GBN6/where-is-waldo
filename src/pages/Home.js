import React from "react";
import BoardCard from "../components/BoardCard";
import ps1 from '../assets/boards/ps1.jpg'
import ps2 from '../assets/boards/ps2.jpg'
import ps3 from '../assets/boards/ps3.jpg'
import ps4 from '../assets/boards/ps4.jpg'


function Home() {

  return (
    <div className="home-container">
      <BoardCard img={ps1} alt='PS1' name='PS1' />
      <BoardCard img={ps2} alt='PS2' name='PS2' />
      <BoardCard img={ps3} alt='PS3' name='PS3' />
      <BoardCard img={ps4} alt='PS4' name='PS4' />
    </div>
  );
}

export default Home;
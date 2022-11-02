import React from 'react';
import { Link } from "react-router-dom";
import BoardCard from '../components/BoardCard';

function Home(props) {
  const { boardsData } = props;

  const boards = Object.keys(boardsData)?.map((number) => {
    const board = boardsData[number];
    const characters = board.characters;
    const key = `level ${board.level} ${board.name}`;

    return (
      <Link to="/game" key={key}>
        <BoardCard
          img={board.img}
          alt={`Level ${board.level}`}
          name={board.name}
        />
      </Link>
    );
  });

  return (
    <div className='home-container'>{boards}</div>
  );
}

export default Home;

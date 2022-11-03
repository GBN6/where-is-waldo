import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BoardCard from '../components/BoardCard';

const Home = (props) => {
  const {
    boardsData,
    setInGame,
    setInLeaderboard,
    setInHome,
    setInInfo,
    setBoardNumber,
  } = props;

  useEffect(() => {
    setInLeaderboard(false);
    setInHome(true);
    setInGame(false);
    setInInfo(false);
  }, []);

  const boards = Object.keys(boardsData)?.map((number) => {
    const board = boardsData[number];
    const characters = board.characters;
    const key = `level ${board.level} ${board.name}`;

    return (
      <Link to='/game' key={key}>
        <BoardCard
          img={board.img}
          alt={`Level ${board.level}`}
          onClick={() => {
            setBoardNumber(board.level)
            setInGame(true);
          }}
          name={board.name}
        />
      </Link>
    );
  });

  return <div className='home-container'>{boards}</div>;
};

export default Home;

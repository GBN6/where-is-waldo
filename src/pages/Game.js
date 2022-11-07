import React, { useState, useEffect } from 'react';

const Game = (props) => {
  const {
    setInLeaderboard,
    setInHome,
    setInInfo,
    boardNumber,
    allBoardsData,
    characters,
    setCharacters,
  } = props;

  const [image, setImage] = useState('');

  useEffect(() => {
    setInLeaderboard(false);
    setInHome(false);
    setInInfo(false);
  });

  useEffect(() => {
    let loadedCharacters = allBoardsData[boardNumber].characters;
    setImage(allBoardsData[boardNumber].img);
    setCharacters(loadedCharacters)
  }, [boardNumber, allBoardsData]);

  return (
    <div className='game-container'>
      <div className='relative'>
        <img className='game-board-img' src={image} alt='Game Board' />
      </div>
    </div>
  );
};

export default Game;

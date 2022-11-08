import React, { useState, useEffect } from 'react';
import CharacterDropdown from '../components/CharacterDropdown';

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
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setInLeaderboard(false);
    setInHome(false);
    setInInfo(false);
  });

  useEffect(() => {
    let loadedCharacters = allBoardsData[boardNumber].characters;
    setImage(allBoardsData[boardNumber].img);
    setCharacters(loadedCharacters);
  }, [boardNumber, allBoardsData]);

  const imageClick = () => {
    setShowDropdown(true);
    console.log('image clicked')
  }

  return (
    <div className='game-container'>
      <div className='relative'>
        <img
          className='game-board-img'
          src={image}
          alt='Game Board'
          onClick={imageClick}
        />
        <CharacterDropdown show={showDropdown} characters={characters} />
      </div>
    </div>
  );
};

export default Game;

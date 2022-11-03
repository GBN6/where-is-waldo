import React, { useEffect } from 'react';

const Game = (props) => {

    const {setInLeaderboard, setInHome, setInGame, setInInfo} = props
    
  useEffect(() => {
    setInLeaderboard(false);
    setInHome(false);
    setInGame(true);
    setInInfo(false);
  });

  return (
    <div>
      <h1>Game</h1>
    </div>
  );
};

export default Game;

import React, { useEffect } from 'react';

const Leaderboard = (props) => {

    const {setInLeaderboard, setInHome, setInGame, setInInfo} = props
    
  useEffect(() => {
    setInLeaderboard(true);
    setInHome(false);
    setInGame(false);
    setInInfo(false);
  });

  return (
    <div>
      <h1>LEADERBOARD</h1>
    </div>
  );
};

export default Leaderboard;

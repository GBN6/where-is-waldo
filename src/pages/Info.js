import React, { useEffect } from 'react';

const Info = (props) => {

    const {setInLeaderboard, setInHome, setInGame, setInInfo} = props
    
  useEffect(() => {
    setInLeaderboard(false);
    setInHome(false);
    setInGame(false);
    setInInfo(true);
  });

  return (
    <div>
      <h1>INFO</h1>
    </div>
  );
};

export default Info;

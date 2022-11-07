import React, { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const Info = (props) => {
  const { setInLeaderboard, setInHome, setInGame, setInInfo } = props;

  useEffect(() => {
    setInLeaderboard(false);
    setInHome(false);
    setInGame(false);
    setInInfo(true);
  });

  return (
    <div className='info-container'>
      <div className='about'>
        This project was made by{' '}
        <a
          href='https://github.com/GBN6'
          target='_blank'
          rel='noopener noreferrer'
          className='github-link-a'
        >
          <FaGithub />
          GBN6
        </a>{' '}
      </div>
      <ul className='info-ul'>
        <li className='info-li'>
          Built the front end and game logic using React
        </li>
        <li className='info-li'>
          Utilized Firebase-firestore for a back end database
        </li>
      </ul>
      <p className='about'>
        Game console images provided by
        <a
          href='https://www.artstation.com/pierreroussel'
          target='_blank'
          rel='noopener noreferrer'
          className='about-link-a'
        >
          {' '}
          Pierre Roussel
        </a>
      </p>
      <ul className='info-ul'>
        <li className='info-li'>
          <a
            href='https://www.artstation.com/artwork/oOVVlJ'
            target='_blank'
            rel='noopener noreferrer'
            className='about-link-a'
          >
            Full collection here at Artstation
          </a>
        </li>
        <li className='info-li'>
          <a
            href='https://www.etsy.com/shop/Angerinet'
            target='_blank'
            rel='noopener noreferrer'
            className='about-link-a'
          >
            Prints available on his Etsy shop
          </a>
        </li>
        <li className='info-li'>
          <a
            href='https://www.instagram.com/angerinet/?hl=en'
            target='_blank'
            rel='noopener noreferrer'
            className='about-link-a'
          >
            Follow on Instagram @angerinet
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Info;

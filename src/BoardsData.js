import ps1 from '../src/assets/boards/ps1.jpg';
import ps2 from '../src/assets/boards/ps2.jpg';
import ps3 from '../src/assets/boards/ps3.jpg';
import ps4 from '../src/assets/boards/ps4.jpg';

const boardsData = {
  0: {
    level: 0,
    name: 'PS1',
    img: ps1,
    characters: [
      {
        name: 'Cloud',
        found: false,
      },
      {
        name: 'Crash',
        found: false,
      },
      {
        name: 'PaRappa',
        found: false,
      },

    ],
  },
  1: {
    level: 1,
    name: 'PS2',
    img: ps2,
    characters: [
      {
        name: 'Prince',
        found: false,
      },
      {
        name: 'Ratchet',
        found: false,
      },
      {
        name: 'Tommy',
        found: false,
      },
    ],
  },
  2: {
    level: 2,
    name: 'PS3',
    img: ps3,
    characters: [
      {
        name: 'Cole',
        found: false,
      },
      {
        name: 'Dwarf Odin',
        found: false,
      },
      {
        name: 'Joel',
        found: false,
      },
    ],
  },
  3: {
    level: 3,
    name: 'PS4',
    img: ps4,
    characters: [
      {
        name: 'Arthur Morgan',
        found: false,
      },
      {
        name: 'Kratos',
        found: false,
      },
      {
        name: 'Nathan Drake',
        found: false,
      },
    ],
  },
};

export default boardsData;

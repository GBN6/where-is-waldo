import React from 'react';
import CharacterDropdownField from '../utilities/CharacterDropdownField';
// ps1 images
import PaRappa from './assets/characters/parappa.png';
import Cloud from './assets/characters/cloud.png';
import Crash from './assets/characters/crash.png';
// ps2 images
import Prince from './assets/characters/prince.png';
import Ratchet from './assets/characters/ratchet.png';
import Tommy from './assets/characters/tommy.png';
// ps3 images
import Cole from './assets/characters/cole.png';
import Dwarf from './assets/characters/dwarf.png';
import Joel from './assets/characters/joelUs.png';
// ps4 images
import Arthur from './assets/characters/arthur.png';
import Kratos from './assets/characters/kratos.png';
import Drake from './assets/characters/drake.png';

const CharacterDropdown = (props) => {
  const { characters, show, clickLocation, clicked } = props;

  const getCharacterImage = (character) => {
    switch (character) {
      // ps1
      case 'PaRappa':
        return PaRappa;
      case 'Cloud':
        return Cloud;
      case 'Crash':
        return Crash;
      // ps2
      case 'Prince':
        return Prince;
      case 'Ratchet':
        return Ratchet;
      case 'Tommy':
        return Tommy;
      // ps3
      case 'Cole':
        return Cole;
      case 'Dwarf Odin':
        return Dwarf;
      case 'Joel':
        return Joel;
      // ps4
      case 'Arthur Morgan':
        return Arthur;
      case 'Kratos':
        return Kratos;
      case 'Nathan Drake':
        return Drake;
      default:
        break;
    }
  };

  const CharactersDropdownFields = () => {
    return characters.map((character) => {
      return (
        <CharacterDropdownField
          image={getCharacterImage(character.name)}
          title={character.name}
          clicked={clicked}
        />
      );
    });
  };

  return (
<div className={`${show ? "absolute" : "hidden"}`} style={clickLocation}>
      <div
        className="character-dropdown-menu"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <CharactersDropdownFields />
      </div>
    </div>
  );
};

export default CharacterDropdown;

import React from "react";
// ps1 images
import PaRappa from "./assets/characters/parappa.png";
import Cloud from "./assets/characters/cloud.png";
import Crash from "./assets/characters/crash.png";
// ps2 images
import Prince from "./assets/characters/prince.png";
import Ratchet from "./assets/characters/ratchet.png";
import Tommy from "./assets/characters/tommy.png";
// ps3 images
import Cole from './assets/characters/cole.png'
import Dwarf from './assets/characters/dwarf.png'
import Joel from './assets/characters/joelUs.png'
// ps4 images
import Arthur from "./assets/characters/arthur.png";
import Kratos from "./assets/characters/kratos.png";
import Drake from "./assets/characters/drake.png";

const Character = (props) => {
    const { name, found } = props
  let image = null;
  switch (name) {
    // ps1
    case "PaRappa":
      image = PaRappa;
      break;
    case "Cloud":
      image = Cloud;
      break;
    case "Crash":
      image = Crash;
      break;
    // ps2
    case "Prince":
      image = Prince;
      break;
    case "Ratchet":
      image = Ratchet;
      break;
    case "Tommy":
      image = Tommy;
      break;
    // ps3
    case "Cole":
        image = Cole;
        break;
    case 'Dwarf Odin':
        image = Dwarf
        break;
    case 'Joel':
        image = Joel
        break;
    // ps4
    case "Arthur Morgan":
      image = Arthur;
      break;
    case "Kratos":
      image = Kratos;
      break;
    case "Nathan Drake":
      image = Drake;
      break;
    default:
      break;
  }

  return (
    <div className='character-container'>
      <img
        className={`${found && "faded"} character-img`}
        src={image}
        alt={name}
      />
      <p className="character-name">{name}</p>
    </div>
  );
};

export default Character;
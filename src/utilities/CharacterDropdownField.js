import React from "react";

const CharacterDropdownField = (props) => {

    const {title, image, clicked} = props;

  return (
    <a
      key={title}
      href="#menuitem"
      className="character-dropdown-a"
      onClick={() => clicked(title)}
      role="menuitem"
    >
      <div className="character-dropdown-div">
        <img
          className="character-dropdown-img"
          src={image}
          alt={title}
        />
        <div>{title}</div>
      </div>
    </a>
  );
};

export default CharacterDropdownField;
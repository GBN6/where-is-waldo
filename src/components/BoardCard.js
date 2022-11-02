import React from "react";

const BoardCard = (props) => {
    const {img, alt, name} = props;
  return (
    <div className="board-container">
      <img className="board-img" src={img} alt={alt} />
      <span className="board-name">{name}</span>
    </div>
  );
};

export default BoardCard;
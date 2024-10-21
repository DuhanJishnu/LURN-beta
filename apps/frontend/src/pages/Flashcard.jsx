import React, { useState } from 'react';
import './flascard.css';

const Card = ({ isTop, onClick }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
    onClick();  // Notify parent to raise the z-index
  };

  return (
    <div
      className={`card ${flipped ? 'flipped' : ''}`}
      onClick={handleClick}
      style={{ zIndex: isTop ? 2 : 0 }} // Use zIndex to control which card is on top
    >
      <span className="wrapper">
        <span className="content">
          <span className="face back"></span>
          <span className="face front"></span>
        </span>
      </span>
    </div>
  );
};

const Board = () => {
  const [topCard, setTopCard] = useState(null); // Track which card is on top

  const bringCardToTop = (index) => {
    setTopCard(index);  // Update the index of the top card
  };

  return (
    <div className="board">
      {[...Array(3)].map((_, index) => (
        <Card
          key={index}
          isTop={topCard === index}  // Check if this card is the top card
          onClick={() => bringCardToTop(index)}  // Bring this card to the top when clicked
        />
      ))}
    </div>
  );
};

export default Board;

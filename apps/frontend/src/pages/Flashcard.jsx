import React from 'react';
import './flashcard.scss'; 

const flashcardData = [
  {
    q: "What is a dog's most common way of communicating?",
    a: "Barking",
  },
  {
    q: "Which planet is known as the Red Planet?",
    a: "Mars",
  },
  {
    q: "What is the largest ocean on Earth?",
    a: "Pacific Ocean",
  },
];

const Flashcards = () => {
  return (
    <article className="board">
      {flashcardData.map((card, index) => (
        <button 
          className="card" 
          key={index} 
          onClick={(e) => e.currentTarget.classList.toggle('flipped')}
        >
          <span className="wrapper">
            <span className="content">
              <span className="face back">
                <div className="back-top">{card.q}</div>
                <div className="back-bottom">Back Bottom Text</div>
              </span>
              <span className="face front">
                <div className="front-top">{card.a}</div>
                <div className="front-bottom">Front Bottom Text</div>
              </span>
            </span>
          </span>
        </button>
      ))}
    </article>
  );
};

export default Flashcards;

import React from 'react';
import './flashcard.scss'; 
import { useLocation } from 'react-router-dom';

const Flashcards = () => {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <article className="board">
      {data.map((card, index) => (
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

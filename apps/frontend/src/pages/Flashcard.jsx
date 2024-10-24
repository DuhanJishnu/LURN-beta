import React from 'react';
import './flashcard.scss'; 
import { useLocation } from 'react-router-dom';

const Flashcards = () => {
  const location = useLocation();
  const data = location.state?.data;
  return (
   <div className="bg-black h-[100vh] w-[100vw] flex px-[22vw] py-[30vh]">
     <article className="board ">
      {data.map((card, index) => (
        <button 
          className="card hover:shadow-[0_4px_30px_rgba(255,255,255,1)] rounded-lg " 
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
   </div>
  );
};

export default Flashcards;

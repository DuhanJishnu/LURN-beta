import React from 'react';
import './flashcard.scss'; 
import { useLocation } from 'react-router-dom';

const Flashcards = () => {
  const location = useLocation();
  const data = location.state?.data;
  return (
  <div> 
    <div className='bg-black h-32'>
      <h1 className='text-white font-bold italic text-4xl text-center'>
        FlashCards</h1>
      <br/>  
      <h2 className='text-white italic text-3xl text-center'>
        Topic : Topic Here </h2>
    </div> 
   <div className=" flex w-screen h-screen bg-black px-[17vw]">
     <article className="board ">
      {data.map((card, index) => (
        <button 
          className="card" 
          key={index} 
          onClick={(e) => e.currentTarget.classList.toggle('flipped')}
        >
          <span className="wrapper">
            <span className="content">
              <span className="face back">
                <div className="back-top p-2 mt-10 font-bold text-xl text-[#4d0707] ">{card.q}</div>
                <div>😅😉</div>
              </span>
              <span className="face front">
                <div className="front-top p-2 mt-10 font-bold text-xl text-[#054a03]">{card.a}</div>
                <div>😊😗</div>
              </span>
            </span>
          </span>
        </button>
      ))}
    </article>
   </div>
  </div>
  );
};

export default Flashcards;

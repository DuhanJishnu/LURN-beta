import React, { useEffect, useState } from 'react';
import './flashcard.scss'; 
import { useLocation } from 'react-router-dom';

const Flashcards = () => {
  const location = useLocation();
  const data = location.state?.data;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => {
          setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);
  return (
  <div className="bg-black pt-20"> 
    <div className='bg-black h-32'>
      <h1 className='text-white font-bold italic text-4xl text-center'>
        FlashCards</h1>
      <br/>  
      <h2 className='text-white italic text-3xl text-center'>
        Topic : Topic Here </h2>
    </div> 
   
     {screenWidth > 768 ? <DesktopFlash data={data}/> : <MobileFlash data={data}/>}
  </div>
  );
};

const DesktopFlash = ({data}) => {
  return (
    <div className=" flex w-screen h-screen bg-black px-[17vw]">
    <article className="board ">
      {data.map((card, index) => (
        <button 
          className="card" 
          key={index} 
          onClick={(e) => e.currentTarget.classList.toggle('flipped')}
        >
          <span className="wrapper_flashcard">
            <span className="content_flashcard">
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
  )
}

const MobileFlash = ({data}) => {

  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentCard((prev) => (prev + 1) % data.length);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setCurrentCard((prev) => (prev - 1 + data.length) % data.length);
  };

  const toggleAnswer = () => setShowAnswer((prev) => !prev);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div
        className={`relative w-80 h-48 bg-blue-500 text-center rounded-lg shadow-lg transition-transform duration-500 ${
          showAnswer ? "rotate-y-180" : ""
        }`}
        onClick={toggleAnswer}
      >
        <div className={`absolute w-full h-full p-4 flex items-center justify-center backface-hidden ${showAnswer ? "hidden" : "block"}`}>
          <p className="text-lg">{data[currentCard].q}</p>
        </div>
        <div className={`absolute w-full h-full p-4 flex items-center justify-center backface-hidden transform rotate-y-180 ${showAnswer ? "block" : "hidden"}`}>
          <p className="text-lg">{data[currentCard].a}</p>
        </div>
      </div>

      <div className="flex mt-6 space-x-4">
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
          onClick={prevCard}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
          onClick={nextCard}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Flashcards;


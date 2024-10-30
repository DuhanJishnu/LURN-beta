import React, { useState } from "react";

const MobileFlash = () => {
  const flashcards = [
    { q: "What is the scientific name for the domestic cat?", a: "Felis catus" },
    { q: "Are cats crepuscular or nocturnal?", a: "Crepuscular (active at dawn/dusk)" },
    { q: "How many whiskers does a cat typically have?", a: "24 (12 on each side)" },
    { q: "What organ allows cats to detect high-pitched sounds?", a: "Jacobson's organ" },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
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
          <p className="text-lg">{flashcards[currentCard].q}</p>
        </div>
        <div className={`absolute w-full h-full p-4 flex items-center justify-center backface-hidden transform rotate-y-180 ${showAnswer ? "block" : "hidden"}`}>
          <p className="text-lg">{flashcards[currentCard].a}</p>
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

export default MobileFlash;
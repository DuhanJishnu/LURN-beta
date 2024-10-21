import { useState } from "react";

const flashcardsData = [
  { q: "What is JavaScript?", a: "A programming language for web development." },
  { q: "What is a variable?", a: "A storage for data values." },
  { q: "What is a function?", a: "A block of code that performs a task." },
  { q: "What is an array?", a: "A collection of elements." },
  { q: "What is the DOM?", a: "Document Object Model, representing the page." },
  { q: "What is an object?", a: "A collection of key-value pairs." },
  { q: "What is a loop?", a: "A structure to repeat code." },
  { q: "How do you declare a variable?", a: "Using let, var, or const." },
  { q: "What is a conditional?", a: "A statement that runs based on a condition." },
  { q: "How to comment in JavaScript?", a: "Use // or /* */." },
];

function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === flashcardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcardsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#212121] text-white">
      <div className="relative w-[]">
        <button
          className="absolute left-0 top-[50%] translate-y-[-50%] bg-gray-700 p-2 rounded-full"
          onClick={handlePrev}
        >
          ←
        </button>

        <div className="card-wrapper w-full h-[200px] perspective">
          <div className="card-body w-full h-full relative text-center transform-style-3d transition-transform duration-500"
            style={{ transform: "rotateX(0)" }}>
            <div className="card-front absolute w-full h-full bg-white text-black flex items-center justify-center backface-hidden">
              <p>{flashcardsData[currentIndex].q}</p>
            </div>
            <div className="card-back absolute w-full h-full bg-gray-200 text-black flex items-center justify-center rotateX-180 backface-hidden">
              <p>{flashcardsData[currentIndex].a}</p>
            </div>
          </div>
        </div>

        <button
          className="absolute right-0 top-[50%] translate-y-[-50%] bg-gray-700 p-2 rounded-full"
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Flashcards;
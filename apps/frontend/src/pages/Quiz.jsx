import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../Components/NightSky.css"; 
const Quiz = () => {
  const location = useLocation();
  const questions = location.state?.data;
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setAnswers({ ...answers, [currentQuestionIndex]: option });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(answers[currentQuestionIndex + 1] || null);
    } else {
      setQuizCompleted(true);
    }
  };

  const evaluateQuiz = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correct_option) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  return (
    <div className="flex flex-col wrapper min-h-[100vh] h-fit min-w-[100vw] w-fit items-center justify-center  p-6">
      {!quizCompleted ? (
        <div className=" p-10 rounded-lg  shadow-lg w-full max-w-3xl text-center mt-4 shadow-black shadow-lg">
          <h2 className="text-2xl  mb-6 text-white  p-4 rounded-full font-baloo">
            {currentQuestion.question_text}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {['option_1', 'option_2', 'option_3', 'option_4'].map((option, index) => (
              <button
                key={index}
                className={`p-4 font-baloo rounded-full text-xl text-white border border-[#0A2463] hover:shadow-md hover:shadow-black transition-colors ${
                  selectedOption === option ? 'shadow-md shadow-black bg-green-600' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {currentQuestion[option]}
              </button>
            ))}
          </div>
          <button
            className="mt-8 hover:bg-orange-100 hover:text-black p-4 px-7r rounded-full border border-[#0A2463] text-white font-baloo  text-xl hover:shadow-md hover:shadow-black transition-colors"
            onClick={handleNextQuestion}
            disabled={!selectedOption}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      ) : (
        <div className="bg-[#0B3C73] p-10 rounded-lg shadow-lg w-full max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Quiz Completed!</h2>
          <p className="text-2xl mb-4">
            You answered {evaluateQuiz()} out of {questions.length} questions correctly.
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-800 p-4 rounded-lg text-xl"
            onClick={() => navigate("/welcome") }
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

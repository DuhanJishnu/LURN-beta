import React, { useState } from 'react';

const questions = [
  {
    question_text: "What is a dog's most common way of communicating?",
    option_1: "Barking",
    option_2: "Meowing",
    option_3: "Chirping",
    option_4: "Hissing",
    correct_option: "option_1",
  },
  {
    question_text: 'Which planet is known as the Red Planet?',
    option_1: 'Earth',
    option_2: 'Mars',
    option_3: 'Jupiter',
    option_4: 'Saturn',
    correct_option: 'option_2',
  },
  {
    question_text: 'What is the capital city of Japan?',
    option_1: 'Beijing',
    option_2: 'Seoul',
    option_3: 'Tokyo',
    option_4: 'Bangkok',
    correct_option: 'option_3',
  },
];

const Quiz = () => {
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
    <div className="flex flex-col items-center justify-center h-screen bg-[#212121] text-white p-6">
      {!quizCompleted ? (
        <div className="bg-[#0B3C73] p-10 rounded-lg shadow-lg w-full max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-6 text-white border border-[#0A2463] p-4 rounded-lg">
            {currentQuestion.question_text}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {['option_1', 'option_2', 'option_3', 'option_4'].map((option, index) => (
              <button
                key={index}
                className={`p-4 rounded-lg text-xl text-white border-2 border-[#0A2463] hover:bg-[#064287] transition-colors ${
                  selectedOption === option ? 'bg-[#0A72B1]' : 'bg-[#0B3C73]'
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {currentQuestion[option]}
              </button>
            ))}
          </div>
          <button
            className="mt-8 bg-[#0A72B1] hover:bg-[#064287] p-4 rounded-lg text-xl"
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
            onClick={() => window.location.reload()}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

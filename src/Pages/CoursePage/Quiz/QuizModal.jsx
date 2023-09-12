import React, { useState } from "react";

const QuizModal = ({ milestone, quizzes, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      if (currentQuestionIndex < quizzes.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        onClose();
      }
    }
  };

  const handleOptionChange = (optionIndex) => {
    setSelectedAnswer(optionIndex);
  };

  const currentQuestion = quizzes[currentQuestionIndex];

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-black font-bold mb-4">
          Quizzes for {milestone} Milestone
        </h2>
        <div className="mb-4">
          <h3 className="text-xl text-black font-semibold">
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </h3>
          <form className="ml-4">
            {currentQuestion.options.map((option, optionIndex) => (
              <div key={optionIndex} className="mb-2">
                <input
                  type="radio"
                  id={`quiz-option-${optionIndex}`}
                  name="quiz-options"
                  value={option}
                  checked={selectedAnswer === optionIndex}
                  onChange={() => handleOptionChange(optionIndex)}
                />
                <label
                  htmlFor={`quiz-option-${optionIndex}`}
                  className="ml-2 text-black"
                >
                  {option}
                </label>
              </div>
            ))}
          </form>
        </div>
        <button
          onClick={handleNextQuestion}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
          disabled={selectedAnswer === null}
        >
          {currentQuestionIndex < quizzes.length - 1 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default QuizModal;

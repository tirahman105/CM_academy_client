import React, { useState } from "react";

const QuizModal = ({ milestoneName, quizzes, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(quizzes.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false); // Track quiz completion
  const [score, setScore] = useState(0); // Store the user's score
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const handleNextQuestion = () => {
    if (selectedAnswers[currentQuestionIndex] !== null) {
      if (currentQuestionIndex < quizzes.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // If all questions are answered, calculate and display the result
        calculateQuizResult();
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleOptionChange = (optionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const currentQuestion = quizzes[currentQuestionIndex];

  const calculateQuizResult = () => {
    // Calculate the user's score based on selected answers
    const userScore = quizzes.reduce((totalScore, quiz, questionIndex) => {
      if (quiz.correctOption === selectedAnswers[questionIndex]) {
        return totalScore + 1; // Increment score if the selected answer is correct
      }
      return totalScore;
    }, 0);

    setScore(userScore);
    setQuizCompleted(true);
  };

  const handleShowCorrectAnswers = () => {
    setShowCorrectAnswers(true);
  };

  const renderResult = () => {
    if (quizCompleted) {
      return (
        <div className="mb-4 text-white">
          <h2 className="text-xl font-semibold">Quiz Result</h2>
          <p>Your score: {score} out of {quizzes.length}</p>
          {/* You can provide additional feedback based on the score */}
          {score === quizzes.length ? (
            <p>Congratulations! You got all the questions correct.</p>
          ) : (
            <div>
              <p>Keep practicing to improve your score!</p>
              {!showCorrectAnswers && (
                <button
                  onClick={handleShowCorrectAnswers}
                  className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                >
                  Show Correct Answers
                </button>
              )}
            </div>
          )}
          {!showCorrectAnswers && (
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
            >
              Close
            </button>
          )}
        </div>
      );
    }
    return null;
  };

  const renderCorrectAnswers = () => {
    if (showCorrectAnswers) {
      return (
        <div className="mt-4 text-white">
          <h2 className="text-xl font-semibold">Correct Answers and Explanations</h2>
          {quizzes.map((quiz, questionIndex) => (
            <div key={questionIndex} className="mb-4">
              <h3 className="text-lg font-semibold">
                Question {questionIndex + 1}: {quiz.question}
              </h3>
              <p>Correct Answer: {quiz.options[quiz.correctOption]}</p>
              <p>Explanation: {quiz.explanation}</p>
            </div>
          ))}
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
          >
            Close
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#1a2c49]  p-6 bg-opacity-70 rounded-lg">
        <div className="h-full">
          {renderResult()}
          {renderCorrectAnswers()}
          {!quizCompleted && !showCorrectAnswers && (
            <div>
              <h2 className="text-2xl text-white font-bold mb-4">
                Quizzes for {milestoneName} Milestone
              </h2>
              <div className="mb-4">
                <h3 className="text-xl text-white font-semibold">
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
                        checked={selectedAnswers[currentQuestionIndex] === optionIndex}
                        onChange={() => handleOptionChange(optionIndex)}
                      />
                      <label
                        htmlFor={`quiz-option-${optionIndex}`}
                        className="ml-2 text-white"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </form>
              </div>
              <div className="flex">
                {currentQuestionIndex > 0 && (
                  <button
                    onClick={handlePreviousQuestion}
                    className={`px-4 py-2 mr-3 rounded-md ${currentQuestionIndex > 0
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                  >
                    Previous
                  </button>
                )}
                <button
                  onClick={handleNextQuestion}
                  className={`px-4 py-2 rounded-md ${selectedAnswers[currentQuestionIndex] === null
                      ? "bg-green-500 disabled text-white cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                  disabled={selectedAnswers[currentQuestionIndex] === null}
                >
                  {currentQuestionIndex < quizzes.length - 1 ? "Next" : "Submit"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;

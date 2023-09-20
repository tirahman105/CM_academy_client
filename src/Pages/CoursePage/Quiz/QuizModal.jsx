import { useState } from "react";
import Swal from 'sweetalert2';


const QuizModal = ({
  milestoneName,
  quizzes,
  onClose,
  courseId,
  studentEmail,
  setRefresh
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(quizzes.length).fill(null)
  );
  const [quizCompleted, setQuizCompleted] = useState(false); // Track quiz completion
  const [score, setScore] = useState(0); // Store the user's score
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);


  const handleCloseButtonClick = async () => {
    const { isConfirmed } = await Swal.fire({
      title: 'Are you sure?',
      text: 'If you close the quiz, your progress will be lost.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, close it',
      cancelButtonText: 'No, continue',
    });

    if (isConfirmed) {
      // User confirmed, close the modal
      onClose();
      setRefresh(true);
    }
  };


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

  const calculateQuizResult = async () => {
    // Calculate the user's score based on selected answers
    const userScore = quizzes.reduce((totalScore, quiz, questionIndex) => {
      if (quiz.correctOption === selectedAnswers[questionIndex]) {
        return totalScore + 1; // Increment score if the selected answer is correct
      }
      return totalScore;
    }, 0);

    // Calculate the score percentage
    const scorePercentage = (userScore / quizzes.length) * 100;

    setScore(scorePercentage);
    setQuizCompleted(true);

    // Send the score to the backend API
    try {
      const response = await fetch("http://localhost:5000/api/storeQuizScore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          milestoneName, // Include the milestone name
          score: scorePercentage,
          courseId, // Include the courseId
          studentEmail, // Include the studentEmail
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to store quiz score.");
      }
    } catch (error) {
      console.error("Error storing quiz score:", error);
    }
    window.location.reload();
  };

  const handleShowCorrectAnswers = () => {
    setShowCorrectAnswers(true);
  };

  const renderResult = () => {
    if (quizCompleted) {
      return (
        <div className="mb-8 p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#1a2c49] via-[#35406e] to-indigo-800 border border-[#36cbd330] text-white">
          <h2 className="text-4xl font-semibold mb-4">Quiz Result</h2>
          <p className="text-2xl mb-2">
            Your Score:{" "}
            <span className="text-yellow-500 font-bold text-xl">{score}</span> /{" "}
            <span className="text-blue-500 font-bold text-xl">
              {quizzes.length}
            </span>
          </p>
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
              onClick={() => {
                onClose();
                setRefresh(true);
              }}
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
          <h2 className="text-xl font-semibold">
            Correct Answers and Explanations
          </h2>
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
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 backdrop-blur-lg">
      <div className="bg-[#1a2c49] p-10 bg-opacity-70 rounded-lg">
        <div className="h-full">
          {renderResult()}
          {renderCorrectAnswers()}
          {!quizCompleted && !showCorrectAnswers && (
            <div style={{ position: 'relative' }}>
              {/* Add the Close button in the top-right corner */}
              <button
                onClick={handleCloseButtonClick}
                className="absolute font-bold top-0 right-0 -mt-7 mr-0 px-3 py-1 rounded-full text-white hover:bg-red-600"
              >
                X
              </button>

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
                        checked={
                          selectedAnswers[currentQuestionIndex] === optionIndex
                        }
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
                  {currentQuestionIndex < quizzes.length - 1
                    ? "Next"
                    : "Submit"}
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

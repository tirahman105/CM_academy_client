import { useState, useEffect } from 'react';
import axios from 'axios';

const TestQuiz = () => {
    const [data, setData] = useState(null);
    const [selectedMilestone, setSelectedMilestone] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false); // Track quiz completion
    const [score, setScore] = useState(0); // Store the user's score

    useEffect(() => {
        // Define the URL you want to fetch data from
        const apiUrl = "https://cm-academy-test-server-production.up.railway.app/categories/byId/64e8adb31a93e023beb3186d";

        // Make the HTTP GET request using Axios
        axios.get(apiUrl)
            .then((response) => {
                // Update the state with the fetched data
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleMilestoneSelect = (milestone) => {
        setSelectedMilestone(milestone);
        // Reset the question index and clear selected options when a new milestone is selected
        setCurrentQuestionIndex(0);
        setSelectedOptions([]);
        setQuizCompleted(false); // Reset quiz completion status
        setScore(0); // Reset the user's score
    };

    const handleRadioChange = (optionIndex) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentQuestionIndex] = optionIndex;
        setSelectedOptions(updatedSelectedOptions);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < data.courseOutline[selectedMilestone].quizzes.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // If all questions are answered, calculate and display the result
            calculateQuizResult();
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const calculateQuizResult = () => {
        // Calculate the user's score based on selected options
        const selectedQuiz = data.courseOutline[selectedMilestone].quizzes;
        const userScore = selectedOptions.reduce((score, optionIndex, questionIndex) => {
            if (selectedQuiz[questionIndex].correctOption === optionIndex) {
                return score + 1; // Increment score if the selected option is correct
            }
            return score;
        }, 0);

        setScore(userScore);
        setQuizCompleted(true);
    };

    const renderQuestion = () => {
        if (
            selectedMilestone !== null &&
            data &&
            data.courseOutline[selectedMilestone] &&
            currentQuestionIndex >= 0 &&
            currentQuestionIndex < data.courseOutline[selectedMilestone].quizzes.length
        ) {
            const quiz = data.courseOutline[selectedMilestone].quizzes[currentQuestionIndex];
            return (
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">
                        {currentQuestionIndex + 1}. {quiz.question}
                    </h3>
                    <ul>
                        {quiz.options.map((option, optionIndex) => (
                            <li key={optionIndex} className="mb-2">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name={`question${currentQuestionIndex}`}
                                        checked={selectedOptions[currentQuestionIndex] === optionIndex}
                                        onChange={() => handleRadioChange(optionIndex)}
                                        className="mr-2"
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        {currentQuestionIndex > 0 && (
                            <button
                                onClick={handlePreviousQuestion}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                            >
                                Previous
                            </button>
                        )}
                        {currentQuestionIndex < data.courseOutline[selectedMilestone].quizzes.length - 1 && (
                            <button
                                onClick={handleNextQuestion}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                Next Question
                            </button>
                        )}
                        {currentQuestionIndex === data.courseOutline[selectedMilestone].quizzes.length - 1 && (
                            <button
                                onClick={calculateQuizResult}
                                className="bg-green-500 text-white px-4 py-2 rounded-md ml-2"
                            >
                                Submit Quiz
                            </button>
                        )}
                    </div>
                </div>
            );
        }
        return null;
    };

    const renderQuizResult = () => {
        if (quizCompleted) {
            return (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-4">
                        Quiz Result
                    </h2>
                    <p>Your score: {score} out of {data.courseOutline[selectedMilestone].quizzes.length}</p>
                    {/* You can provide additional feedback based on the score */}
                    {score === data.courseOutline[selectedMilestone].quizzes.length ? (
                        <p>Congratulations! You got all the questions correct.</p>
                    ) : (
                        <p>Keep practicing to improve your score!</p>
                    )}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="py-8 px-4">
            <h1 className="text-3xl font-bold mb-4">{data ? data.title : 'Loading...'}</h1>
            <div className="mb-4">
                <button
                    onClick={() => handleMilestoneSelect(null)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                >
                    Select a Milestone
                </button>
                {data && (
                    <select
                        onChange={(e) => handleMilestoneSelect(e.target.value)}
                        className="bg-gray-200 px-4 py-2 rounded-md"
                    >
                        <option value="">Select a Milestone</option>
                        {data.courseOutline.map((milestone, milestoneIndex) => (
                            <option key={milestoneIndex} value={milestoneIndex}>
                                {milestone.milestone}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            {renderQuestion()}
            {renderQuizResult()}
        </div>
    );
};

export default TestQuiz;

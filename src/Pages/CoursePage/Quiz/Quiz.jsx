import React, { useState, useEffect } from 'react';

const Quiz = () => {
    // Step 1: Initialize component state
    const [data, setData] = useState(null);
    const [selectedMilestone, setSelectedMilestone] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);


    console.log("data", data)
    // Step 2: Fetch quiz data from an API when the component mounts
    useEffect(() => {
        const apiUrl = "https://cm-academy-test-server-production.up.railway.app/categories/64e8adb31a93e023beb3186d";

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // Step 3: Update the state with fetched data
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    // Step 4: Check if the user has previously completed the quiz for the selected milestone
    useEffect(() => {
        if (selectedMilestone) {
            // Step 5: Retrieve user's quiz result from a function (getUserQuizResult)
            const savedResult = getUserQuizResult(selectedMilestone);
            if (savedResult) {
                // Step 6: Update the state with the user's score and mark the quiz as completed
                setScore(savedResult.score);
                setQuizCompleted(true);
            }
        }
    }, [selectedMilestone]);

    // Step 7: Handle the selection of a milestone
    const handleMilestoneSelect = (milestone) => {
        setSelectedMilestone(milestone);
        setCurrentQuestionIndex(0);
        setSelectedOptions([]);
        setQuizCompleted(false);
        setScore(0);
    };

    // Step 8: Handle radio button selection for quiz options
    const handleRadioChange = (optionIndex) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentQuestionIndex] = optionIndex;
        setSelectedOptions(updatedSelectedOptions);
    };

    // Step 9: Handle navigation to the next quiz question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < data.courseOutline[selectedMilestone].quizzes.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Step 10: Calculate and display the quiz result
            calculateQuizResult();
        }
    };

    // Step 11: Handle navigation to the previous quiz question
    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    // Step 12: Calculate the user's quiz result
    const calculateQuizResult = () => {
        const selectedQuiz = data.courseOutline[selectedMilestone].quizzes;
        const userScore = selectedOptions.reduce((score, optionIndex, questionIndex) => {
            if (selectedQuiz[questionIndex].correctOption === optionIndex) {
                return score + 1;
            }
            return score;
        }, 0);

        // Step 13: Update the state with the user's score and mark the quiz as completed
        setScore(userScore);
        setQuizCompleted(true);

        // Step 14: Save the user's quiz result to a database
        saveUserQuizResult(selectedMilestone, userScore);
    };

    // Step 15: Implement logic to retrieve user's quiz result from the database
    const getUserQuizResult = (milestone) => {
        // Replace with actual database retrieval logic
        return null; // Replace with actual database retrieval logic
    };

    // Step 16: Implement logic to save user's quiz result to the database
    const saveUserQuizResult = (milestone, userScore) => {
        // Replace with actual database saving logic
    };

    // Step 17: Render the current quiz question and options
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

    // Step 18: Render the quiz result
    const renderQuizResult = () => {
        if (quizCompleted) {
            return (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-4">
                        Quiz Result
                    </h2>
                    <p>Your score: {score} out of {data.courseOutline[selectedMilestone].quizzes.length}</p>
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

    // Step 19: Render the entire component
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

export default Quiz;

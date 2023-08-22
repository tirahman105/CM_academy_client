// Import necessary modules and components
import React, { useState } from 'react';
import OptionForm from './OptionForm';

// Define the main QuestionForm component
function QuestionForm() {
    // State to manage the questions
    const [questions, setQuestions] = useState([
        {
            question: '',
            options: [''],
            correctOption: '',
            answerDescription: ''
        }
    ]);

    // Function to add a new question
    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            {
                question: '',
                options: [''],
                correctOption: '',
                answerDescription: ''
            }
        ]);
    };

    // Function to handle changes to a question
    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    // Function to handle changes to an option
    const handleOptionChange = (questionIndex, optionIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(updatedQuestions);
    };

    // Function to save questions (you can add backend/database code here)
    const handleSaveQuestions = () => {
        console.log('Saved Questions:', questions);
        // You can add code here to save the questions to your backend or database
    };

    // Render the component
    return (
        <div className="p-4 bg-white rounded shadow">
            {questions.map((question, index) => (
                <div key={index} className="mb-4">
                    <label className="block font-semibold text-lg mb-2">
                        Question {index + 1}:
                    </label>
                    <textarea
                        className="w-full p-2 border rounded"
                        value={question.question}
                        onChange={(e) =>
                            handleQuestionChange(index, 'question', e.target.value)
                        }
                    />

                    <label className="block font-semibold text-lg mt-4 mb-2">Options:</label>
                    {question.options.map((option, optionIndex) => (
                        <OptionForm
                            key={optionIndex}
                            questionIndex={index}
                            optionIndex={optionIndex}
                            option={option}
                            onChange={handleOptionChange}
                        />
                    ))}
                    <button
                        className="bg-blue-500 text-white px-3 py-2 rounded mt-2"
                        onClick={() =>
                            handleQuestionChange(index, 'options', [
                                ...question.options,
                                ''
                            ])
                        }
                    >
                        Add Option
                    </button>

                    <label className="block font-semibold text-lg mt-4 mb-2">
                        Correct Option:
                    </label>
                    <select
                        className="w-full p-2 border rounded"
                        value={question.correctOption}
                        onChange={(e) =>
                            handleQuestionChange(index, 'correctOption', e.target.value)
                        }
                    >
                        {question.options.map((option, optionIndex) => (
                            <option key={optionIndex} value={optionIndex}>
                                Option {optionIndex + 1}
                            </option>
                        ))}
                    </select>

                    <label className="block font-semibold text-lg mt-4 mb-2">
                        Answer Description:
                    </label>
                    <textarea
                        className="w-full p-2 border rounded"
                        value={question.answerDescription}
                        onChange={(e) =>
                            handleQuestionChange(index, 'answerDescription', e.target.value)
                        }
                    />
                </div>
            ))}

            <button
                className="bg-blue-500 text-white px-3 py-2 rounded mt-2"
                onClick={handleAddQuestion}
            >
                Add More Question
            </button>

            <button
                className="bg-green-500 text-white px-3 py-2 rounded mt-4"
                onClick={handleSaveQuestions}
            >
                Save Questions
            </button>
        </div>
    );
}

// Export the QuestionForm component
export default QuestionForm;

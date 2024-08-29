import React from 'react';

const QuizBody = ({ question, handleAnswer, selectedAnswer, disableSelection }) => {
    // Event handler function extracted to avoid inline function creation on each render
    const handleOptionClick = (event, optionText) => {
        if (!disableSelection) {
            handleAnswer(event, optionText);
        }
    };

    // Determine the class for a given option based on whether it's selected
    const getOptionClasses = (optionText) => {
        return selectedAnswer === optionText
            ? 'bg-green-100 border-green-400'
            : '';
    };

    return (
        <>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">{question.question}</h2>
            <ul className="space-y-2">
                {Object.keys(question).filter(key => key.startsWith('option')).map((key, index) => (
                    <li
                        key={index}
                        onClick={(event) => handleOptionClick(event, question[key])}
                        className={`p-2 border border-gray-400 rounded-lg text-gray-800 cursor-pointer hover:bg-gray-100 ${getOptionClasses(question[key])}`}
                    >
                        {question[key]}
                    </li>
                ))}
            </ul>
        </>
    );
};

// Wrap with React.memo to prevent unnecessary re-renders
export default React.memo(QuizBody);

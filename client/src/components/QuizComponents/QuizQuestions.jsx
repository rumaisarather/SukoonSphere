import React from 'react';

const QuizQuestions = ({ title, index, length, question, handleAnswer, selectedAnswer, disableSelection }) => {
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
            <div className='space-y-4 sticky top-24'>
                <div className="flex justify-between items-center ">
                    <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                    <div className="bg-[var(--logo-primary)] text-white px-4 py-2 rounded-full text-sm">
                        {index + 1}/{length}
                    </div>
                </div>
                <hr className="border-gray-300 mt-4" />
                <h2 className="text-xl font-semibold text-gray-700 mb-4">{question.question}</h2>
                <ul className="space-y-2">
                    {Object.keys(question).filter(key => key.startsWith('option')).map((key, index) => (
                        <li
                            key={index}
                            onClick={(event) => handleOptionClick(event, question[key])}
                            className={`p-2 border border-gray-400 rounded-lg text-gray-800 cursor-pointer hover:bg-green-100 hover:border-green-400 ${getOptionClasses(question[key])}`}
                        >
                            {question[key]}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

// Wrap with React.memo to prevent unnecessary re-renders
export default React.memo(QuizQuestions);

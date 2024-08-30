import React from 'react';

function QuizItem({ title, imgSrc, onClick }) {
  return (
    <div
      className="flex items-center py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-200"
      onClick={onClick} // Call the onClick prop when the item is clicked
    >
      <img src={imgSrc} alt={title} className="w-12 h-12 mr-4" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
}

function QuizList({ quizData, setQuizIndex }) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div>
        {quizData.map((quiz, index) => (
          <QuizItem
            key={index}
            title={quiz.title}
            imgSrc={quiz.imgSrc}
            onClick={() => setQuizIndex(index)} // Set the quiz index on click
          />
        ))}
      </div>
    </div>
  );
}

export default QuizList;

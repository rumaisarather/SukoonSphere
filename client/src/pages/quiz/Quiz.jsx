import React, { useState } from 'react';
import { data } from '../../db/QuizData';
import QuizQuestions from '@/components/quizComponents/QuizQuestions';
import QuizList from '@/components/quizPageComponents/QuizList';
import QuizSummary from '@/components/quizPageComponents/QuizSummary';

function Quiz() {
    const [index, setIndex] = useState(0);
    const [disableSelection, setDisableSelection] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answers, setAnswers] = useState([]);
    const question = data[index];

    const handleAnswer = (event, optionText) => {
        if (!disableSelection) {
            setSelectedAnswer(optionText);
            setDisableSelection(true);
            setAnswers(prevAnswers => [...prevAnswers, optionText]); // Store option text

            setTimeout(() => {
                handleNextQuestion();
            }, 2000);
        }
    };

    const handleNextQuestion = () => {
        setIndex((prevIndex) => prevIndex + 1);
        setDisableSelection(false);
        setSelectedAnswer(null); // Reset selected answer for the next question
    };

    const quizData = [
        {
            title: "What's Your Attachment Style?",
            imgSrc: "https://via.placeholder.com/50/000000/FFFFFF/?text=A",
        },
        {
            title: "How Empathic are you?",
            imgSrc: "https://via.placeholder.com/50/000000/FFFFFF/?text=B",
        },
        {
            title: "What is your comunication style?",
            imgSrc: "https://via.placeholder.com/50/000000/FFFFFF/?text=C",
        },
        {
            title: "Discover your stress management style?",
            imgSrc: "https://via.placeholder.com/50/000000/FFFFFF/?text=D",
        },
    ];

    return (
        <>
            <div className="max-w-full mx-auto px-4 bg-white mt-24">
                <div className="grid sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-4 grid gap-6 p-4 rounded  bg-[#F7F9F9]">
                        <div>
                            <QuizQuestions
                                title={"What's Your Attachment Style?"}
                                length={data.length}
                                index={index}
                                question={question}
                                handleAnswer={handleAnswer}
                                selectedAnswer={selectedAnswer}
                                disableSelection={disableSelection}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-5 grid gap-6  p-4 rounded sticky top-20">
                        {/* Pass the current index to QuizSummary */}
                        <QuizSummary quizIndex={index} />
                    </div>
                    {/* sidebar */}
                    <div
                        className="sm:col-span-3 bg-[#F7F9F9] p-4 rounded flex flex-col gap-8 sticky top-20"
                        style={{ height: "max-content" }}>
                        <h3 className='text-lg font-bold text-gray-900 text-center'> Related Quizzes</h3>
                        <QuizList quizData={quizData} setQuizIndex={setIndex} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quiz;

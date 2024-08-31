import React, { useState, useEffect } from 'react';
import { data } from '../../db/QuizData';
import QuizQuestions from '@/components/quizComponents/QuizQuestions';
import QuizList from '@/components/quizPageComponents/QuizList';
import QuizSummary from '@/components/quizPageComponents/QuizSummary';
import { QuizSummarydata } from '@/utils/QuizSummary';
import QuizSubmissionDialog from '@/components/quizPageComponents/QuizSubmissionDialog';

function Quiz() {
    const [index, setIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [disableSelection, setDisableSelection] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    const handleAnswer = (event, optionText) => {
        setSelectedAnswer(optionText);
        setDisableSelection(true);

        // Store the selected answer for the current quiz
        setAnswers((prevAnswers) => [...prevAnswers, { question: currentQuestion.question, selectedOption: optionText }]);
        if (currentQuestionIndex < QuizSummarydata[index].quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setDisableSelection(false);
        } else {
            console.log('Quiz Completed');
            setIsQuizCompleted(true);
            setCurrentQuestionIndex(0);
            setSelectedAnswer(null);
        }

    };

    const currentQuestion = QuizSummarydata[index].quizQuestions[currentQuestionIndex];

    const recentQuizzesTitles = [
        {
            title: "What's Your Attachment Style?",
            imgSrc: "https://via.placeholder.com/50/000000/FFFFFF/?text=A",
        },
        {
            title: "How Empathic are you?",
            imgSrc: "https://via.placeholder.com/50/000000/FFFFFF/?text=B",
        },
        {
            title: "What is your communication style?",
            imgSrc: "https://via.placeholder.com/50/000000/FFFFFF/?text=C",
        },
        {
            title: "Discover your stress management style?",
            imgSrc: "https://via.placeholder.com/50/000000/FFFFFF/?text=D",
        },
    ];

    // Show the modal if the quiz is completed
    useEffect(() => {
        if (isQuizCompleted) {
            document.getElementById('my_modal_3').showModal();
        }
    }, [isQuizCompleted]);

    const resetToDefault = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setDisableSelection(false);
        setIsQuizCompleted(false);
        setAnswers([]);
    }
    useEffect(() => {
        resetToDefault()
    }, [index]);

    return (
        <>
            <div className="max-w-full mx-auto px-4 mt-24 bg-primary">
                <div className="grid sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-4 grid gap-6 p-4 rounded bg-[#F7F9F9]">
                        <div>
                            <QuizQuestions
                                title={QuizSummarydata[index].title}
                                length={QuizSummarydata[index].quizQuestions.length}
                                index={currentQuestionIndex}
                                question={currentQuestion}
                                handleAnswer={handleAnswer}
                                selectedAnswer={selectedAnswer}
                                disableSelection={disableSelection}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-5 grid gap-6 p-4 rounded sticky top-20">
                        <QuizSummary quizIndex={index} />
                    </div>
                    {/* Sidebar */}
                    <div
                        className="sm:col-span-3 bg-[#F7F9F9] p-4 rounded flex flex-col gap-8 sticky top-20"
                        style={{ height: "max-content" }}>
                        <h3 className='text-lg font-bold text-gray-900 text-center'>Related Quizzes</h3>
                        <QuizList quizData={recentQuizzesTitles} setQuizIndex={setIndex} />
                    </div>
                </div>
            </div>
            <QuizSubmissionDialog answers={answers} />
        </>
    );
}

export default Quiz;

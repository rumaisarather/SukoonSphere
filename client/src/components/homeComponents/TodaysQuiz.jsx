import React, { useState } from 'react';
import { data } from '../../db/QuizData';
import QuizQuestions from '../quizComponents/QuizQuestions';
import QuizSummary from '../quizComponents/QuizSummary';

function TodaysQuiz() {
    const [index, setIndex] = useState(0);
    const [disableSelection, setDisableSelection] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answers, setAnswers] = useState([]); // Store selected answers as text
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

    return (
        <>
            <div className="max-w-7xl mx-auto bg-white">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="col-span-5 grid gap-6 p-6 bg-white rounded-lg shadow-lg">
                        <QuizQuestions
                            title={"What's Your Attachment Style?"}
                            index={index}
                            length={data.length}
                            question={question}
                            handleAnswer={handleAnswer}
                            selectedAnswer={selectedAnswer}
                            disableSelection={disableSelection}
                        />
                    </div>
                    <div className="col-span-7 p-6 bg-white rounded-lg">
                        <QuizSummary
                            SummaryTitle={'What is my Attachment Style?'}
                            SummarySubtitle={'Secure, anxious, avoidant, and disorganized—which one are you?'}
                            ShortDescription={'This short free 5-question quiz measures feelings associated with the four main attachment styles—secure, anxious, avoidant, and disorganized. This quiz is not a formal medical or diagnostic test and should not be interpreted as clinical or medical advice.'}
                            ContentTitle={'The Four Attachment Styles '}
                            ContentSubtitle={'Early attachment styles may not be exactly the same as those in adult relationships, but they can be a good predictor of adult behavior patterns.Your attachment style consists of a variation of attachment strategies, which strategies show up the most depend on the overall safety you have felt in relationships.'}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodaysQuiz;

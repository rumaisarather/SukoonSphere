import React, { useState } from 'react';
import { data } from '../../db/QuizData';
import SectionTitle from '../sharedComponents/SectionTitle';
import { SectionWrapper } from '@/assets/styles/HomeLayout';
import QuizHeader from '../QuizComponents/QuizHeader';
import QuizBody from '../QuizComponents/QuizBody';
import QuizSummary from '../QuizComponents/QuizSummary';

function Quiz() {
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
        <SectionWrapper>
            <SectionTitle title="Recent Quizzes" />
            <div className="max-w-7xl mx-auto bg-white">
<<<<<<< Updated upstream
                <div className="grid sm:grid-cols-12 gap-4">
=======
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
>>>>>>> Stashed changes
                    <div className="col-span-5 grid gap-6 p-6 bg-white rounded-lg shadow-lg">
                        <QuizHeader
                            title={"What's Your Attachment Style?"}
                            index={index}
                            length={data.length}
                        />

                        <QuizBody
                            question={question}
                            handleAnswer={handleAnswer}
                            selectedAnswer={selectedAnswer} // Pass selectedAnswer to QuizBody
                            disableSelection={disableSelection}
                        />
                    </div>
                    <div className="col-span-7 p-6 bg-white rounded-lg">
                        <QuizSummary
                            SummaryTitle={'What is my Attachment Style?'}
                            SummarySubtitle={'Secure, anxious, avoidant, and disorganized—which one are you?'}
                            ShortDescription={'This short free 15-question quiz measures feelings associated with the four main attachment styles—secure, anxious, avoidant, and disorganized. This quiz is not a formal medical or diagnostic test and should not be interpreted as clinical or medical advice.'}
                            ContentTitle={'The Four Attachment Styles '}
                            ContentSubtitle={'Early attachment styles may not be exactly the same as those in adult relationships, but they can be a good predictor of adult behavior patterns.'}
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Quiz;

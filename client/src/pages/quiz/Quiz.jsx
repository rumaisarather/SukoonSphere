import React, { useState, useEffect } from 'react';
import QuizQuestions from '@/components/quizComponents/QuizQuestions';
import QuizList from '@/components/quizPageComponents/QuizList';
import QuizSummary from '@/components/quizPageComponents/QuizSummary';
import { Quizzes } from '@/utils/Quizzes';
import bgImg from '../../assets/images/bg_podcast.jpg'
import { HeaderImg } from '@/components';
import { useLoaderData } from 'react-router-dom';

// Loader function
export const QuizDetailsLoader = async ({ params }) => {
    const category = Quizzes[0].quizCategories[0];
    const quiz = category.quizzes.find(q => q.quizId === Number(params.id));

    if (quiz) {
        const quizDetails = quiz.quizDetails ? quiz.quizDetails[0] : {};
        const quizQuestions = quiz.quizQuestions || [];
        return { quiz, quizDetails, quizQuestions };
    }
    return { quiz: null, quizDetails: null };
};
function Quiz() {
    const { quiz, quizDetails, quizQuestions } = useLoaderData()
    return (
        <>
            <HeaderImg currentPage="Quiz" bgImg={bgImg} />

            <div className="max-w-full mx-auto px-4  bg-primary">
                <div className="grid sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-4 grid gap-6 p-4 rounded bg-[#F7F9F9]">
                        <div>
                            <QuizQuestions
                                quizQuestionsList={quizQuestions}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-5 grid gap-6 p-4 rounded sticky top-20">
                        <QuizSummary data={quizDetails} />
                    </div>
                    {/* Sidebar */}
                    <div
                        className="sm:col-span-3 bg-[#F7F9F9] p-4 rounded flex flex-col gap-8 sticky top-20"
                        style={{ height: "max-content" }}>
                        <h3 className='text-lg font-bold text-gray-900 text-center'>Related Quizzes</h3>
                        <QuizList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quiz;

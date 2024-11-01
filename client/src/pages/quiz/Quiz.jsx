import React, { useState, useEffect } from 'react';
import QuizQuestions from '@/components/quizComponents/QuizQuestions';
import QuizList from '@/components/quizPageComponents/QuizList';
import QuizSummary from '@/components/quizPageComponents/QuizSummary';
import { Quizzes } from '@/utils/Quizzes';
import bgImg from '../../assets/images/bg_podcast.jpg'
import { HeaderImg } from '@/components';
import { useLoaderData } from 'react-router-dom';


function Quiz() {
    const { quiz, quizDetails, quizQuestions } = useLoaderData()
    return (
        <>
            {/* <HeaderImg currentPage="Quiz" bgImg={bgImg} /> */}
            <div className="max-w-full mx-auto px-4  bg-primary">
                <div className="grid sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-4 grid gap-6  rounded-[20px] bg-[var(--white-color)]">
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

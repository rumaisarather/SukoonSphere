import React from 'react';
import LinkButton from '../sharedComponents/Buttons/LinkButton';
import { Link } from 'react-router-dom';
import { AiOutlineFieldTime, AiOutlineLike } from 'react-icons/ai';
import { FaReadme } from 'react-icons/fa';

function QuizSummary({ SummaryTitle, SummarySubtitle, ShortDescription, ContentTitle, ContentSubtitle }) {
    return (
        <div className="p-4 md:p-2 lg:p-0">
            <div>
                <Link to={`/all-quizzes/quiz/${1}`}>
                    <h1 className="text-xl md:text-3xl lg:text-3xl font-bold mb-2 hover:text-[var(--ternery)]">{SummaryTitle}</h1>
                </Link>
                <p className="text-[var(--black-color)] mb-4 text-sm md:text-base lg:text-base font-bold">
                    {SummarySubtitle}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center mb-6">
                <div className="flex items-center mt-1 col-span-2 justify-start gap-8 order-3 sm:order-none">
                    <div className="flex items-center justify-center gap-2  cursor-pointer">
                        <img
                            className="rounded-full size-7 border-2 border-[var(--ternery)]"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="alt"
                        />
                        <span className="text-sm text-[var(--primary)]"> Sartaj Ashraf</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <AiOutlineFieldTime color="var(--ternery)" />
                        <span className="text-sm text-[var(--primary)]">20-12-2012</span>
                    </div>
                    <div className="hidden sm:flex items-center justify-between sm:justify-center gap-4">
                        <div className=" flex items-center justify-center gap-2 ">
                            <AiOutlineLike color="var(--ternery)" />
                            <span className="text-xs text-[var(--primary)]">1290</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mb-4">
                <div className="mb-6 overflow-hidden rounded-lg flex flex-col md:flex-row " >
                    <img
                        src="https://www.verywellmind.com/thmb/vpCJ7huBZN7bNeG44BBWOTT1d-M=/868x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HowtoEndaConversation_final-b4b6ce5dbb3b417789dcb2bf195bd257.png"
                        alt="Quiz Image"
                        className="md:w-60  object-cover"
                    />
                    <h3 className="text-lg text-[var(--black-color)] font-medium my-3 md:mx-4">
                        {ShortDescription}
                    </h3>
                </div>

                <div className="mt-4">
                    <h1 className="text-xl md:text-xl lg:text-1xl font-bold text-[var(--black-color)] mb-2">{ContentTitle}</h1>
                    <h4 className="text-sm md:text-base lg:text-base text-[var(--black-color)] font-medium">{ContentSubtitle}</h4>
                </div>

                <div className="mt-8 flex justify-center sm:justify-start">
                    <Link to={`/all-quizzes/quiz/${1}`}>
                        <button className="btn-1" >
                            Read more
                            <FaReadme className='ml-4' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default QuizSummary;

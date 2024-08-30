// import React from 'react';
// import LinkButton from '../sharedComponents/Buttons/LinkButton';

// function QuizSummary({ SummaryTitle, SummarySubtitle, ShortDescription, ContentTitle, ContentSubtitle }) {
//     return (
//         <div className="p-4 md:p-2 lg:p-0">
//             <div>
//                 <h1 className="text-xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-2">{SummaryTitle}</h1>
//                 <p className="text-gray-600 mb-4 text-sm md:text-base lg:text-base">
//                     {SummarySubtitle}
//                 </p>
//             </div>

//             <div className="flex flex-col sm:flex-row items-center mb-6">
//                 <img
//                     src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                     alt="Avatar"
//                     className="w-8 h-8  rounded-full mr-3"
//                 />
//                 <span className="text-sm md:text-base lg:text-base font-semibold text-gray-700">Sartaj Ashraf</span>
//                 <span className="mx-2 text-gray-400">|</span>
//                 <span className="text-sm md:text-base lg:text-base font-semibold text-gray-700">Published On: 20-12-2002</span>
//             </div>

//             <div className="mb-4">
//                 <div className="mb-6 overflow-hidden rounded-lg flex flex-col md:flex-col " >
//                     <img
//                         src="https://www.verywellmind.com/thmb/dLVX1N9D4xTj5sXz4q4bCYcFT_k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VWlove_separationanxiety_final_nologo-58e76ae2348443329a1bb5f860a21221.jpg"
//                         alt="Quiz Image"
//                         className="sm:w-full  object-cover"
//                     />
//                     <h3 className="text-lg text-black-400 font-medium my-3 ">
//                         {ShortDescription}
//                     </h3>
//                 </div>

//                 <div className="mt-4">
//                     <h1 className="text-xl md:text-xl lg:text-1xl font-bold text-gray-900 mb-2">{ContentTitle}</h1>
//                     <h4 className="text-sm md:text-base lg:text-base text-gray-400 font-medium">{ContentSubtitle}</h4>
//                 </div>

//                 <div className="mt-4 flex justify-center sm:justify-start">
//                     <LinkButton size="large" variant="primary" className="text-sm md:text-base font-semibold" to="#">
//                         Read more
//                     </LinkButton>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default QuizSummary;

import React, { useState } from 'react';
import './styles.css';
import { QuizSummarydata } from '@/utils/QuizSummary';
import {
    AiOutlineComment,
    AiOutlineLike,
    AiOutlineFieldTime,
} from "react-icons/ai";

const QuizSummary = ({ quizIndex }) => {
    const data = QuizSummarydata[quizIndex];


    return (
        <div className="attachment-styles">
            <div>
                <h1 className="sm:text-lg md:text-3xl lg:text-3xl font-bold text-gray-900 mb-2">{data.title}</h1>
                <p className="text-gray-900 mb-4 text-samibold md:text-base lg:text-base">
                    {data.subtitle}
                </p>
            </div>
            <div className="flex w-full items-center col-span-2 px-6 pb-4 justify-start gap-8">
                <div className="flex items-center justify-center gap-2">
                    <img
                        className="rounded-full size-7 border-2 border-gray-400"
                        src={data.author.avatar}
                        alt="alt"
                    />
                    <span className="text-sm">{data.author.name || "auther"}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <AiOutlineFieldTime />
                    <span className="text-sm"> {data.author.publishedOn || "date"}</span>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center justify-center gap-2">
                        <AiOutlineComment />
                        <span className="text-xs">{"197" || "5"}</span>
                    </div>
                    |
                    <div className="flex items-center justify-center gap-2">
                        <AiOutlineLike />
                        <span className="text-xs">8999</span>
                    </div>
                </div>
            </div>

            <div className="mb-6 overflow-hidden rounded-lg flex flex-col md:flex-col">
                <img
                    src={data.mainImage.src}
                    alt={data.mainImage.alt}
                    className="sm:w-full object-cover"
                />
                <h3 className="text-gray-900 mb-4 text-samibold md:text-base lg:text-base my-3">
                    {data.mainImage.description}
                </h3>
            </div>

            {/* Map through each key in the data object, except the main details */}
            {Object.keys(data).filter(key => !['title', 'subtitle', 'author', 'mainImage'].includes(key)).map((key, index) => (
                <div key={index} className="attachment-section">
                    <h2 className="text-xl md:text-1xl lg:text-2xl font-bold text-gray-900 mb-2">{data[key].title}</h2>
                    <p className="text-xl md:text-base lg:text-lg font-normal text-gray-500 mb-2 italic">{data[key].content}</p>
                    {data[key].quote && (
                        <blockquote className="attachment-quote">
                            {data[key].quote}
                        </blockquote>
                    )}
                    {data[key].reference && (
                        <p className="attachment-reference">Reference: {data[key].reference}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default QuizSummary;



import React from 'react';
import { AiOutlineComment, AiOutlineLike, AiOutlineFieldTime } from "react-icons/ai";
import LinkButton from '../sharedComponents/Buttons/LinkButton';

const QuizSummary = ({ data }) => {
    if (!data) return null; // Handle the case where no data is provided

    return (
        <div className="attachment-styles">
            {/* Quiz Title and Subtitle */}
            <div>
                <h1 className="sm:text-lg md:text-3xl lg:text-3xl font-bold text-[#0c2b64] mb-2">{data.title}</h1>
                <p className="text-gray-900 mb-4 text-semibold md:text-base lg:text-base">
                    {data.subtitle}
                </p>
            </div>

            {/* Author and Publication Details */}
            <div className="flex w-full items-center col-span-2 px-6 pb-4 justify-start gap-8">
                <div className="flex items-center justify-center gap-2">
                    <img
                        className="rounded-full size-7 border-2 border-gray-400"
                        src={data.author.avatar}
                        alt={data.author.name}
                    />
                    <span className="text-sm">{data.author.name || "Author"}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <AiOutlineFieldTime />
                    <span className="text-sm"> {data.author.publishedOn || "Date"}</span>
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

            {/* Main Image and Description */}
            <div className="mb-6 overflow-hidden rounded-lg flex flex-col md:flex-col">
                <img
                    src={data.mainImage.src}
                    alt={data.mainImage.alt}
                    className="sm:w-full object-cover"
                />
                <h3 className="text-gray-900 mb-4 text-semibold md:text-base lg:text-base my-3">
                    {data.mainImage.description}
                </h3>
            </div>

            {/* Detailed Sections */}
            {Object.keys(data).filter(key => !['title', 'subtitle', 'author', 'mainImage'].includes(key)).map((key, index) => (
                <div key={index} className="attachment-section">
                    <h2 className="text-xl md:text-1xl lg:text-2xl font-bold text-[#364663] mt-6">{data[key].title}</h2>
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

            {/* Read More Button */}
            <div className="mt-4 flex justify-center sm:justify-start">
                <LinkButton size="large" variant="primary" className="text-sm md:text-base font-semibold" to="#">
                    Read more
                </LinkButton>
            </div>
        </div>
    );
};

export default QuizSummary;

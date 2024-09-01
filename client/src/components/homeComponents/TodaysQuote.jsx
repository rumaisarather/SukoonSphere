import React, { useState, useEffect } from 'react';
import LinkButton from "../sharedComponents/Buttons/LinkButton";

const TodaysQuote = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(true);
    const slides = [
        {
            text: "The Most Complicated Word in the English Language",
            author: "By DAVID CROTTY",
            date: "AUG 23, 2024",
            pagelinkText: "LEAVE A COMMENT"
        },
        {
            text: "With only three letters, 'run' has over 645 different meanings.",
            author: "By DAVID CROTTY",
            date: "AUG 23, 2024",
            pagelinkText: "LEAVE A COMMENT"
        },
        {
            text: "Another example text to demonstrate the carousel functionality.",
            author: "By DAVID CROTTY",
            date: "AUG 23, 2024",
            pagelinkText: "LEAVE A COMMENT"
        }
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
                setFade(true);
            }, 1000);
        }, 8000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className=" relative flex items-center flex-col md:flex-row justify-center bg-[#0c2b64] text-white p-6 m-auto md:mt-[-2.5rem] max-w-7xl mx-auto">
            <div className="flex-none">
                <img
                    src="https://tteportal.b-cdn.net/wp-content/uploads/elementor/thumbs/01-q16exdssvgx89a8gi3yy0en9dhgnuw7fj70giranpw.jpg"
                    alt="Run with 645 meanings"
                    className="w-full h-full object-cover md:w-[500px]"
                />
            </div>
            <div className="flex-grow md:ml-10">
                <h6 className="pb-6">Todays Trending Thought's</h6>
                <div
                    className={`transition-transform ease-in-out duration-1000 ${fade ? 'animate-fadeIn' : 'animate-fadeOut'}`}
                >
                    <h1 className="text-3xl font-bold pb-6">{slides[currentSlide].text}</h1>
                    <h1 className="text-xl font-bold" style={{ fontFamily: "Luxurious Roman", fontWeight: 400, fontStyle: 'normal' }}>
                        {slides[currentSlide].text}
                    </h1>
                    <div className="flex items-center mt-4">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" className="w-6 h-6 rounded-full mr-2" />
                        <span className="text-sm font-semibold">{slides[currentSlide].author}</span>
                        <span className="mx-2">|</span>
                        <span className="text-sm font-semibold">{slides[currentSlide].date}</span>
                        <span className="mx-2 font-semibold">|</span>
                        <LinkButton size="small" variant="text" className="text-sm font-semibold">
                            {slides[currentSlide].pagelinkText}
                        </LinkButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodaysQuote;

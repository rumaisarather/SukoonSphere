import React, { useState, useEffect } from 'react';
import LinkButton from "../sharedComponents/Buttons/LinkButton";
import { AiOutlineComment, AiOutlineFieldTime, AiOutlineLike } from 'react-icons/ai';

const TodaysQuote = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(true);
    const slides = [
        {
            text: "You are not a drop in the ocean. You are the entire ocean in a drop.",
            subtitle: "Embrace your individuality, for you hold immense power within. Your essence contributes to the vastness of the universe.",
            author: "By Sartaj Ashraf",
            date: "AUG 23, 2024",
        },
        {
            text: "Healing takes time, and asking for help is a courageous step.",
            subtitle: "Do not rush the process of healing. Seeking support is a sign of strength, not weakness.",
            author: "By Aquib Ahmad",
            date: "SEP 23, 2024",
        },
        {
            text: "Every day may not be good, but there is something good in every day.",
            subtitle: "Focus on the positives, even in challenging times. There’s always a silver lining waiting to be discovered.",
            author: "Shahid Ahmad",
            date: "MAR 23, 2024",
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
        <>

            <div data-aos="fade-up" data-aos-duration="2000" className="my-10 relative flex items-center flex-col md:flex-row justify-center  p-6 m-auto  max-w-7xl mx-auto rounded-[4px]">
                <div className="flex-none" style={{ boxShadow: '-20px 20px 2px var(--primary)' }}>
                    <img
                        src="https://tteportal.b-cdn.net/wp-content/uploads/elementor/thumbs/01-q16exdssvgx89a8gi3yy0en9dhgnuw7fj70giranpw.jpg"
                        alt="Run with 645 meanings"
                        className="w-full h-full object-cover md:w-[500px]"
                    />
                </div>
                <div className="flex-grow md:ml-10">
                    <h6 className="pb-6 text-[var(--black-color)]">Todays Trending Thought's</h6>
                    <div
                        className={`transition-transform ease-in-out duration-1000 ${fade ? 'animate-fadeIn' : 'animate-fadeOut'}`}
                    >
                        <h1 className="text-3xl font-bold pb-6 text-[var(--primary)]">{slides[currentSlide].text}</h1>
                        <h1 className="text-xl font-bold text-[var(--black-color)]" style={{ fontFamily: "Luxurious Roman", fontWeight: 400, fontStyle: 'normal' }}>
                            {slides[currentSlide].subtitle}
                        </h1>
                        <div className="flex items-center mt-4 col-span-2 justify-start gap-8 order-3 sm:order-none">
                            <div className="flex items-center justify-center gap-2  cursor-pointer">
                                <img
                                    className="rounded-full size-7 border-2 border-[var(--ternery)]"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="alt"
                                />
                                <span className="text-sm text-[var(--primary)]">{slides[currentSlide].author || "auther"}</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <AiOutlineFieldTime color="var(--ternery)" />
                                <span className="text-sm text-[var(--primary)]"> {slides[currentSlide].date || "date"}</span>
                            </div>
                            <div className="hidden sm:flex items-center justify-between sm:justify-center gap-4">
                                <div className=" flex items-center justify-center gap-2 ">
                                    <AiOutlineLike color="var(--ternery)" />
                                    <span className="text-xs text-[var(--primary)]">490</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodaysQuote;

import QuoteBanner from "../../assets/images/testimonial-bg.jpeg";
import React, { useState, useEffect } from 'react';
import LinkButton from "../sharedComponents/Buttons/LinkButton";
// import PublishDetails from "../sharedComponents/PublisherDetails/PublishDetails";
const avatarUrl = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
const TodaysQuote = () => {
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

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative flex items-center flex-col sm:flex-row justify-center bg-[#0c2b64] text-white p-3 m-auto" style={{ maxWidth: '1200px', marginTop: '-2.5rem' }}>
            <div className="flex-none">
                <img
                    src={QuoteBanner}
                    alt="Run with 645 meanings"
                    className="w-full h-full object-cover"
                    style={{ maxWidth: '500px' }}
                />
            </div>
            <div className="sm:col-span-8 m-10">
                <h6 className=" pb-6">Todays Trending Thought's</h6>
                <div className="transition ease-in-out duration-1000 transform">
                    <h1 className="text-3xl font-bold pb-6">{slides[currentSlide].text}</h1>
                    <h1 className="text-xl font-bold " style={{ fontFamily: "Luxurious Roman", fontWeight: 400, fontStyle: ' normal', }}>{slides[currentSlide].text}</h1>
                    {/* <PublishDetails author={slides[currentSlide].author} date={slides[currentSlide].date} pageLinkLabel={slides[currentSlide].pagelinkText} /> */}
                    <div className="flex items-center mt-4">
                        <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' alt="Avatar" style={{ width: '25px', height: '25px', borderRadius: '50%', marginRight: '10px' }} />
                        <span className="text-sm font-semibold">{slides[currentSlide].author}</span>
                        <span className="mx-2">|</span>
                        <span className="text-sm font-semibold" >{slides[currentSlide].date}</span>
                        <span className="mx-2 font-semibold">|</span>
                        <LinkButton size="small" variant="text" className="text-sm font-semibold">{slides[currentSlide].pagelinkText}</LinkButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodaysQuote;


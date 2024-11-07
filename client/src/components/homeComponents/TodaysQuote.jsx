import React, { useEffect, useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "../../assets/styles/TodaysQuote.css"
import "../../assets/styles/global.css"
import SectionTitle from "../sharedComponents/SectionTitle";


const TodaysQuote = () => {
    const [activeWidget, setActiveWidget] = useState(null);
    const [isVisible, setIsVisible] = useState({});

    // Widget data
    const widgets = [
        { id: 1, color: "bg-yellow-400", text: "Positivity", description: "You are not a drop in the ocean. You are the entire ocean in a drop.", navLInk: 'QA-section', buttonText: 'Ask a question' },
        { id: 2, color: "bg-blue-500", text: "Courage", description: "Healing takes time, and asking for help is a courageous step.", navLInk: 'articles', buttonText: 'Read an article' },
        { id: 3, color: "bg-green-400", text: "Gratitude", description: "Every day may not be good, but there is something good in every day.", navLInk: 'all-quizzes', buttonText: 'Attempt a quiz' },
        { id: 4, color: "bg-red-400", text: "Empowerment", description: "Embrace your individuality, for you hold immense power within.", navLInk: 'Posts', buttonText: 'Share a post' },
        { id: 5, color: "bg-purple-400", text: "Hope", description: "Focus on the positives, even in challenging times.", navLInk: 'podcast/playlists', buttonText: 'Listen to a podcast' },
        { id: 6, color: "bg-teal-400", text: "Resilience", description: "Do not rush the process of healing. Seeking support is a sign of strength, not weakness.", navLInk: 'media/all-videos', buttonText: 'Watch some videos' },
    ];

    const handleWidgetClick = (id) => {
        setActiveWidget((prevId) => (prevId === id ? null : id));
    };


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsVisible((prev) => ({ ...prev, [entry.target.id]: entry.isIntersecting }));
            });
        });

        const elements = document.querySelectorAll(".scroll-widget");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <section className="max-w-7xl mx-auto text-center">
            <SectionTitle title={"Quotes"}></SectionTitle>
            <div className="bg-[var(--light-bg)] text-[--gray-700] text-sm inline-flex items-center py-2 px-3 rounded-full mb-4 glossy-effect-bar">
                <span className="bg-[#01427a] text-white rounded-full w-4 h-4 flex items-center justify-center mr-2">S</span>
                <Link to={"https://nhm.gov.in/images/pdf/National_Health_Mental_Policy.pdf"} target='_blank' className='hover:text-[var(--ternery)]'>
                    SukoonSphere: Personalized Quotes
                </Link>
            </div>
            <h2 className="font-bold text-[var(--grey--900)]  text-[1.6rem] md:text-[2.5rem] sm:text-[3.5rem] sm:leading-[3.5rem]" data-aos="fade-up">Open a Quote to get started!</h2>
            <div className="relative w-full h-[45vh] lg:h-[80vh] flex items-center justify-center overflow-hidden p-4 ">
                {widgets.map((widget, index) => (
                    <div
                        key={widget.id}
                        id={`widget-${widget.id}`}
                        onClick={() => handleWidgetClick(widget.id)}
                        className={`scroll-widget absolute flex items-center justify-center cursor-pointer shadow-2xl  ${widget.color} 
                   ${activeWidget === widget.id
                                ? "w-80 h-48 rounded-[20px] z-20"
                                : "w-52 h-16 p-2 rounded-full z-10 "} 
                   transition-[width,height,transform,opacity] duration-700 ease-in-out transform hover:scale-105 hover:shadow-xl 
                   ${isVisible[`widget-${widget.id}`]
                                ? "animate-float"
                                : "opacity-0"} 
                   `}
                        style={{
                            top: `${(index + 1) * 50}px`,
                            left: `${index === 0 ? "10%" :
                                index === 1 ? "70%" :
                                    index === 2 ? "45%" :
                                        index === 3 ? "15%" :
                                            index === 4 ? "60%" :
                                                index === 5 ? "35%" : "70%"
                                }`,
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                        }}
                    >

                        <div className=" glossy-effect relative w-full h-full flex justify-between items-center pl-1 ">
                            <div className="absolute top-1 right-0 flex items-center  ">
                                {activeWidget === widget.id ? (
                                    <FaArrowCircleLeft size={28} className="text-black hover:text-gray-700 p-1 mb-2" />
                                ) : (
                                    <FaArrowCircleRight size={40} className="text-black hover:text-gray-700 p-1 mb-2" />
                                )}
                            </div>
                            <div className={`text-black text-center transition-all duration-300 flex flex-col justify-center items-center p-4 ${activeWidget === widget.id ? "text-lg" : "text-lg"}`}>
                                {activeWidget === widget.id ? <h4>{widget.description} </h4> : <h4>{widget.text}</h4>}
                                {activeWidget === widget.id && (
                                    <Link to={widget.navLInk} className="mt-4 text-sm text-white px-4 py-1 rounded-full transition">
                                        <button className="btn-1">
                                            {widget.buttonText}
                                            <FaLongArrowAltRight className='ml-2' />
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TodaysQuote;


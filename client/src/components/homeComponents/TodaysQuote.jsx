import React, { useEffect, useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "../../assets/styles/TodaysQuote.css"
import SectionTitle from "../sharedComponents/SectionTitle";


const TodaysQuote = () => {
    const [activeWidget, setActiveWidget] = useState(null);
    const [isVisible, setIsVisible] = useState({});

    // Widget data
    const widgets = [
        { id: 1, color: "bg-yellow-400", text: "Positivity", description: "You are not a drop in the ocean. You are the entire ocean in a drop." },
        { id: 2, color: "bg-blue-500", text: "Courage", description: "Healing takes time, and asking for help is a courageous step." },
        { id: 3, color: "bg-green-400", text: "Gratitude", description: "Every day may not be good, but there is something good in every day." },
        { id: 4, color: "bg-red-400", text: "Empowerment", description: "Embrace your individuality, for you hold immense power within." },
        { id: 5, color: "bg-purple-400", text: "Hope", description: "Focus on the positives, even in challenging times." },
        { id: 6, color: "bg-teal-400", text: "Resilience", description: "Do not rush the process of healing. Seeking support is a sign of strength, not weakness." },
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
        <section className="max-w-7xl mx-auto text-center my-20 overflow-x-hidden ">
            <SectionTitle title={"Quotes"}></SectionTitle>

            <p className="text-sm uppercase tracking-wide text-[var(--black-color)]" data-aos="fade-up">Great practice means great health care</p>
            <h1 className="text-5xl font-bold text-[var(--primary)]  mt-4" data-aos="fade-up">Open a Quote to get started!</h1>
            <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden p-4">
                {widgets.map((widget, index) => (
                 <div
                 key={widget.id}
                 id={`widget-${widget.id}`}
                 onClick={() => handleWidgetClick(widget.id)}
                 className={`scroll-widget absolute flex items-center justify-center cursor-pointer shadow-2xl ${widget.color} 
                   ${activeWidget === widget.id
                     ? "w-80 h-48 rounded-[20px] z-20"
                     : "w-52 h-16 p-2 rounded-full z-10 hover:rotate-3"} 
                   transition-[width,height,transform,opacity] duration-700 ease-in-out transform hover:scale-105 hover:shadow-xl 
                   ${isVisible[`widget-${widget.id}`]
                     ? "animate-float"
                     : "opacity-0"} 
                   glossy-effect`}
                 style={{
                   top: `${(index + 1) * 10}%`,
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
               
                        <div className="relative w-full h-full flex justify-between items-center pl-1" data-aos="zoom-in-up" data-aos-duration="1500">
                            <div className="absolute top-1 right-0 flex items-center  ">
                                {activeWidget === widget.id ? (
                                    <FaArrowCircleLeft size={28} className="text-black hover:text-gray-700 p-1 mb-2" />
                                ) : (
                                    <FaArrowCircleRight size={40} className="text-black hover:text-gray-700 p-1 mb-2" />
                                )}
                            </div>
                            <div className={`text-black text-center transition-all duration-300 flex flex-col justify-center items-center p-4 ${activeWidget === widget.id ? "text-lg" : "text-lg"}`}>
                                {activeWidget === widget.id ? widget.description : widget.text}
                                {activeWidget === widget.id && (
                                    <Link to="/get-started" className="mt-4 text-sm text-white px-4 py-1 rounded-full transition">
                                        <button className="btn-1">
                                            Get an estimated quote
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


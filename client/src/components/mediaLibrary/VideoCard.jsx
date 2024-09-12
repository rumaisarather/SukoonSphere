import React from 'react';
// import { FaPlay, FaInfoCircle } from 'react-icons';
import { FaRegCirclePlay } from "react-icons/fa6";

function VideoCard({ cards }) {
    return (
        <>
            {cards.map((card, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <div className={` w-full h-40 flex items-center justify-center bg-blue-600`}>
                            <div className="absolute top-2 right-2">
                                <div className="rounded-full bg-blue-700 text-white p-2">
                                    <FaRegCirclePlay size={20} />
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                            <p className="text-sm text-gray-500">{card.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default VideoCard;

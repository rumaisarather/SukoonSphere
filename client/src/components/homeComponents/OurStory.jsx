import React from 'react';
import { GiBottomRight3DArrow } from 'react-icons/gi';
import SectionTitle from '../sharedComponents/SectionTitle';

const OurStory = () => {
    return (
        <>
            <div className=' space-y-4 max-w-7xl mx-auto'>
                <SectionTitle title={'What we do ?'}></SectionTitle>
                <div className="max-w-7xl mx-auto flex flex-col items-center  py-12">
                    <div className="w-4/5 flex justify-between items-center">
                        <h2 className="text-4xl font-bold text-center text-black">
                            Our story
                        </h2>
                        <a href="#" className="text-blue-500 hover:underline">See all</a>
                    </div>

                    {/* Placeholder image section */}
                    <div className="relative w-4/5 mt-6">
                        <div className="bg-gray-200 w-full h-96 flex justify-center items-center">
                            <svg className="w-20 h-20 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10l7-5-7-5zM13 7v10l7-5-7-5z" />
                            </svg>
                        </div>

                        {/* Watch Video Button */}
                        <div className="absolute bottom-4 right-4">
                            <button className="btn">
                                <GiBottomRight3DArrow />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStory;

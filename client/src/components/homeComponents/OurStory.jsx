import React from 'react';
import SectionTitle from '../sharedComponents/SectionTitle';

import IntroVideo from "../../assets/videos/Story Video.mp4"
import { Link } from 'react-router-dom';

const OurStory = () => {
    return (
        <>
            <div className='space-y-4 max-w-7xl mx-auto px-4 md:px-0'>
                <SectionTitle title={'What we do ?'}></SectionTitle>

                <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
                    {/* Left Side: Content Section */}
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-2xl font-bold text-[var(--black-color)]" data-aos="fade-up">Our Mission</h2>
                        <Link to="/about-us">
                            <h1 className="text-5xl font-bold my-4 text-[var(--primary)] hover:text-[var(--ternery)] cursor-pointer" data-aos="fade-up">Reducing Mental Health Challenges</h1>
                        </Link>
                        <p className="text-lg font-light text-[var(--black-color)] mb-4" data-aos="fade-up">
                            Our content helps you make the best choices for your mental well-being. Through powerful storytelling, expert advice, and a supportive community, we aim to raise awareness about mental health and break the stigma surrounding it. Join us as we embark on this journey towards a healthier mind and a brighter future.
                        </p>
                        <div>
                            <Link to="/about-us">
                                <button className='action-button' data-aos="fade-up">Read more</button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Video Section */}
                    <div className="relative md:w-1/2 flex justify-center items-center shadow-2xl" data-aos="fade-left">
                        <div className="relative w-full h-72 md:h-96 " style={{ boxShadow: '20px 20px 2px var(--primary)' }}>
                            <video
                                className="absolute inset-0 w-full h-full object-cover "
                                src={IntroVideo}
                                loop
                                muted
                                controls
                                playsInline
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStory;

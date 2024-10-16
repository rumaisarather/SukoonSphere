import React from 'react';
import SectionTitle from '../sharedComponents/SectionTitle';
import IntroVideo from "../../assets/videos/Story Video.mp4";
import { Link } from 'react-router-dom';
import bgImg from "../../assets/images/teams-bg.png"
import { MdOutlineReadMore } from "react-icons/md";

const OurStory = () => {
    return (
        <>
            <SectionTitle title={'Our Story'}></SectionTitle>
            <div className=' max-w-7xl mx-auto px-4 md:px-0 bg-[#013340] text-white  rounded-[20px]' data-aos="fade-up">

                <div className="flex flex-col md:flex-row items-center justify-between  md:space-y-0 md:space-x-8">
                    <div className="md:w-1/2 space-y-6 p-8" data-aos="fade-up">
                        <div className="bg-[var(--grey--900)] text-[--gray-700] text-sm inline-flex items-center py-2 px-3 rounded-full mb-4 glossy-effect-bar">
                            <span className="bg-[#01427a] text-white rounded-full w-4 h-4 flex items-center justify-center mr-2">N</span>
                            <Link to={"https://www.nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1043&lid=359"} target='_blank' className='hover:text-[var(--ternery)]'>
                                NMHP: National Mental Health Programme
                            </Link>
                        </div>
                        <h2 className=" font-bold h2" data-aos="fade-up">Secure your team’s health without losing sleep</h2>
                        <p className="text-lg font-light mb-4" >
                            Cultivate a work culture that stands out with Nova's affordable and flexible suite of insurance and wellness offerings.
                        </p>
                        <hr />
                        {/* <ul className="list-none space-y-3 text-lg">
                        <li className="flex items-center">
                            <span className="mr-2 text-green-500">✔</span> Surpass competitors when it comes to employee wellness with Nova.
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 text-green-500">✔</span> Access every employee wellness and insurance benefit out there.
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 text-green-500">✔</span> Unlock the best plans and prices with our tailor-made recommendations.
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 text-green-500">✔</span> Ensure seamless employee experience on our tech-first platform.
                        </li>
                    </ul> */}
                        <div>
                            <Link to="/about-us">
                                <button className='btn-4' >Know more
                                    <MdOutlineReadMore className='ml-2' size={20} />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Video Section */}
                    <div className="relative md:w-1/2 flex flex-col justify-center items-center p-12" data-aos="fade-left" data-aos-duration="1500">
                        <div
                            className="w-full h-full bg-contain bg-center flex justify-center items-center "
                            style={{
                                backgroundImage: `url(${bgImg})`,
                                height: '30rem',
                            }}>
                            <div className="relative w-full h-72 md:h-96 flex justify-center items-center ">
                                <video
                                    className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
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
            </div>
        </>
    );
};

export default OurStory;

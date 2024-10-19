import React from 'react';
import SectionTitle from '../sharedComponents/SectionTitle';
import bgImg from "../../assets/images/teams-bg.png"
import { Link } from 'react-router-dom';
const OurTeam = () => {
    return (
        <>
            <SectionTitle title={'Meet our team'}></SectionTitle>
            <div className="min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center text-center p-4 " data-aos="fade-up" >

                <div className="flex justify-center mb-12 bg-contain md:bg-center object-bottom gap-12"
                    style={{
                        backgroundImage: `url(${bgImg}) `, width: '1200px',
                    }}>

                    <div className="w-72 h-72 rounded-lg overflow-hidden" data-aos="fade-up-left">
                        <img src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?size=626&ext=jpg&ga=GA1.1.1020016862.1728561713&semt=ais_hybrid"
                            alt="Team Member 1"
                            className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                    <div className="w-72 h-72 rounded-lg overflow-hidden m-[-100px]" data-aos="fade-up" data-aos-duration="2000">
                        <img src="https://img.freepik.com/free-photo/happy-satisfied-mature-businessman-with-laptop-watching-content_74855-3531.jpg?ga=GA1.1.1020016862.1728561713&semt=ais_hybrid"
                            alt="Team Member 2"
                            className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                    <div className="w-72 h-72 rounded-lg overflow-hidden" data-aos="fade-up-right">
                        <img src="https://img.freepik.com/premium-photo/young-indian-businesswoman-employee-standing-white-background_1254992-268805.jpg?size=626&ext=jpg&ga=GA1.1.1020016862.1728561713&semt=ais_hybrid"
                            alt="Team Member 3"
                            className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                </div>

                {/* Heading */}
                <Link to="/about/our-team" className='text-blue-700'>
                    <h1 className="text-[var(--grey--900)]  font-bold mb-4 h2" data-aos="fade" data-aos-duration="2000">
                        We're dedicated to one thing — <span className="text-[var(--primary)]">your inner peace</span>.
                    </h1>
                </Link>
                {/* Subheading */}
                <p className="text-[var(--grey--800)] text-lg mt-2" data-aos="fade" data-aos-duration="2000">
                    No matter your goals, we're here to guide and support you through all moments and milestones.
                    <Link to="/about/our-team" className='text-blue-700'>View all</Link>
                </p>
            </div>
        </>
    );
};

export default OurTeam;

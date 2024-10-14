import React from 'react';
import SectionTitle from '../sharedComponents/SectionTitle';

const OurTeam = () => {
    return (
        <>
            <SectionTitle title={'Meet our team'}></SectionTitle>
            <div className="min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center text-center p-4 " data-aos="fade-up" data-aos-duration="1000">
                {/* Image Section */}
                <div className="flex justify-center mb-12 ">
                    {/* Profile Images */}
                    <div className="w-56 h-56 rounded-lg overflow-hidden" >
                        <img src="https://www.verywellmind.com/thmb/ZgeW37AcI2ucF1VrLhQYXaCY34I=/87x87/filters:no_upscale():max_bytes(150000):strip_icc()/carly-935717a415724b9b9c849c26fd0450ea.jpg"
                            alt="Team Member 1"
                            className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                    <div className="w-56 h-56 rounded-lg overflow-hidden m-[-50px]" data-aos="fade-up" data-aos-duration="2000">
                        <img src="https://www.verywellmind.com/thmb/V-ughpr6HaErjm965-iLR-V967o=/87x87/filters:no_upscale():max_bytes(150000):strip_icc()/steven-gans-1000-51582b7f23b6462f8713961deb74959f.jpg "
                            alt="Team Member 2"
                            className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                    <div className="w-56 h-56 rounded-lg overflow-hidden">
                        <img src="https://www.verywellmind.com/thmb/h5MMllmTdDPDC-JIMlbRqMMtht0=/87x87/filters:no_upscale():max_bytes(150000):strip_icc()/Shaheen-Lakhan-660-594fd00c787a40e2bcf15a60eaf9b89a.jpg"
                            alt="Team Member 3"
                            className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-black text-6xl font-bold mb-4" data-aos="fade" data-aos-duration="2000">
                    We're dedicated to one thing — <span className="text-[var(--primary)]">your success</span>.
                </h1>

                {/* Subheading */}
                <p className="text-black text-lg mt-2" data-aos="fade" data-aos-duration="2000">
                    No matter your goals, we're here to guide and support you through all moments and milestones.
                </p>
            </div>
        </>
    );
};

export default OurTeam;

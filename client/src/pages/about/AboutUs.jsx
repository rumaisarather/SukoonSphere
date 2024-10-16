import React from 'react'
import { OurTeam } from '..'
import bg_hero from "../../assets/images/bg-mind-img.png";
import right_img from '../../assets/images/Artical/mentalHealthImg.jpg'
import { HeaderImg } from '@/components'


function AboutUs() {
    return (
        <>
            {/* <HeaderImg currentPage="About us" bgImg={bgImg} /> */}
            <div className="bg-[#f9f7f3]  flex flex-col items-center text-center">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">

                    {/* Left Window Image */}
                    <div className="w-full md:w-1/3">
                        <img
                            src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/62a805699c927d7302e20348_abt-window-leaves-right.png"
                            alt="Window Image loading..."
                            className="mx-auto"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 px-4 flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-[var(--grey--900)]  mb-4 h2">
                            A Safe Place to Nurture Your Mind
                        </h1>
                        <p className="text-lg text-[--grey--800] mb-8">
                            Our mission is to offer a safe, nurturing space where individuals can explore their mental health and find the support they need to grow.

                        </p>
                        <button className="btn-1">
                            Schedule a call with us
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className='max-w-7xl mx-auto '>
                    <h1 className="text-4xl font-bold mb-4 text-[var(--black-color)]">Our mission is to help you prioritize your mental health and find balance.</h1>
                    <p className="mb-4 text-[var(--black-color)]">
                        Here at SukoonSphere, we know that there’s no one-size-fits-all approach when it comes to mental health and wellness because we’re living it every day with you. That’s why we’re the only dedicated mental health and wellness platform that’s there for you in all aspects of your life—whether you’re living with a mental health condition, managing day-to-day stressors, looking to level up your relationships, or tapping into fascinating psychology theories, we hope you’ll leave feeling empowered to take the next steps toward showing up as your best self.
                    </p>
                    <p className="mb-4 text-[var(--black-color)]">
                        As research in this space constantly evolves, so does our understanding of these topics. You can count on us to sift through the noise that too often makes mental health advice confusing or misinformed, bringing it back down to earth through clear and actionable guidance. To earn your trust, we have a powerhouse team of experts, licensed therapists, board-certified psychiatrists, and the latest studies to back everything you’re reading with a stamp of approval.
                    </p>
                    <p className='text-[var(--black-color)]'>
                        But we also acknowledge that research is never the whole story and has implicit gaps and biases that don’t capture the full spectrum of lived experiences. Societal shifts and cultural awareness are bound to any conversation around mental health. We promise to never stop learning and putting diverse voices front and center to help us fill in those gaps. We want you to see yourself in the communities we reach and in the stories we share.
                    </p>
                </div>
                <OurTeam></OurTeam>
            </div>
        </>
    )
}
export default AboutUs

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sliderImage1 from '../../assets/images/testimonial-bg.jpeg';

function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div className="w-full h-full">

                <div className="relative w-full h-full">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${sliderImage1})` }}
                    >
                        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                            <div className="text-left py-4 max-w-3xl  text-white">
                                <div className="text-2xl font-bold mb-4">For a Brighter Future</div>
                                <h1 className="text-4xl font-bold mb-4">Helping You Find Clarity  <br /><span className="animate text-green-400">and Balance</span></h1>
                                <p className="text-lg mb-6">
                                    Understanding and improving mental health can be complex, but our resources and support are designed to make it simpler. With professional guidance and compassionate care, we are here to help you navigate your path to well-being.
                                </p>
                                <div className="space-x-4">
                                    <a href="#" className="btn btn-primary">Discover more</a>
                                    <a href="#" className="btn btn-secondary">Book an Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;

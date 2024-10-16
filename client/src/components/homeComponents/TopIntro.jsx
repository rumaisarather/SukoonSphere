import React, { useState, useEffect } from 'react';
import bg_hero from "../../assets/images/bg-mind-img.png";
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import "../../assets/styles/global.css"
import bgImg from "../../assets/images/teams-bg.png"

import "../../index.css"


const TopIntro = () => {
  return (
    <div className="flex items-center justify-center p-6 max-w-7xl mx-auto overflow-x-hidden pt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section - Text and CTAs */}
        <div>
          {/* Badge */}
          <div className="bg-[var(--light-bg)] text-[--gray-700] text-sm inline-flex items-center py-2 px-3 rounded-full mb-4 glossy-effect-bar">
            <span className="bg-[#01427a] text-white rounded-full w-4 h-4 flex items-center justify-center mr-2">N</span>
            <Link to={"https://nhm.gov.in/images/pdf/National_Health_Mental_Policy.pdf"} target='_blank' className='hover:text-[var(--ternery)]'>
              NMHP: National Mental Health Programme
            </Link>
          </div>


          {/* Main Heading */}
          <h1 className="h2 mb-4  font-extrabold text-[var(--grey--900)]">
            Empowering you to Heal, Grow, and Thrive
          </h1>

          {/* Subtext */}
          <p className="text-[var(--grey--800)] text-lg mb-8 text-b4 hero-para">
            Through personalized resources, expert guidance, and a compassionate community, we provide the tools you need to overcome challenges, foster personal growth, and lead a fulfilling, balanced life.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="btn-1">
              Get an estimated quote
              <FaLongArrowAltRight className='ml-2' />
            </button>
            <Link to={"/contact-us"}>
              <button className="btn-2">
                Schedule a callback
                <FaLongArrowAltRight className='ml-2' />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center lg:justify-end bg-contain md:bg-center object-bottom"
          style={{
            backgroundImage: `url(${bgImg}) `, width: '500px',
          }}>
          <img src={bg_hero} alt="Healthcare Illustration" className="max-w-full h-auto" />
        </div>
      </div>
    </div >
  );
};

export default TopIntro;

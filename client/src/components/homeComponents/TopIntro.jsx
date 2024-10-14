// import React, { useState, useEffect } from 'react';
// import HeroVideo from "../../assets/videos/HeroVideo.mp4";
// import bg_hero from "../../assets/images/bg-hero.png";
// import { FaAngleDown, FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { FaUpRightAndDownLeftFromCenter } from 'react-icons/fa6';

// const phrases = ["confident", "bold", " brave", " flawless"];

// const TopIntro = () => {
//   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
//   const [displayText, setDisplayText] = useState('');
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentPhrase = phrases[currentPhraseIndex];
//     let typingSpeed = isDeleting ? 50 : 150;

//     if (charIndex < currentPhrase.length && !isDeleting) {
//       // Typing forward
//       const timeoutId = setTimeout(() => {
//         setDisplayText(currentPhrase.slice(0, charIndex + 1));
//         setCharIndex((prev) => prev + 1);
//       }, typingSpeed);
//       return () => clearTimeout(timeoutId);
//     } else if (charIndex === currentPhrase.length && !isDeleting) {
//       // Finished typing, hold before deleting
//       const holdTimeout = setTimeout(() => setIsDeleting(true), 2000);
//       return () => clearTimeout(holdTimeout);
//     } else if (isDeleting && charIndex > 0) {
//       // Deleting text
//       const deleteTimeout = setTimeout(() => {
//         setDisplayText(currentPhrase.slice(0, charIndex - 1));
//         setCharIndex((prev) => prev - 1);
//       }, typingSpeed);
//       return () => clearTimeout(deleteTimeout);
//     } else if (isDeleting && charIndex === 0) {
//       // Move to the next phrase
//       setIsDeleting(false);
//       setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
//     }
//   }, [charIndex, isDeleting, currentPhraseIndex]);

//   return (
//     <section className="relative m-w-[100vw] mx-auto ">
//       {/* <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src={HeroVideo}
//         autoPlay
//         loop
//         muted
//         playsInline
//       /> */}
//       <img src={bg_hero} alt="" className='absolute inset-0 w-full h-full object-cover' />
//       {/* <div className="absolute inset-0 bg-black opacity-70"></div> */}
//       <div className="relative z-3 flex flex-col items-center justify-center text-center">
//         <div className="container h-80 flex items-center flex-col justify-center text-white py-3">
//           <div className="py-4">
//             <h1
//               className="text-8xl font-semibold py-3 text-black"
//               style={{ color: 'var(--black-color)', fontWeight: 500 }}
//             >
//               Be {displayText}
//               <span className='typewriter'></span>
//             </h1>
//             <h1 className="text-4xl font-extrabold" style={{ color: 'var(--black-color)', fontWeight: 400 }}>
//               Helping you find clarity and balance
//             </h1>
//             {/* <input
//               autoFocus='true'
//               type="text"
//               placeholder='Search anything...'
//               className="bg-transparent border-l-2 border-l-neutral-500 pl-2 text-white placeholder-grey focus:outline-none"
//               style={{ width: "10rem" }}
//             />
//             <FaSearch className="ml-2 text-[var(--heaven)]" /> */}
//             {/* <p className='text-base mt-2 font-normal'>We are on a mission to prevent and combat mental illness through mental health education <br /></p> */}
//           </div>
//           <div>
//             <Link to="/about-us">
//               <button className='action-button' data-aos="fade-up">Share your stories</button>
//             </Link>
//           </div>

//         </div>
//         <div className='mt-12 flex flex-col items-center '>
//           <p className='text-xl text-gray-600 uppercase'>
//             Scroll down
//           </p>
//           <FaAngleDown className='size-12 text-center items-center text-[var(--primary)] to-fro-animation' />
//         </div>

//       </div>

//     </section>
//   );
// };

// export default TopIntro;


import React, { useState, useEffect } from 'react';
import HeroVideo from "../../assets/videos/HeroVideo.mp4";
import bg_hero from "../../assets/images/bg-hero.png";
import { FaAngleDown, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaUpRightAndDownLeftFromCenter } from 'react-icons/fa6';
import "../../index.css"


const TopIntro = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center p-6 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section - Text and CTAs */}
        <div>
          {/* Badge */}
          <div className="bg-[#f0f0f0] text-[#01427a] text-sm inline-flex items-center py-1 px-3 rounded-full mb-4">
            <span className="bg-[#01427a] text-white rounded-full w-4 h-4 flex items-center justify-center mr-2">N</span>
            Reco: Business Insurance by Nova
          </div>

          {/* Main Heading */}
          <h1 className="text-[#0c0c0d] text-4xl font-bold mb-4 leading-tight h2">
            Discover healthcare that employees love
          </h1>

          {/* Subtext */}
          <p className="text-[#6c6c6c] text-lg mb-8 text-b4 hero-para">
            Get the best-in-class group health insurance plans and wellness benefits for your team.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#01427a] text-white py-3 px-6 rounded-lg hover:bg-opacity-90">
              Get an estimated quote
            </button>
            <button className="bg-[#eab308] text-white py-3 px-6 rounded-lg hover:bg-opacity-90">
              Schedule a call
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center lg:justify-end">
          <img src="http://127.0.0.1:5500/images/62720389ff6deb68c09459b9_home-hero-phone-meds-p-800.png" alt="Healthcare Illustration" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default TopIntro;

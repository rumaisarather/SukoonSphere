import React, { useState, useEffect } from 'react';
import HeroVideo from "../../assets/videos/HeroVideo.mp4";

const phrases = ["confident", "bold", " brave", " flawless"];

const TopIntro = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let typingSpeed = isDeleting ? 50 : 150;

    if (charIndex < currentPhrase.length && !isDeleting) {
      // Typing forward
      const timeoutId = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } else if (charIndex === currentPhrase.length && !isDeleting) {
      // Finished typing, hold before deleting
      const holdTimeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(holdTimeout);
    } else if (isDeleting && charIndex > 0) {
      // Deleting text
      const deleteTimeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
      return () => clearTimeout(deleteTimeout);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }
  }, [charIndex, isDeleting, currentPhraseIndex]);

  return (
    <section className="relative max-w-[100vw] mx-auto">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-3 flex flex-col items-center justify-center text-center">
        <div className="container h-80 flex items-center flex-col justify-center text-white py-3">
          <div className="py-4">
            <h1
              className="text-4xl font-semibold py-3 "
              style={{ color: 'var(--white-color)', fontWeight: 500 }}
            >
              Be {displayText}
              <span className='typewriter'></span>
            </h1>
            <h1 className="text-2xl font-extrabold" style={{ color: 'var(--white-color)', fontWeight: 400 }}>
              Helping you find span clarity and balance
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopIntro;

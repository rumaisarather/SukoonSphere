import React from 'react';
import Navbackground from "../../assets/images/testimonial-bg.jpeg";
import { SectionWrapper } from '@/assets/styles/HomeLayout';


const TopIntro = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${Navbackground})`, height: '60vh'
    }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-3 flex flex-col items-center justify-center  text-center">
        <div className="container h-80 flex items-center text-white py-3">
          <SectionWrapper>
            <div className='py-4'>
              <h4 className='text-2xl font-semibold py-3' style={{ color: 'var(--white-color)', fontFamily: "Luxurious Roman", fontWeight: 400, fontStyle: ' normal', }}>
                We are here for
              </h4>
              <h1 className='text-4xl font-extrabold' style={{
                color: 'var(--white-color) ', fontFamily: "Luxurious Roman", fontWeight: 400, fontStyle: ' normal',
              }}>
                Helping you find clarity and balance
              </h1>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section >
  );
};

export default TopIntro;

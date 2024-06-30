import React from 'react';
import { hero1_img, hero3_img } from '../Assets';

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row p-14 md:p-20'>
      <div className='text-center md:text-left w-full md:w-2/5 py-8 md:py-20 px-4 md:px-10'>
        <h1 className='font-bricolage font-bold text-5xl md:text-6xl mb-4 leading-tight'>
          Elegance at its peak
        </h1>
        <p className='mb-6 text-lg leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <button className='font-inter border-2 border-black rounded-full py-3 px-6 font-semibold text-lg hover:bg-black hover:text-white transition duration-300'>
          SHOP NOW
        </button>
      </div>
      <div className='w-full md:w-3/5 h-[24rem] md:h-[36rem] mt-8 md:mt-0 px-4 md:px-10'>
        <div className='relative w-full h-full'>
          <img 
            src={hero1_img} 
            className='absolute bottom-0 left-0 h-3/4 md:w-auto w-auto object-cover rounded-lg shadow-lg' 
            alt="Elegant jewelry piece"
          />
          <img 
            src={hero3_img} 
            className='absolute top-0 right-0 h-2/3 md:h-auto w-auto object-cover rounded-lg shadow-lg' 
            alt="Stylish accessory showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
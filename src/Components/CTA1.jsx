import React from 'react';
import { hand_img } from '../Assets';

const CTA1 = () => {
  return (
    // <section className="my-8 sm:my-12 md:my-16 lg:my-20">
    <section className="py-10 ">
      <div
        className="relative w-full h-full aspect-[4/3] lg:aspect-[1440/453] bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${hand_img})`,
          // aspectRatio: '1440 / 453',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <h2 className="font-bricolage text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 leading-tight">
              Luxury in your hands
            </h2>
            <p className="font-roboto text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-2 sm:px-4 md:px-6 leading-relaxed mb-4 sm:mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button className="font-inter border-2 border-white rounded-full px-6 py-2 sm:py-3 mt-2 font-semibold text-sm sm:text-base transition-colors duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA1;
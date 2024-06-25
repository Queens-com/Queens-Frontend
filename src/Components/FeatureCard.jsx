import React from 'react';

const FeatureCard = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className='flex flex-col items-center basis-1/3 mx-8 md:mx-0 my-2 px-10 py-6 shadow-md border'>
      <img src={imgSrc} className="w-[24px] h-[24px] mb-8" alt={imgAlt} />
      <p className='font-bold text-center text-lg bricolage mb-1'>{title}</p>
      <span className='leading-tight text-center roboto'>{description}</span>
    </div>
  );
};

export default FeatureCard;

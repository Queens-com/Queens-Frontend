import React from 'react';

const StoreButton = ({ logo, altText, url }) => {
  return (
    <a href={url} className="flex basis-1/2 lg:basis-1/3 items-center justify-center w-40 h-40 border border-transparent hover:border-active_text hover:border-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={logo} alt={altText} className="h-24"/>
    </a>
  );
};

export default StoreButton;

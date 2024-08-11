import React from 'react';

const BlueButton = ({ text }) => {
  return (
    <div className="p-2 transition-colors duration-300 ease-in-out border-2 border-primary bg-primary hover:bg-background group whitespace-nowrap">
      <span className="text-lg text-white transition-colors duration-300 ease-in-out sm:text-2xl group-hover:text-primary">
        {text}
      </span>
    </div>
  );
};

export default BlueButton;

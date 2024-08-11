import React from 'react';
import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'] });
const SlideShowItem = ({ image }) => {
  return (
    <div
      className={`relative w-[1200px] h-[640px] flex mx-auto mt-5   ${raleway.className}`}
    >
      <img src={image} className="object-cover w-full h-full" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-transparent to-black">
        <h1 className="mt-8 text-5xl font-bold text-white ">
          Akshar Vidya Griha
        </h1>
        <h2 className="mt-3 text-2xl font-semibold text-title">
          Affiliated to CBSE, New Delhi
        </h2>
        <h2 className="mt-3 text-2xl font-semibold text-title">
          Managed By - Akshar Foundation Trust, Patna
        </h2>
      </div>
    </div>
  );
};

export default SlideShowItem;

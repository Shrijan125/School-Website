'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Announcements = () => {
  const announcements = [
    'Change in school Timing',
    'Declaration of Result',
    'Parents Teacher Meeting',
    'Summer Vacation Circular!',
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex =>
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    gsap.fromTo(
      '.heading-ann', 
      { translateX: '100%' },  
      { translateX: '0%', ease: 'power2.out', duration: 0.8 }
    );
    return () => clearInterval(intervalId);
  }, [index,announcements.length]);
  function handleLeftClick() {
    if (index === 0) setIndex(announcements.length - 1);
    else setIndex(index => index - 1);
  }
  function handleRightClick() {
    if (index === announcements.length - 1) setIndex(0);
    else setIndex(index => index + 1);
  }

  useGSAP(() => {
    gsap.to('.heading-ann', {
      translateX: '0',
      ease: 'power2.Out',
      duration: 0.8,
    });
  });

  return (
    <div className="flex sm:flex-row flex-col sm:mt-[150px] mt-[400px] mx-2 xl:mx-20 whitespace-nowrap">
      <div className="flex items-center justify-center p-4 text-xl font-semibold sm:text-2xl bg-primary text-title sm:w-auto w-fit">
        Announcements:
      </div>
      <div className="flex items-center justify-between w-full overflow-hidden sm:px-10 bg-secondary">
        <h1 className="p-4 text-xl capitalize sm:text-2xl text-title transform translate-x-[100%] heading-ann">
          {announcements[index]}
        </h1>
        <div className="flex items-center justify-center text-title">
          <ChevronLeft
            className="sm:size-9 hover:cursor-pointer"
            onClick={handleLeftClick}
          ></ChevronLeft>
          <ChevronRight
            className="sm:size-9 hover:cursor-pointer"
            onClick={handleRightClick}
          ></ChevronRight>
        </div>
      </div>
    </div>
  );
};

export default Announcements;

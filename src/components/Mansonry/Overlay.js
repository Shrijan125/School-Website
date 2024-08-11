'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Overlay = ({ title, position, svg }) => {
  const gsapRef = useRef();
  useGSAP(() => {
    gsap.to(gsapRef.current, {
      translateX: '-100%',
      duration: 0.5,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: gsapRef.current,
        start: 'top 30%',
        end: 'bottom top',
      },
    });
  });
  return (
    <>
      <div
        ref={gsapRef}
        className={`absolute z-50 w-full h-full border-b-[0.5px] opacity-25  bg-primary flex sm:hidden items-start pt-14 pl-5`}
      >
        {svg}
      </div>
      <div
        className={`absolute z-20 w-full h-[50%] top-1/2 bg-gradient-to-b from-transparent to-black flex items-end pb-4 ${position === 'br' ? 'justify-end pr-4 ' : 'justify-start pl-4 '}`}
      >
        <span className="text-3xl font-bold text-white uppercase">{title}</span>
      </div>
    </>
  );
};

export default Overlay;

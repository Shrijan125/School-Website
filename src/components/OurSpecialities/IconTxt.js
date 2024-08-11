'use client';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const IconTxt = ({ title, description, icon: Icon }) => {
  useGSAP(() => {
    gsap.to('.icon', {
      translateY: '0',
      ease: 'power2.inOut',
      duration: 0.5,
      scrollTrigger: {
        trigger: '.icon',
        start: 'top 70%',
        end: 'bottom top',
      },
    });
    gsap.to('.heading', {
      translateX: '0',
      ease: 'power2.inOut',
      duration: 0.5,
      scrollTrigger: {
        trigger: '.heading',
        start: 'top 70%',
        end: 'bottom top',
      },
    });
  });
  return (
    <div className="flex flex-col items-start justify-start mb-5 md:items-start ms:items-start md:mb-0 md:place-items-start">
      <div className="flex items-center gap-2 overflow-hidden sm:gap-5">
        <div className="overflow-hidden">
          <Icon className="sm:size-10 size-6 stroke-primary icon transform translate-y-[100%]" />
        </div>
        <h1 className="text-xl heading sm:text-2xl text-primary whitespace-nowrap transform translate-x-[100%]">
          {title}
        </h1>
      </div>
      <div className="max-w-[80%] ">
        <p className="mt-2 text-lg sm:text-xl text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default IconTxt;

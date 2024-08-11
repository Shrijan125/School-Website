'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import './AboutUs.css';
import BlueButton from '../Button/BlueButton';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const gsapRef1 = useRef();
  const gsapRef2 = useRef();
  useGSAP(() => {
    gsap.from(gsapRef2.current, {
      width: 0,
      ease: 'power2.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: gsapRef2.current,
        start: 'top 55%',
        end: 'bottom top',
      },
    });
    gsap.from(gsapRef1.current, {
      height: 0,
      ease: 'power2.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: gsapRef1.current,
        start: 'top 55%',
        end: 'bottom top',
      },
    });
  });
  return (
    <div className="relative w-full h-[110%] mt-10 max-h-[700px] sm:max-h-[120%] bg-background">
      <div
        className="w-full h-[7px] absolute sm:top-[70px] top-[20px] bg-linered z-20"
        ref={gsapRef2}
      ></div>
      <div
        className="absolute w-[7px] h-full bg-lineblue sm:left-20 z-10 left-4"
        ref={gsapRef1}
      ></div>
      <div className="absolute sm:left-32  sm:top-[100px] flex sm:flex-row flex-col justify-between xl:w-[90%] sm:w-[88%] w-full">
        <div className="sm:w-[20%] flex flex-col sm:ml-0 ml-8 sm:gap-20 mt-6 sm:mt-0 sm:order-none order-6 gap-4 justify-start items-start">
          <h1 className="text-lg font-bold uppercase sm:text-xl text-primary">
            About Us
          </h1>
          <p className="pr-3 text-xl font-medium sm:text-2xl text-primary">
            Fostering <span>Excellence</span> in Education with{' '}
            <span>Heart</span>, <span>Mind</span>, and <span>Spirit</span>.
          </p>
        </div>

        <div className="w-full sm:h-[500px] xl:h-[700px] h-[300px] relative img-container ">
          <Image fill src={'/images/img3.jpg'} className="object-cover"></Image>
        </div>
        <div className="absolute flex flex-col sm:w-[80%] w-[90%] sm:pr-0 pr-3 gap-4 xl:-bottom-48 sm:-bottom-52  sm:ml-0 ml-8 -bottom-72 sm:right-9 sm:mb-8 mb-12">
          <p className="text-lg sm:text-xl text-primary">
            AKSHAR VIDYA GRIHA, established in 2011 at Dardha, Goh, Aurangabad
            (Bihar) under the AKSHAR FOUNDATION TRUST-PATNA, is a co-educational
            institution affiliated to C.B.S.E. Delhi since 2015
          </p>
          <div className="sm:w-36 w-min">
            <BlueButton text={'Read More'}></BlueButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

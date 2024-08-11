'use client';
import React, { useRef } from 'react';
import BlueButton from '../Button/BlueButton';
import Image from 'next/image';
import './Message.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Messages = ({
  name,
  image,
  designation,
  message,
  linecolor,
  imgColor,
}) => {
  const gsapRef = useRef();
  useGSAP(() => {
    gsap.from(gsapRef.current, {
      height: 0,
      ease: 'power2.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: gsapRef.current,
        start: 'top 30%',
        end: 'bottom top',
      },
    });
  });
  return (
    <div className="relative mt-10 h-full max-h-[650px] sm:max-h-[100%] sm:h-[75%] xl:h-[70%] w-full bg-background">
      <div
        ref={gsapRef}
        className={`absolute w-[7px] h-full ${linecolor} sm:left-20 z-10 left-4`}
      ></div>
      <div className="absolute sm:left-32  sm:top-[100px] flex sm:flex-row flex-col justify-between xl:w-[90%] sm:w-[88%] w-full">
        <div className="sm:w-[40%] flex flex-col sm:ml-0 ml-8 sm:gap-20 mt-6 sm:mt-0 sm:order-none order-6 gap-4 justify-start items-start">
          <div>
            <h1 className="text-2xl font-medium sm:text-3xl text-primary">
              {name}
            </h1>
            <h2 className="mt-2 text-xl font-medium uppercase sm:text-2xl text-secondary">
              {designation}
            </h2>
          </div>
          <div>
            <p className="pr-3 text-xl sm:text-2xl text-primary">{message}</p>
            <div className="mt-4 sm:w-36 w-min">
              <BlueButton text={'Read More'}></BlueButton>
            </div>
          </div>
        </div>
        <div
          className="w-full sm:w-[50%] sm:h-[400px]  xl:h-[500px] h-[300px] relative person-img"
          style={{ '--person-img-color': imgColor }}
        >
          <Image fill src={image} className="object-cover" alt={''}></Image>
        </div>
      </div>
    </div>
  );
};

export default Messages;

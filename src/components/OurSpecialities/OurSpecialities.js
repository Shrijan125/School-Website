'use client';

import React, { useRef } from 'react';
import IconTxt from './IconTxt';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import {
  BookMarked,
  Building2,
  Handshake,
  Leaf,
  Shield,
  UserRound,
} from 'lucide-react';
const OurSpecialities = () => {
  const gsapRef = useRef(null);
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
    <div className="relative mt-10 h-[200%] max-h-[1000px] sm:max-h-[700px] sm:h-[90%] xl:h-[70%] w-full bg-background">
      <div
        ref={gsapRef}
        className={`absolute w-[7px] h-full bg-linered sm:left-20 z-10 left-4`}
      ></div>

      <div className="absolute sm:left-32  sm:top-[100px] flex sm:flex-row flex-col justify-between xl:w-[90%] sm:w-[88%] w-full">
        <div className="flex flex-col items-start justify-start order-6 gap-4 mt-6 ml-8 sm:w-full sm:ml-0 sm:gap-20 sm:mt-0 sm:order-none">
          <div>
            <h1 className="text-2xl font-medium sm:text-3xl text-primary">
              {'Our Specialities'}
            </h1>
            <h2 className="mt-2 text-xl font-medium uppercase sm:text-2xl text-secondary">
              {'Nurturing Minds, Building Futures'}
            </h2>
          </div>
          <div className="z-20 grid gap-5 mt-8 place-items-start xl:grid-cols-3 lg:grid-cols-2 md:gap-x-8 md:gap-y-10 xl:gap-y-20">
            <IconTxt
              title={'Experienced Teachers'}
              description={'Our staff is dedicated and highly qualified.'}
              icon={UserRound}
            />
            <IconTxt
              title={'Comprehensive Curriculum'}
              description={
                'We offer education covering academics, arts, and sports.'
              }
              icon={BookMarked}
            />
            <IconTxt
              title={'Safe Environment'}
              description={
                'Our school provides a secure and nurturing atmosphere.'
              }
              icon={Shield}
            />
            <IconTxt
              title={'Advanced Infrastructure'}
              description={'Fully equipped labs and smart classrooms.'}
              icon={Building2}
            />
            <IconTxt
              title={'Community Engagement'}
              description={
                'Strong partnerships with parents and local organizations.'
              }
              icon={Handshake}
            />
            <IconTxt
              title={'Lush Green Campus'}
              description={'Our beautiful, green campus enhances learning.'}
              icon={Leaf}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpecialities;

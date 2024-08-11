'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SlideShow.css';
import Image from 'next/image';
import BlueCard from '../BlueCard/BlueCard';
const SlideShow = () => {
  const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpeg',
    '/images/img5.jpeg',
  ];
  return (
    <div className="relative mt-5">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: -30,
          depth: 200,
          modifier: 1,
        }}
        breakpoints={{
          375: {
            coverflowEffect: {
              stretch: -35,
            },
          },
          400: {
            coverflowEffect: {
              stretch: -40,
            },
          },
          640: {
            coverflowEffect: {
              stretch: -75,
            },
          },
          1025: {
            coverflowEffect: {
              stretch: -140,
            },
          },
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Image src={images[0]} fill className="object-cover" key={''}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images[1]} fill className="object-cover" key={''}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images[2]} fill className="object-cover" key={''}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images[3]} fill className="object-cover" key={''}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images[4]} fill className="object-cover" key={''}></Image>
        </SwiperSlide>
      </Swiper>

      <div className="absolute inset-0 mx-auto z-10 2xl:w-[1500px] flex flex-col items-center justify-center  2xl:h-[800px] bg-gradient-to-b from-transparent to-black img-overlay">
        <h1 className="mt-8 text-4xl font-bold text-white whitespace-nowrap sm:text-5xl">
          Akshar Vidya Griha
        </h1>
        <h2 className="mt-3 text-xl font-semibold sm:text-2xl whitespace-nowrap text-title">
          Affiliated to CBSE, New Delhi
        </h2>
        <h2 className="mt-3 text-xl font-semibold text-center sm:text-2xl text-title">
          Managed By - Akshar Foundation Trust, Patna
        </h2>
      </div>
      <div className="absolute z-30 w-full sm:-bottom-20 -bottom-[70%]">
        <div className="flex flex-col items-center justify-center gap-4 mx-2 sm:gap-2 xl:gap-8 sm:flex-row sm:mx-0">
          <BlueCard
            heading={'excellence'}
            title={'About us'}
            subtitle={'A History of'}
          ></BlueCard>
          <BlueCard
            heading={'curriculum'}
            title={'learning'}
            subtitle={'Our'}
          ></BlueCard>
          <BlueCard
            heading={'family'}
            title={'enrol online'}
            subtitle={'Join Our'}
          ></BlueCard>
          <BlueCard
            heading={'news'}
            title={'news & events'}
            subtitle={'Read Our'}
          ></BlueCard>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;

'use client';
import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import { EffectCoverflow,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SlideShow.css'
import Image from 'next/image';
import BlueCard from '../BlueCard/BlueCard';
const SlideShow = () => {
    const images=['/images/img1.jpg','/images/img2.jpg','/images/img3.jpg','/images/img4.jpeg','/images/img5.jpeg'];
  return (
    <div className='relative mt-5'>
      <Swiper effect='coverflow' grabCursor={true}
      centeredSlides={true}
      loop={true}
      speed={800}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate:0,
        stretch:-140,
        depth:200,
        modifier:1
      }}
      modules={[EffectCoverflow,Autoplay]}
      className='swiper_container'
      >
        <SwiperSlide>
          <Image src={images[0]} fill></Image>
        </SwiperSlide>
        <SwiperSlide>
        <img src='/images/img2.jpg'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='/images/img3.jpg'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='/images/img4.jpeg'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='/images/img5.jpeg'></img>
        </SwiperSlide>
      </Swiper>

      <div className='absolute inset-0 mx-auto z-10 w-[1500px] flex flex-col items-center justify-center  h-[800px] bg-gradient-to-b from-transparent to-black '>
            <h1 className='mt-8 text-5xl font-bold text-white '>Akshar Vidya Griha</h1>
            <h2 className='mt-3 text-2xl font-semibold text-title'>Affiliated to CBSE, New Delhi</h2>
            <h2 className='mt-3 text-2xl font-semibold text-title'>Managed By - Akshar Foundation Trust, Patna</h2>
      </div>
        <div className='absolute z-30 w-full -bottom-20'>
          <div className='flex items-center justify-center gap-8'>
        <BlueCard heading={'excellence'} title={'About us'} subtitle={'A History of'}></BlueCard>
        <BlueCard heading={'curriculum'} title={'learning'} subtitle={'Our'}></BlueCard>
        <BlueCard heading={'family'} title={'enrol online'} subtitle={'Join Our'}></BlueCard>
        <BlueCard heading={'news'} title={'news & events'} subtitle={'Read Our'}></BlueCard>
        </div>
        </div>
        
    </div>
  );
}

export default SlideShow
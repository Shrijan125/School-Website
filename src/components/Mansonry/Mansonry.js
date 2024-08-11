'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Overlay from './Overlay';

const Mansonry = () => {
  const svg = [
    <svg
      width="76"
      height="70"
      viewBox="0 0 76 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73.34 61.16V58.66H70.84H68.92C68.3945 58.66 68.0977 58.5359 67.9017 58.3976C67.6923 58.2498 67.4125 57.9528 67.149 57.3215C67.1485 57.3205 67.1481 57.3195 67.1477 57.3185L45.8707 5.80561L44.9791 3.647L42.7649 4.38984L30.3649 8.54983L29.2734 8.916L28.8421 9.9834L9.80207 57.1034L9.79882 57.1115C9.59836 57.6127 9.2999 57.9512 8.83932 58.2042C8.18976 58.5031 7.48004 58.66 6.68001 58.66H5.32001H2.82001V61.16V65V67.5H5.32001H26.52H29.02V65V61.16V58.66H26.52H24.6C24.35 58.66 24.1546 58.6142 23.9817 58.5294C23.9895 58.3704 24.0243 58.231 24.0845 58.0954L24.1096 58.0391L24.1318 57.9816L25.8337 53.58H42.2853L44.0629 58.4981C44.0788 58.5536 44.0927 58.6058 44.1047 58.6548C44.0372 58.6581 43.9624 58.66 43.88 58.66H41.96H39.46V61.16V65V67.5H41.96H70.84H73.34V65V61.16ZM29.7513 43.14L34.2211 31.4395L38.4719 43.14H29.7513Z"
        stroke="white"
        strokeWidth="5"
      />
    </svg>,
    <svg
      width="62"
      height="66"
      viewBox="0 0 62 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.78 5V2.5H56.28H5.88H3.38V5V8.84V11.34H5.88H8.44C9.64442 11.34 10.0935 11.576 10.1919 11.6489C10.2117 11.6636 10.2109 11.6647 10.2103 11.6654C10.2102 11.6655 10.2101 11.6657 10.2102 11.6659C10.2172 11.6815 10.26 11.7856 10.26 12.04V53.96C10.26 54.2144 10.2172 54.3185 10.2102 54.3341C10.2101 54.3343 10.2102 54.3345 10.2103 54.3346C10.2109 54.3353 10.2117 54.3364 10.1919 54.3511C10.0935 54.424 9.64442 54.66 8.44 54.66H5.88H3.38V57.16V61V63.5H5.88H36.28H38.78V61V57.16V54.66H36.28H33.72C32.5156 54.66 32.0665 54.424 31.9681 54.3511C31.9483 54.3364 31.9491 54.3353 31.9497 54.3346C31.9498 54.3345 31.9499 54.3343 31.9498 54.3341C31.9428 54.3185 31.9 54.2144 31.9 53.96V40.3H39.16C39.6507 40.3 39.857 40.3946 39.9138 40.4273C39.9415 40.4432 39.9578 40.4574 39.9735 40.4754C39.9906 40.4952 40.0259 40.5416 40.0673 40.6368L40.094 40.6982L40.1239 40.758C40.5082 41.5266 40.8693 42.8764 41.0713 44.997L41.2868 47.26H43.56H46.68H49.18V44.76V25.4V22.9H46.68H43.56H41.2868L41.0713 25.163C40.87 27.2764 40.5088 28.6764 40.1047 29.5214L40.0942 29.5433L40.0841 29.5655C40.0493 29.642 40.0213 29.676 40.0102 29.6883C40 29.6995 39.986 29.7125 39.9552 29.7295C39.889 29.7659 39.6669 29.86 39.16 29.86H31.9V12.94H43.08C45.1479 12.94 46.5313 13.6022 47.5379 14.7824C48.6293 16.062 49.5028 18.2187 49.8751 21.5941L50.1206 23.82H52.36H56.28H58.78V21.32V5Z"
        stroke="white"
        strokeWidth="5"
      />
    </svg>,
    <svg
      width="64"
      height="66"
      viewBox="0 0 64 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60.3654 45.0294L60.6656 42.26H57.88H53.96H51.8102L51.4882 44.3855C50.9821 47.7257 50.1818 50.0125 49.2404 51.4523C48.5923 52.4018 47.5083 53.06 45.4 53.06H31.82V37.34H38.92C39.4107 37.34 39.617 37.4346 39.6738 37.4673C39.7015 37.4832 39.7178 37.4974 39.7335 37.5154C39.7506 37.5352 39.7859 37.5816 39.8273 37.6768L39.854 37.7382L39.8839 37.798C40.2682 38.5666 40.6293 39.9164 40.8313 42.037L41.0468 44.3H43.32H46.44H48.94V41.8V22.44V19.94H46.44H43.32H41.0468L40.8313 22.203C40.63 24.3164 40.2688 25.7164 39.8647 26.5614L39.8541 26.5833L39.8441 26.6055C39.8093 26.682 39.7813 26.716 39.7701 26.7283C39.76 26.7395 39.746 26.7525 39.7152 26.7695C39.649 26.8059 39.4269 26.9 38.92 26.9H31.82V12.94H43C45.0679 12.94 46.4513 13.6022 47.4579 14.7824C48.5493 16.062 49.4228 18.2187 49.7951 21.5941L50.0406 23.82H52.28H56.2H58.7V21.32V5V2.5H56.2H5.79999H3.29999V5V8.84V11.34H5.79999H8.35999C9.5644 11.34 10.0135 11.576 10.1119 11.6489C10.1317 11.6636 10.1309 11.6647 10.1303 11.6654C10.1302 11.6655 10.1301 11.6657 10.1302 11.6659C10.1372 11.6815 10.18 11.7856 10.18 12.04V53.96C10.18 54.2144 10.1372 54.3185 10.1302 54.3341C10.1301 54.3343 10.1302 54.3345 10.1303 54.3346C10.1309 54.3353 10.1317 54.3364 10.1119 54.3511C10.0135 54.424 9.5644 54.66 8.35999 54.66H5.79999H3.29999V57.16V61V63.5H5.79999H56.12H58.3637L58.6054 61.2694L60.3654 45.0294Z"
        stroke="white"
        strokeWidth="5"
      />
    </svg>,
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.79999 54.66H3.29999V57.16V61V63.5H5.79999H58.52H60.7835L61.0077 61.2477L62.7677 43.5676L63.0412 40.82H60.28H56.04H53.9425L53.578 42.8855C53.1454 45.3373 52.2986 47.8223 51.0127 50.3445C49.9283 52.4717 48.7473 53.06 47.48 53.06H34.04C32.7999 53.06 32.3362 52.7715 32.1879 52.6358C32.0815 52.5385 31.82 52.2349 31.82 51.24V12.04C31.82 11.7856 31.8628 11.6815 31.8698 11.6659C31.8699 11.6657 31.8698 11.6655 31.8697 11.6654C31.8691 11.6647 31.8682 11.6636 31.8881 11.6489C31.9865 11.576 32.4356 11.34 33.64 11.34H36.2H38.7V8.84V5V2.5H36.2H5.79999H3.29999V5V8.84V11.34H5.79999H8.35999C9.5644 11.34 10.0135 11.576 10.1119 11.6489C10.1317 11.6636 10.1309 11.6647 10.1303 11.6654C10.1302 11.6655 10.1301 11.6657 10.1302 11.6659C10.1372 11.6815 10.18 11.7856 10.18 12.04V53.96C10.18 54.2144 10.1372 54.3185 10.1302 54.3341C10.1301 54.3343 10.1302 54.3345 10.1303 54.3346C10.1309 54.3353 10.1317 54.3364 10.1119 54.3511C10.0135 54.424 9.5644 54.66 8.35999 54.66H5.79999Z"
        stroke="white"
        strokeWidth="5"
      />
    </svg>,
    <svg
      width="66"
      height="68"
      viewBox="0 0 66 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4884 61.3978L17.4884 61.3978L17.4994 61.4037C22.4355 64.048 28.415 65.3 35.32 65.3C40.0907 65.3 44.3821 64.5993 48.1437 63.131C51.8908 61.6889 54.992 59.7057 57.3338 57.1173C59.6659 54.5454 61.2466 51.6672 61.9935 48.4926L62.7165 45.42H59.56H54.2H52.6489L51.96 46.8098C50.6517 49.4493 48.8344 51.3545 46.5036 52.6249C44.1464 53.9096 41.1235 54.62 37.32 54.62C33.4242 54.62 30.5282 53.0516 28.3729 49.7526C26.1342 46.326 24.86 41.1752 24.86 34C24.86 29.4261 25.4959 25.6153 26.6897 22.5069C27.9431 19.3291 29.6071 17.0913 31.5957 15.6181C33.6507 14.1346 36.0086 13.38 38.76 13.38C42.0404 13.38 44.8564 14.2156 47.2932 15.8401L47.302 15.846L47.3108 15.8518C49.4944 17.281 50.9679 19.6651 51.4827 23.4564L51.7765 25.62H53.96H58.52H61.02V23.12V5.60001V3.10001H58.52H53.32H50.82V5.60001V6.16134C46.1857 3.82763 40.8341 2.70001 34.84 2.70001C28.0847 2.70001 22.2097 3.95578 17.3284 6.60225L17.3284 6.60222L17.3172 6.60835C12.5163 9.24304 8.87098 12.967 6.44945 17.751L6.44387 17.762L6.43841 17.7731C4.10498 22.4983 2.97998 27.9304 2.97998 34C2.97998 40.0784 4.13503 45.5186 6.52945 50.249C8.95527 55.0415 12.6338 58.7657 17.4884 61.3978Z"
        stroke="white"
        strokeWidth="5"
      />
    </svg>,
  ];
  const gsapRef = useRef(null);
  return (
    <div className="relative mt-10 h-[200%] max-h-[1400px] sm:h-[1400px]  w-full bg-background ">
      <div
        className={`absolute w-[7px] h-full bg-lineblue sm:left-20 z-10 left-4 lg:block hidden`}
      ></div>
      <div className="absolute sm:left-32 sm:top-[100px] sm:flex hidden flex-col sm:flex-row justify-between xl:w-[90%] sm:w-[88%] w-full">
        <div className="flex flex-col items-start justify-start order-6 gap-4 mt-6 ml-8 sm:w-full sm:ml-0 sm:gap-20 sm:mt-0 sm:order-none">
          <div>
            <h1 className="text-2xl font-medium sm:text-3xl text-primary">
              {'Gallery'}
            </h1>
            <h2 className="mt-2 text-xl font-medium uppercase sm:text-2xl text-secondary">
              {'Visual Highlights of Our Campus'}
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-full mx-auto sm:max-w-screen-md xl:max-w-screen-lg sm:pt-72 sm:flex-row">
        <div className="sm:w-[55%] sm:h-[1000px] h-[900px] bg-violet-300 flex flex-col w-full">
          <div className="relative w-full overflow-hidden h-1/3" ref={gsapRef}>
            <Overlay
              position={'bl'}
              title={'Activities'}
              svg={svg[0]}
            ></Overlay>
            <Image
              className="object-cover"
              fill
              src={'/images/Arts.jpg'}
            ></Image>
          </div>
          <div className="relative w-full h-1/3 ">
            <Overlay title={'faculty'} position={'br'} svg={svg[1]}></Overlay>
            <Image
              className="object-cover"
              fill
              src={'/images/teachers.jpg'}
            ></Image>
          </div>
          <div className="relative w-full h-1/3 ">
            <Overlay
              position={'bl'}
              title={'Experiments'}
              svg={svg[2]}
            ></Overlay>
            <Image
              className="object-cover"
              fill
              src={'/images/Experiments.jpg'}
            ></Image>
          </div>
        </div>
        <div className="sm:w-[45%] sm:h-[1000px] h-[600px]  w-full">
          <div className="relative h-1/2 sm:h-[60%]  w-full">
            <Overlay title={'Library'} position={'br'} svg={svg[3]}></Overlay>
            <Image
              className="object-cover"
              fill
              src={'/images/Library.jpg'}
            ></Image>
          </div>
          <div className="relative h-1/2 sm:h-[40%]  w-full">
            <Overlay title={'Computers'} position={'bl'} svg={svg[4]}></Overlay>
            <Image
              className="object-cover"
              fill
              src={'/images/Computers.jpg'}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mansonry;

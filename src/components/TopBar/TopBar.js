import Image from 'next/image';
import React from 'react';
import { Menu } from 'lucide-react';
import BlueButton from '../Button/BlueButton';

const TopBar = () => {
  return (
    <>
      <nav className="sticky flex items-center justify-between px-2 py-3 sm:px-10">
        <Menu className="sm:size-9 size-7" color="#03346E"></Menu>
        <Image src={'/images/logo.png'} height={130} width={130}></Image>
        <BlueButton text={'Contact Us!'}></BlueButton>
      </nav>
      <hr className="border-[0.5px] border-gray-300" />
    </>
  );
};

export default TopBar;

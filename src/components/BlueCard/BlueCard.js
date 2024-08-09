import React from 'react'
import './BlueCard.css';
import { ArrowRight } from 'lucide-react';
const BlueCard = ({title,subtitle,heading}) => {
  return (
    <div className='w-[21%] h-[250px] bg-primary flex flex-col items-center  gap-8 border border-primary button group'>
        <h1 className='mt-5 text-lg font-semibold uppercase transition-colors duration-300 ease-in-out text-subtitle group-hover:text-lineblue'>{title}</h1>
        <div className='flex flex-col items-center gap-2'>
        <h2 className='text-lg transition-colors duration-300 ease-in-out text-title group-hover:text-primary'>{subtitle}</h2>
        <h3 className='text-4xl font-semibold uppercase transition-colors duration-300 ease-in-out text-title group-hover:text-primary'>{heading}</h3>
        <div className='overflow-hidden'>
        <ArrowRight className='mt-2 transition-all duration-300 ease-linear -translate-x-10 size-8 group-hover:translate-x-0' color='#03346e'></ArrowRight>
        </div>
        </div>
    </div>
  )
}

export default BlueCard
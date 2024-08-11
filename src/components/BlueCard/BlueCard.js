import React from 'react';
import './BlueCard.css';
import { ArrowRight } from 'lucide-react';
const BlueCard = ({ title, subtitle, heading }) => {
  return (
    <div className="xl:w-[21%] sm:w-[24%]  sm:h-[250px] h-[100px]  w-full bg-primary flex flex-col sm:items-center items-start justify-around sm:justify-normal gap-8 border border-primary button group">
      <h1 className="hidden mt-5 text-lg font-semibold uppercase transition-colors duration-300 ease-in-out text-subtitle group-hover:text-lineblue sm:block ">
        {title}
      </h1>
      <div className="flex flex-col items-start w-full gap-2 ml-5 sm:items-center sm:ml-0">
        <h2 className="text-lg transition-colors duration-300 ease-in-out text-title group-hover:text-primary">
          {subtitle}
        </h2>
        <div className="flex flex-row items-center justify-between w-[90%] sm:justify-normal sm:flex-col">
          <h3 className="text-3xl font-semibold uppercase transition-colors duration-300 ease-in-out sm:text-4xl text-title group-hover:text-primary">
            {heading}
          </h3>
          <div className="sm:overflow-hidden">
            <ArrowRight className="text-white transition-all duration-300 ease-linear group-hover:text-primary sm:mt-2 sm:-translate-x-10 size-8 group-hover:translate-x-0 sm:text-primary"></ArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueCard;

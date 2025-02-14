import React from 'react';
import AnimatedTrainIcon from "../../img/svg/animatedTrain.svg?react";
import AnimatedUnderlineIcon from "../../img/svg/animatedUnderLine.svg?react";

import "./loadingAnimation.css"


const LoadingTrain = () => {
  return (
    <div className='absolute -mt-12 left-0 flex flex-col items-center justify-center w-[100vw] h-[104%] bg-[#3E3C41] z-50'>

      <div className='mb-16 text-[#928F94] text-2xl font-bold'>Идет поиск</div>
      <div className='animate-train'>
        <AnimatedTrainIcon />
      </div>
      <div className='animate-underline -mt-7'>
        <AnimatedUnderlineIcon />
      </div>
    </div>
  );
};

export default LoadingTrain;
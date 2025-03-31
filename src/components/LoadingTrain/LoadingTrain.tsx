import "./loadingAnimation.css"

import AnimatedTrainIcon from "../../img/svg/animatedTrain.svg?react";
import AnimatedUnderlineIcon from "../../img/svg/animatedUnderLine.svg?react";

const LoadingTrain = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full py-16 bg-[#3E3C41] z-50'>
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
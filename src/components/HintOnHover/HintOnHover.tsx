import React from 'react';

interface HintOnHoverProps {
  hint: string;
}

const HintOnHover: React.FC<HintOnHoverProps> = ({hint}) => {
  return (
    <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-white text-black shadow-lg text-[16px] rounded-lg whitespace-nowrap'>
      {hint}
    </div>
  );
};

export default HintOnHover;
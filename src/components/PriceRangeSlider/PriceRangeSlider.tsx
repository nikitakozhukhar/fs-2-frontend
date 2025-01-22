import React, { useState } from 'react';

interface PriceRangeSliderProps {
  min: number;
  max: number;
  step?: number;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ min, max, step = 100 }) => {
  const [minValue, setMinValue] = useState<number>(min);
  const [maxValue, setMaxValue] = useState<number>(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
  };

  return (
    <div className="flex flex-col">
      <div className="text-white text-3xl mb-2">Стоимость</div>

      <div className="flex justify-between text-white mb-1">
        <div>от</div>
        <div>до</div>
      </div>

      <div className="relative mx-auto h-[19px] w-[294px] border-[1px] border-white rounded-lg">
        <div className="absolute top-0 left-0 right-0 h-[19px] #3E3C41 rounded-lg"></div>
        <div
          className="absolute top-[-1px] h-[20px] bg-orange-500 rounded-lg"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            width: `${((maxValue - minValue) / (max - min)) * 100}%`,
          }}
        ></div>

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full appearance-none pointer-events-auto z-10"
          style={{
            WebkitAppearance: 'none',
            appearance: 'none',
            position: 'absolute',
            top: '0px',
            height: '19px',
            width: '100%',
            background: 'transparent',
            pointerEvents: 'auto',
            zIndex: 10,
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none pointer-events-auto z-10"
          style={{
            WebkitAppearance: 'none',
            appearance: 'none',
            position: 'absolute',
            top: '0px',
            height: '19px',
            width: '100%',
            background: 'transparent',
            pointerEvents: 'auto',
            zIndex: 10,
          }}
        />
        <style>
          {`
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              height: 25px;
              width: 25px;
              border-radius: 50%;
              background: white;
              cursor: pointer;
              border: 2px solid #fff;
            }
            input[type="range"]::-moz-range-thumb {
              height: 25px;
              width: 25px;
              border-radius: 50%;
              background: white;
              cursor: pointer;
              border: 2px solid #000;
            }
            input[type="range"]::-ms-thumb {
              height: 25px;
              width: 25px;
              border-radius: 50%;
              background: white;
              cursor: pointer;
              border: 2px solid #000;
            }
          `}
        </style>
      </div>

      <div className="flex justify-between text-white mt-1">
        <div>{minValue}</div>
        <div>{maxValue}</div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;

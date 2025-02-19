import React, { useState } from "react";
import ReactSlider from "react-slider";

interface RangeSliderProps {
  min: number;
  max: number;
  value: number[];
  onChange: (value: number[]) => void;
  formatValue: (value: number) => string; // Функция форматирования
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, value, onChange, formatValue }) => {
  return (
    <div className="w-full p-4">
      <ReactSlider
        className="relative w-full h-4 bg-transparent rounded-full border border-gray-300"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        pearling
        minDistance={Math.round((max - min) * 0.05)} // Минимальный диапазон 5%
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`h-[13px] ${state.index === 1 ? "bg-orange-500" : "bg-transparent"} rounded-full`}
          />
        )}
        renderThumb={(props, state) => (
          <div
            {...props}
            className="relative w-6 h-6 -my-[6px] rounded-full bg-white border border-gray-400 cursor-pointer shadow-md flex items-center justify-center text-xs font-bold"
          >
            <span className="absolute top-7 text-xl font-normal [#E5E5E5]">
              {formatValue(value[state.index])}
            </span>
          </div>
        )}
      />
    </div>
  );
};

export default RangeSlider;

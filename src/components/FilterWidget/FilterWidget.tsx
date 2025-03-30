import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { JSX } from "react/jsx-runtime";
import CheckBox from "../CheckBox/CheckBox";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import RangeSlider from "../RangeSlider/RangeSlider";

import SecondClassIcon from "../../img/svg/compartment.svg?react";
import ThirdClassIcon from "../../img/svg/reservedSeat.svg?react";
import ForthClassIcon from "../../img/svg/sitting.svg?react";
import FirstClassIcon from "../../img/svg/lux.svg?react";
import WifiIcon from "../../img/svg/wifi.svg?react";
import ExpressIcon from "../../img/svg/express.svg?react";
import ForwardArrowIcon from "../../img/svg/directionRigth.svg?react";
import BackwardArrowIcon from "../../img/svg/directionLeft.svg?react";
import OpenDetailsIcon from "../../img/svg/moreDetails.svg?react";
import CloseDetailsIcon from "../../img/svg/closeDetails.svg?react";

interface Amenity {
  svg: JSX.Element;
  name: string;
  id: string;
}

const amenities: Amenity[] = [
  { svg: <SecondClassIcon />, name: "Купе", id: uuidv4() },
  { svg: <ThirdClassIcon />, name: "Плацкарт", id: uuidv4() },
  { svg: <ForthClassIcon />, name: "Сидячий", id: uuidv4() },
  { svg: <FirstClassIcon />, name: "Люкс", id: uuidv4() },
  { svg: <WifiIcon />, name: "Wi-Fi", id: uuidv4() },
  { svg: <ExpressIcon />, name: "Экспресс", id: uuidv4() },
];

const FilterWidget: React.FC = () => {

  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [openRouteDetails, setOpenRouteDetails] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  //-------------

  const [priceRange, setPriceRange] = useState([0, 7000]); // в тыс. ₽
  const [timeRangeDepartureStraight, setTimeRangeDepartureStraight] = useState([0, 1440]);
  const [timeRangeArrivalStraight, setTimeRangeArrivalStraight] = useState([0, 1440]);
  const [timeRangeDepartureBack, setTimeRangeDepartureBack] = useState([0, 1440]);
  const [timeRangeArrivalBack, setTimeRangeArrivalBack] = useState([0, 1440]);

  const formatPrice = (value: number) => `${value}`;

  // Форматирует минуты в "чч:мм"
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
  };

  //---------------------

  const handleClick = (option: {
    svg?: JSX.Element;
    name?: string;
    id: string;
  }) => {
    console.log(option);
  };

  return (
    <div className="w-[370px] p-[30px_20px] mb-[50px] bg-[#3E3C41] text-white">
      <form className="flex flex-col mb-[10px] relative">
        <div className="arrive-date-start flex flex-col mb-3">
          <label className="text-2xl" htmlFor="start-date">
            Дата поездки
          </label>
          <CustomDatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
          />
        </div>
        <div className="arrive-date-end flex flex-col mb-3">
          <label className="text-2xl" htmlFor="end-date">
            Дата возвращения
          </label>
          <CustomDatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
          />
        </div>
        {/* Линия после формы */}
      </form>

      <div className="w-[370px] h-[1px] relative -left-5 bg-white"></div>

      <div className="train-options flex flex-col items-center mt-[30px] relative">
        {amenities.map((amenitie) => (
          <div
            onClick={() => handleClick(amenitie)}
            className="option-element flex justify-between w-[258px] mb-[20px]"
            key={amenitie.id}
          >
            <div className="option-img">{amenitie.svg}</div>
            <div className="option-name">{amenitie.name}</div>
            <CheckBox id={amenitie.id} />
          </div>
        ))}
      
        <div className="w-[370px] h-[1px] bg-white"></div>
      </div>

      <div className="flex flex-col my-3">
        <div className="text-white text-3xl mb-2">Стоимость</div>

        <div className="mb-8">
          <div className="flex justify-between text-white">
            <span>от</span>
            <span>до</span>
          </div>
          <RangeSlider
            min={0}
            max={7000}
            value={priceRange}
            onChange={setPriceRange}
            formatValue={formatPrice}
          />
        </div>
      </div>

      <div className="w-[370px] h-[1px] relative -left-5 bg-white mb-5"></div>

      <div className="direction-forward flex justify-between items-center mb-5">
        <div className="direction-forvard-left-col flex items-center gap-[20px] text-[1.5em] ">
          <ForwardArrowIcon />
          <div className="direction-forward-title">Туда</div>
        </div>
        <div
          onClick={() => setOpenDetails(!openDetails)}
          className="cursor-pointer"
        >
          {openDetails ? (
            <div className="hover: fill-red-200">
              <CloseDetailsIcon className="text-white stroke-white fill-transparent"/>
            </div>
          ) : (
            <div className="hover: fill-red-200">
              <OpenDetailsIcon className="text-white stroke-white fill-transparent"/>
            </div>
          )}
        </div>
      </div>
      {openDetails && (
        <div className="flex flex-col my-3 font-normal">

          <div className="flex flex-col mb-5">
            <div className="text-[#E5E5E5] text-xl mb-">Время отбытия</div>

            <div className="mb-8">
              <RangeSlider
                min={0}
                max={1440}
                value={timeRangeDepartureStraight}
                onChange={setTimeRangeDepartureStraight}
                formatValue={formatTime}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="self-end text-[#E5E5E5] text-xl mb-2">
              Время прибытия
            </div>

            <div className="mb-8">
              <RangeSlider
                min={0}
                max={1440}
                value={timeRangeArrivalStraight}
                onChange={setTimeRangeArrivalStraight}
                formatValue={formatTime}
              />
            </div>
          </div>
        </div>
      )}

      <div className="w-[370px] h-[1px] relative -left-5 bg-white"></div>

      <div className="direction-backward flex justify-between items-center h-[96px]">
        <div className="direction-backward-left-col flex items-center gap-[20px] text-[1.5em]">
          <BackwardArrowIcon />
          <div className="direction-forward-title">Обратно</div>
        </div>
        <div
          onClick={() => setOpenRouteDetails(!openRouteDetails)}
          className="cursor-pointer"
        >
          {openRouteDetails ? <CloseDetailsIcon className="text-white stroke-white fill-transparent"/> : <OpenDetailsIcon className="text-white stroke-white fill-transparent"/>}
        </div>
      </div>
      {openRouteDetails && (
        <div className="details-content">{
          <div className="flex flex-col my-3 font-normal">

          <div className="flex flex-col mb-5">
            <div className="text-[#E5E5E5] text-xl mb-">Время отбытия</div>

            <div className="mb-8">
              <RangeSlider
                min={0}
                max={1440}
                value={timeRangeDepartureBack}
                onChange={setTimeRangeDepartureBack}
                formatValue={formatTime}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="self-end text-[#E5E5E5] text-xl mb-2">
              Время прибытия
            </div>

            <div className="mb-8">
              <RangeSlider
                min={0}
                max={1440}
                value={timeRangeArrivalBack}
                onChange={setTimeRangeArrivalBack}
                formatValue={formatTime}
              />
            </div>
          </div>
        </div>
        }</div>
      )}
    </div>
  );
};

export default FilterWidget;

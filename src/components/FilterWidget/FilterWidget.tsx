import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { JSX } from "react/jsx-runtime";
import CheckBox from "../CheckBox/CheckBox";
import PriceRangeSlider from '../PriceRangeSlider/PriceRangeSlider';
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import TimeRangeSlider from "../TimeRangeSlider/TimeRangeSlider";

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
import { useSearchDirectionStore } from "../../store/searchDirectionStore";

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

  const { startDateGlobal, endDateGlobal } = useSearchDirectionStore();

  console.log('startDateGlobal', startDateGlobal)
  
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [openRouteDetails, setOpenRouteDetails] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleClick = (option: { svg?: JSX.Element; name?: string; id: string; }) => {
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
        {/* Линия после опций */}
        <div className="w-[370px] h-[1px] bg-white"></div>
      </div>

      <div className="filter-cost my-[20px]">
        <PriceRangeSlider min={1000} max={7000} step={100} />
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
              <CloseDetailsIcon />
            </div>
            
            ) : (
            <div className="hover: fill-red-200">
              <OpenDetailsIcon />
            </div>
            
            )}
        </div>
      </div>
      {openDetails && (
        <div className="mb-3">
          <div className="">
            <div className="">Время отбытия</div>
            <TimeRangeSlider min={0} max={24} step={1}/>
          </div>
          <div className="">
            <div className="">Время прибытия</div>
            <div className=""></div>
            <div className=""></div>
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
          {openRouteDetails ? <CloseDetailsIcon /> : <OpenDetailsIcon />}
        </div>
      </div>
      {openRouteDetails && (
        <div className="details-content">
          {/* Контент для "Обратно" */}
        </div>
      )}
    </div>
  );
};

export default FilterWidget;
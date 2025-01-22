import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./FilterWidget.css";
import CheckBox from "../CheckBox/CheckBox";
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
import PriceRangeSlider from '../PriceRangeSlider/PriceRangeSlider'

const amenities = [
  { svg: <SecondClassIcon />, name: "Купе", id: uuidv4() },
  { svg: <ThirdClassIcon />, name: "Плацкарт", id: uuidv4() },
  { svg: <ForthClassIcon />, name: "Сидячий", id: uuidv4() },
  { svg: <FirstClassIcon />, name: "Люкс", id: uuidv4() },
  { svg: <WifiIcon />, name: "Wi-Fi", id: uuidv4() },
  { svg: <ExpressIcon />, name: "Экспресс", id: uuidv4() },
];

const FilterWidget: React.FC = () => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(10000);

  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [openRouteDetails, setOpenRouteDetails] = useState<boolean>(false);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value <= maxValue - 5) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value >= minValue + 5) {
      setMaxValue(value);
    }
  };

  const handleClick = (option) => {
    console.log(option.id);
  };

  return (
    <div className="filter-widget-container">
      <form className="date-filter-form">
        <div className="arrive-date-start">
          <label className="arrive-date-title" htmlFor="start-date">
            Дата поездки
          </label>
          <input type="date" id="start-date" className="input-date" />
        </div>
        <div className="arrive-date-end">
          <label className="arrive-date-title" htmlFor="end-date">
            Дата возвращения
          </label>
          <input type="date" id="end-date" className="input-date" />
        </div>
      </form>

      <div className="train-options">
        {amenities.map((amenitie) => (
          <div
            onClick={() => handleClick(amenitie)}
            className="option-element"
            key={amenitie.id}
          >
            <div className="option-img">{amenitie.svg}</div>
            <div className="option-name">{amenitie.name}</div>
            <CheckBox />
          </div>
        ))}
      </div>

      <div className="filter-cost">
        <div className="filter-cost-title">Стоимость</div>
        <div className="filter-cost-sliders">
          <div className="slider-container">
            <label htmlFor="min-cost">Минимальная:</label>
            <input
              type="range"
              id="min-cost"
              value={minValue}
              min={0}
              max={10000}
              step={5}
              onChange={handleMinChange}
            />
            <span>{minValue} ₽</span>
          </div>
          <div className="slider-container">
            <label htmlFor="max-cost">Максимальная:</label>
            <input
              type="range"
              id="max-cost"
              value={maxValue}
              min={0}
              max={10000}
              step={5}
              onChange={handleMaxChange}
            />
            <span>{maxValue} ₽</span>
          </div>
        </div>
      </div>

      <div className="direction-forward">
        <div className="direction-forvard-left-col">
          <ForwardArrowIcon />
          <div className="direction-forward-title">Туда</div>
        </div>

        <div
          onClick={() => setOpenDetails(!openDetails)}
          className="cursor-pointer"
        >
          {openDetails ? <CloseDetailsIcon /> : <OpenDetailsIcon />}
        </div>
      </div>
      <div className="direction-backward">
        <div className="direction-backward-left-col">
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

      <PriceRangeSlider min={1000} max={7000} step={100}/>
    </div>
  );
};

export default FilterWidget;

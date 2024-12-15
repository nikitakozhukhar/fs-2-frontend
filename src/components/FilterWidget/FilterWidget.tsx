import React, { useState } from "react";
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


const FilterWidget: React.FC = () => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(10000);

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
        {[
          {
            svg: (
              <SecondClassIcon />
            ),
            name: "Купе",
          },
          {
            svg: (
              <ThirdClassIcon />
            ),
            name: "Плацкарт",
          },
          {
            svg: (
              <ForthClassIcon />
            ),
            name: "Сидячий",
          },
          {
            svg: (
              <FirstClassIcon />
            ),
            name: "Люкс",
          },
          {
            svg: (
              <WifiIcon />
            ),
            name: "Wi-Fi",
          },
          {
            svg: (
              <ExpressIcon />
            ),
            name: "Экспресс",
          },
        ].map((option) => (
          <div className="option-element" key={option.name}>
            <div className="option-img">{option.svg}</div>
            <div className="option-name">{option.name}</div>
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
       
        <OpenDetailsIcon />
      </div>
      <div className="direction-backward">

        <div className="direction-backward-left-col">
          <BackwardArrowIcon />
          <div className="direction-forward-title">Обратно</div>
        </div>
        <OpenDetailsIcon />
      </div>
    </div>
  );
};

export default FilterWidget;

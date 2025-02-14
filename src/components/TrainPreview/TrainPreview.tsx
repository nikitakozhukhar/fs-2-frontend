import "./TrainPreview.css";
import ArrowRightIcon from "../../img/svg/tp-arrowRight.svg?react";
import OrangeTrainIcon from "../../img/svg/orangeTrain.svg?react"
import ThinArrowIcon from "../../img/svg/thinArrow.svg?react";
import ThinOrangeArrowIcon from "../../img/svg/tp-orangeRightArrow.svg?react";
import OrangeWatchIcon from "../../img/svg/tp-watch.svg?react";
import FirstClassIcon from "../../img/svg/firstClass.svg?react";
import SecondClassIcon from "../../img/svg/secondClass.svg?react";
import ThirdClassIcon from "../../img/svg/thirdClass.svg?react";
import FourthClassIcon from "../../img/svg/fourClass.svg?react";
import ConditionerIcon from "../../img/svg/conditioner.svg?react";
import WifiIcon from "../../img/svg/wifi2.svg?react";
import BeddingIcon from "../../img/svg/bedding.svg?react"
import CupIcon from "../../img/svg/cup2.svg?react";

import SecondClass from "../TrainDiagrams/SecondClass";
import { Link } from "react-router-dom";

import { useSeatsStore } from "../../store/seatsStore";
import { useSeatsQuery } from "../../utils/useSeatsQuery";


const TrainPreview = () => {

  const { seatsGlobal } = useSeatsStore();

  const {
    data: seatData,
    isLoading: seatsLoading,
    error: seatsError,
  } = useSeatsQuery(seatsGlobal);

  if (seatsLoading) return <div>Loading...</div>;
  if (seatsError) return <div>Error: {seatsError.message}</div>;

  console.log('seatData-->', seatData)

  return (
    <div className="flex flex-col mb-5 ">
      <div className="mb-16 text-3xl font-medium uppercase">Выбор мест</div>
      <div className="flex flex-col mb-10 border-2 border-[#C4C4C4]">
        <div className="flex mb-4 p-4">
          <div className="mr-2 cursor-pointer">
            <ArrowRightIcon />
          </div>
          <button className="flex items-center justify-center h-[60px] text-center rounded px-4 border-2 text-2xl font-bold">
            Выбрать другой поезд
          </button>
        </div>
        <div className="flex justify-between items-center w-[957px] h-[123px] px-4  mb-6 bg-[#F7F6F6]">
          <div className="">
            <OrangeTrainIcon />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-medium">116C</div>
            <div className="flex items-center gap-1 text-slate-400">
              Адлер{" "}
              <span className="flex items-center">
                <ThinArrowIcon />
              </span>
            </div>
            <div className="flex items-center gap-1">
              Москва{" "}
              <span className="flex items-center">
                <ThinArrowIcon />
              </span>
            </div>
            <div className="">Санкт-Петербург</div>
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-medium">00:10</div>
            <div className="">Москва</div>
            <div className="text-slate-400">Курский вокзал</div>
          </div>
          <div className="">
            <ThinOrangeArrowIcon />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-medium">09:52</div>
            <div className="">Санкт-Петербург</div>
            <div className="text-slate-400">Ладожский вокзал</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <OrangeWatchIcon />
            </div>
            <div className="flex flex-col">
              <div className="">9 часов</div>
              <div className="">42 минуты</div>
            </div>
          </div>
        </div>

        <div className="px-3 text-3xl font-bold mb-6">Количество билетов</div>

        <div className="flex justify-between items-start w-[957px] px-4 mb-6 bg-[#F7F6F6]">
          <div className="flex flex-col gap-5  px-5 py-3 w-[317px]">
            <div className="border-2 rounded-md w-[240px] h-[50px] p-3">
              Взрослых - 2
            </div>
            <div className=" text-sm">Можно добавить еще 3 пассажиров </div>
          </div>
          <div className="flex flex-col gap-5  px-5 py-3 w-[317px]">
            <div className="border-2 rounded-md w-[240px] h-[50px] p-3">
              Детских - 1
            </div>
            <div className="font-light text-sm">
              Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у
              взрослых, но дешевле в среднем на 50-65%
            </div>
          </div>
          <div className="flex flex-col gap-5  px-5 py-3 w-[317px]">
            <div className="border-2 rounded-md w-[240px] h-[50px] p-3">
              Детских "без места" - 0
            </div>
            <div className=""></div>
          </div>
        </div>

        <div className="px-3 text-3xl font-bold mb-6">Тип вагона</div>

        <div className="flex justify-between px-7 mb-5">
          <div className="flex flex-col gap-3 items-center cursor-pointer text-[#C4C4C4] hover:text-orange-400">
            <FourthClassIcon />
            <div className="">Сидячий</div>
          </div>
          <div className="flex flex-col gap-3 items-center cursor-pointer text-[#C4C4C4] hover:text-orange-400">
            <ThirdClassIcon />
            <div className="">Плацкарт</div>
          </div>
          <div className="flex flex-col gap-3 items-center cursor-pointer text-[#C4C4C4] hover:text-orange-400">
            <SecondClassIcon />
            <div className="">Купе</div>
          </div>
          <div className="flex flex-col gap-3 items-center cursor-pointer text-[#C4C4C4] hover:text-orange-400">
            <FirstClassIcon />
            <div className="">Люкс</div>
          </div>
        </div>

        <div
          className="
          flex justify-between items-center py-1 px-4 bg-[#FFA80070] bg-opacity-44"
        >
          <div className="flex gap-2 items-center">
            <span className="font-medium text-lg">Вагоны:</span>
            <div className="flex gap-1 cursor-pointer">
              <span className="px-2 py-1 bg-white text-black rounded-md shadow-sm">
                07
              </span>
              <span className="px-2 py-1 bg-white text-black rounded-md shadow-sm">
                09
              </span>
            </div>
          </div>
          <div className="flex gap-1 text-gray-700 text-sm">
            <span>Нумерация вагонов начинается с</span>
            <span className="font-semibold">головы поезда</span>
          </div>
        </div>

        <div className="flex justify-between pl-0 px-6 basis-44">
          <div className="flex flex-col items-center justify-center gap-2 px-16 bg-[#FFD98F]">
            <div className="text-5xl font-semibold">07</div>
            <div className="">вагон</div>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="font-light">
              Места <span className="font-normal">11</span>
            </div>
            <div className="font-normal">
              Верхние <span className="font-semibold">3</span>
            </div>
            <div className="font-normal">
              Нижние <span className="font-semibold">8</span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="font-light">Стоимость</div>
            <div className="font-medium">
              2 920 <span className="text-[#928F94]">&#x20bd;</span>
            </div>
            <div className="font-medium">
              3 530 <span className="text-[#928F94]">&#x20bd;</span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="font-light">Обслуживание ФПК</div>
            <div className="flex gap-3 cursor-pointer ">

              <div className="fill-white stroke-black-500 hover:fill-[#FFA800] active:text-white active:fill-[#FFA800]">
                <ConditionerIcon fill='inherit'/>
              </div>

              <div className="fill-white stroke-black-500 hover:fill-[#FFA800]">
                <WifiIcon fill='inherit'/>
              </div>

              <div className="fill-white stroke-black-500 hover:fill-[#FFA800]">
                <BeddingIcon fill='inherit'/>
              </div>
              
              <div className="fill-white stroke-white-500 hover:fill-[#FFA800]">
                <CupIcon fill='inherit'/>
              </div>
              
             
              
            </div>
          </div>
        </div>

        <div className="flex justify-end px-5 mb-5">
          <div className="w-[210px] p-4 bg-[#F3F3F3]">
            11 человек выбирают места в этом поезде
          </div>
        </div>

        <SecondClass />
      </div>

      <div className="self-end ">
        <Link to={"/passangers"}>
          <button className="py-4 px-12 border-2 border-[#FFA800] rounded-lg bg-[#FFA800] text-white text-2xl uppercase">далее</button>
        </Link>
      </div>
    </div>
  );
};

export default TrainPreview;

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import wagonStore from "../../store/wagonStore";
import { useSeatsQuery } from "../../utils/useSeatsQuery";
import { useSeatsIdStore } from "../../store/seatsIdStore";
import { useTrainDetailsStore } from "../../store/trainDetailsStore";
import WagonType from "../WagonType/WagonType";
import timeFormate from "../TimeFormate/timeFormate";

import ArrowRightIcon from "../../img/svg/tp-arrowRight.svg?react";
import OrangeTrainIcon from "../../img/svg/orangeTrain.svg?react";
import ThinArrowIcon from "../../img/svg/thinArrow.svg?react";
import ThinOrangeArrowIcon from "../../img/svg/tp-orangeRightArrow.svg?react";
import OrangeWatchIcon from "../../img/svg/tp-watch.svg?react";



const TrainPreview = () => {
  const navigate = useNavigate();

  const { seatsIdGlobal } = useSeatsIdStore();

  const {
    trainName,
    fromCityName,
    toCityName,
    fromDateTime,
    toDateTime,
    fromRailwayStation,
    toRailwayStation,
    duration,
  } = useTrainDetailsStore();

  const {
    data: seatData,
    isLoading: seatsLoading,
    error: seatsError,
  } = useSeatsQuery(seatsIdGlobal);

  const {
    setWagonData,
  } = wagonStore();

  useEffect(() => {
    if (seatData) {
      setWagonData(seatData);
    }
  }, [seatData, setWagonData]);

  if (seatsLoading) return <div>Loading...</div>;
  if (seatsError) return <div>Error: {seatsError.message}</div>;
  
  return (
    <div className="flex flex-col mb-5 ">
      <div className="mb-16 text-3xl font-medium uppercase">Выбор мест</div>
      <div className="flex flex-col mb-10 border-2 border-[#C4C4C4]">
        <div className="flex mb-4 p-4">
          <div className="mr-2 cursor-pointer">
            <ArrowRightIcon />
          </div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center h-[60px] text-center rounded px-4 border-2 text-2xl font-bold"
          >
            Выбрать другой поезд
          </button>
        </div>
        <div className="flex justify-between items-center w-[957px] h-[123px] px-4  mb-6 bg-[#F7F6F6]">
          <div className="">
            <OrangeTrainIcon />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-medium">{trainName}</div>
            <div className="flex items-center gap-1 text-slate-400">
              <span className="first-letter:uppercase">{fromCityName}</span>
              <span className="flex items-center">
                <ThinArrowIcon />
              </span>
            </div>
            <div className="flex items-center gap-1 first-letter:uppercase">
              <span className="first-letter:uppercase">{toCityName}</span>
              <span className="flex items-center">
                <ThinArrowIcon />
              </span>
            </div>
            <div className="first-letter:uppercase">{fromCityName}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-medium">
              {timeFormate(fromDateTime)}
            </div>
            <div className="first-letter:uppercase">{fromCityName}</div>
            <div className="text-slate-400">{fromRailwayStation}</div>
          </div>
          <div className="">
            <ThinOrangeArrowIcon />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-medium">{timeFormate(toDateTime)}</div>
            <div className="first-letter:uppercase">{toCityName}</div>
            <div className="text-slate-400">{toRailwayStation}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <OrangeWatchIcon />
            </div>
            <div className="flex flex-col">
              <div className="">{`${timeFormate(duration).slice(0, 2)} ч`}</div>
              <div className="">{`${timeFormate(duration).slice(
                3,
                5
              )} мин`}</div>
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
      </div>
      
      <WagonType />

      <div className="self-end ">
        <Link to={"/passangers"}>
        
          <button className="py-4 px-12 border-2 border-[#FFA800] rounded-lg bg-[#FFA800] text-white text-2xl uppercase hover:shadow-md hover:shadow-[#bebcbe] active:bg-white active:text-[#FFA800] active:border active:border-[#FFA800]">
            далее
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrainPreview;

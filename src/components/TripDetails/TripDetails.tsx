import { useState } from "react";
import orderStore from "../../store/orderStore";
import { useTrainDetailsStore } from "../../store/trainDetailsStore";
import { useSearchDirectionStore } from "../../store/searchDirectionStore";
import timeFormate from "../TimeFormate/timeFormate";

import RightArrowIcon from "../../img/svg/smallRightArrow.svg?react";
import CloseDetailsIcon from "../../img/svg/closeDetails.svg?react";
import OpenDetailsIcon from "../../img/svg/moreDetails.svg?react";
import RightOrangeArrowIcon from "../../img/svg/tp-orangeRightArrow.svg?react";
import LeftOrangeArrowIcon from "../../img/svg/leftArrowTime.svg?react";
import LeftArrowIcon from "../../img/svg/smallLeftArrow.svg?react";
import PassangerIcon from "../../img/svg/orangePassanger.svg?react";

const TripDetails = () => {
  const { startDateGlobal, endDateGlobal } = useSearchDirectionStore();

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

  const { departure } = orderStore();

  const [openDepartureDetails, setOpenDepartureDetails] =
    useState<boolean>(false);
  const [openArrivalDetails, setOpenArrivalDetails] = useState<boolean>(false);
  const [openPassangerDetails, setOpenPassangerDetails] =
    useState<boolean>(false);

  const adults = departure.seats.filter((seat) => !seat.isChild);
  const children = departure.seats.filter((seat) => seat.isChild);

  const adultPrice = adults.reduce((sum, seat) => sum + (seat.price || 0), 0);
  const childPrice = children.reduce((sum, seat) => sum + (seat.price || 0), 0);

  const totalPrice = adultPrice + childPrice;

  return (
    <div className="flex flex-col w-[360px] mb-5 bg-[#3E3C41] ">
      <div className="px-5 py-7 text-3xl text-center text-gray-50 uppercase">
        Детали поездки
      </div>
      <span className="w-[360px] h-[1px] bg-white"></span>

      <div className="flex flex-col justify-start gap-5 px-5 py-5 mb-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="">
              <RightArrowIcon />
            </div>
            <div className="text-gray-50 text-2xl">Туда</div>
            <div className="text-gray-50 text-xl self-end">
              {startDateGlobal}
            </div>
          </div>
          <div
            onClick={() => setOpenDepartureDetails(!openDepartureDetails)}
            className="self-end cursor-pointer"
          >
            {openDepartureDetails ? (
              <CloseDetailsIcon className="fill-transparent stroke-white text-white hover:stroke-[#FFA800] hover:text-[#FFA800]" />
            ) : (
              <OpenDetailsIcon className="fill-transparent stroke-white text-white hover:stroke-[#FFA800] hover:text-[#FFA800]" />
            )}
          </div>
        </div>

        {openDepartureDetails && (
          <div className="">
            <div className="flex flex-col justify-between gap-5 text-xl text-gray-50">
              <div className="flex justify-between">
                <div className="font-normal text-[#E5E5E5]">№ Поезда</div>
                <div className="font-semibold">{trainName}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-normal text-[#E5E5E5]">Название</div>
                <div className="flex flex-col">
                  <div className="self-end first-letter:uppercase">
                    {fromCityName}
                  </div>
                  <div className="first-letter:uppercase">{toCityName}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="text-2xl text-gray-50 font-medium">
                    {timeFormate(fromDateTime)}
                  </div>
                  <div className="text-[#928F94]">{startDateGlobal}</div>
                </div>

                <div className="flex flex-col">
                  <div className="text-[#E5E5E5]">{timeFormate(duration)}</div>
                  <div className="">
                    <RightOrangeArrowIcon />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-2xl text-gray-50 font-medium self-end">
                    {timeFormate(toDateTime)}
                  </div>
                  <div className="text-[#928F94]">{toDateTime}</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="text-gray-50 first-letter:uppercase">
                    {fromCityName}
                  </div>
                  <div className="text-[#928F94] first-letter:uppercase">
                    {fromRailwayStation}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="self-end text-gray-50 first-letter:uppercase">
                    {toCityName}
                  </div>
                  <div className="self-end text-[#928F94] first-letter:uppercase">
                    {toRailwayStation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <span className="w-[360px] h-[1px] bg-white"></span>
      <div className="flex flex-col justify-start gap-5 px-5 py-5 mb-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="">
              <LeftArrowIcon />
            </div>
            <div className="text-gray-50 text-2xl">Обратно</div>
            <div className="text-gray-50 text-xl self-end">{endDateGlobal}</div>
          </div>
          <div
            onClick={() => setOpenArrivalDetails(!openArrivalDetails)}
            className="self-end cursor-pointer"
          >
            {openArrivalDetails ? (
              <CloseDetailsIcon className="fill-transparent stroke-white text-white hover:stroke-[#FFA800] hover:text-[#FFA800]" />
            ) : (
              <OpenDetailsIcon className="fill-transparent stroke-white text-white hover:stroke-[#FFA800] hover:text-[#FFA800]" />
            )}
          </div>
        </div>

        {openArrivalDetails && (
          <div className="">
            <div className="flex flex-col justify-between gap-5 text-xl text-gray-50">
              <div className="flex justify-between">
                <div className="font-light text-[#E5E5E5]">№ Поезда</div>
                <div className="font-semibold">{trainName}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-light text-[#E5E5E5]">Название</div>
                <div className="flex flex-col">
                  <div className="self-end first-letter:uppercase">
                    {toCityName}
                  </div>
                  <div className="self-end first-letter:uppercase">
                    {fromCityName}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="text-2xl text-gray-50 font-medium">
                    {timeFormate(toDateTime)}
                  </div>
                  <div className="text-[#928F94]">{endDateGlobal}</div>
                </div>

                <div className="flex flex-col">
                  <div className="text-[#E5E5E5]">{timeFormate(duration)}</div>
                  <div className="">
                    <LeftOrangeArrowIcon />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-2xl text-gray-50 font-medium self-end">
                    {timeFormate(fromDateTime)}
                  </div>
                  <div className="text-[#928F94]">{startDateGlobal}</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="text-gray-50 first-letter:uppercase">
                    {fromCityName}
                  </div>
                  <div className="text-[#928F94] first-letter:uppercase">
                    {fromRailwayStation}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="self-end text-gray-50 first-letter:uppercase">
                    {toCityName}
                  </div>
                  <div className="self-end text-[#928F94] first-letter:uppercase">
                    {toRailwayStation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <span className="w-[360px] h-[1px] bg-white"></span>

      <div className="flex justify-between px-5 py-5">
        <div className="flex gap-3">
          <PassangerIcon />
          <div className="text-2xl font-medium text-gray-50">Пассажиры</div>
        </div>
        <div
          onClick={() => setOpenPassangerDetails(!openPassangerDetails)}
          className="cursor-pointer"
        >
          {openPassangerDetails ? (
            <CloseDetailsIcon className="fill-transparent stroke-white text-white hover:stroke-[#FFA800] hover:text-[#FFA800]" />
          ) : (
            <OpenDetailsIcon className="fill-transparent stroke-white text-white hover:stroke-[#FFA800] hover:text-[#FFA800]" />
          )}
        </div>
      </div>

      {openPassangerDetails && (
        <div className="flex flex-col gap-2 px-5 mb-5">
          <div className="flex justify-between">
            <div className="text-[#928F94]">{adults.length} взрослых</div>
            <div className="text-gray-50 text-xl font-semibold">
              {adultPrice} <span className="text-gray-500">₽</span>
            </div>
          </div>
          {children.length > 0 && (
            <div className="flex justify-between">
              <div className="text-[#928F94]">{children?.length} Ребенок</div>
              <div className="text-gray-50 text-xl font-semibold">
                {childPrice} <span className="text-gray-500">₽</span>
              </div>
            </div>
          )}
        </div>
      )}

      <span className="w-[360px] h-[1px] bg-white"></span>

      <div className="flex justify-between px-5 py-5">
        <div className="text-2xl text-gray-50 font-semibold uppercase">
          Итог
        </div>
        <div className="text-3xl text-[#FFA800] font-semibold">
          {totalPrice} <span className="text-gray-400">₽</span>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;

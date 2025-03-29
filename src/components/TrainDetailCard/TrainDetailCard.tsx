import TrainImageIcon from "../../img/svg/trainImage.svg?react";
import ThinArrowIcon from "../../img/svg/thinArrow.svg?react";
import RightOrangeArrowIcon from "../../img/svg/rightArrowTime.svg?react";
import LeftOrangeArrowIcon from "../../img/svg/leftArrowTime.svg?react";
import WiFiIcon from "../../img/svg/wifi.svg?react";
import CupIcon from "../../img/svg/cup.svg?react";
import ExpressIcon from "../../img/svg/express.svg?react";
import Currency from "../../img/svg/currency.svg?react";
import { Link } from "react-router-dom";
import { IRoute } from "../../utils/api/fetchRoutes";
import timeFormate from "../TimeFormate/timeFormate";
import { useTrainDetailsStore } from "../../store/trainDetailsStore";
import { useSeatsIdStore } from "../../store/seatsIdStore";

import { choosenRoute, IRouteInfo } from "../../../src/store/choosenRoute";

interface TrainDetailCardProps {
  routesData?: IRoute;
  routeInfo?: IRouteInfo[];
}

const TrainDetailCard: React.FC<TrainDetailCardProps> = ({ routesData }) => {
  const { setSeatsIdGlobal } = useSeatsIdStore();
  const { setTrainDetails } = useTrainDetailsStore();
  const { setRouteInfo } = choosenRoute();

  const handleSelectSeats = (item: IRoute["items"][0]) => {
    setSeatsIdGlobal(item.departure._id);
    setTrainDetails("trainName", item.departure.train.name);
    setTrainDetails("fromCityName", item.departure.from.city.name);
    setTrainDetails("toCityName", item.departure.to.city.name);
    setTrainDetails("fromDateTime", item.departure.from.datetime);
    setTrainDetails("fromRailwayStation", item.departure.from.railway_station_name);
    setTrainDetails("toDateTime", item.departure.to.datetime);
    setTrainDetails("toRailwayStation", item.departure.to.railway_station_name);
    setTrainDetails("duration", item.departure.duration);
    setRouteInfo([item])
  };
  
  const renderCarriageInfo = (type: string, seats: number | undefined, price: number | undefined) => {
    if (!seats) return null;

    return (
      <div className="flex justify-between items-baseline gap-4">
        <div className="carriage-type">{type}</div>
        <div className="text-[#FFA800]">{seats}</div>
        <div className="flex items-center gap-1">
          <span className="text-gray-400">от</span>
          <span className="text-2xl font-medium">{price}</span>
          <Currency />
        </div>
      </div>
    );
  };

  const renderAmenities = (item: IRoute["items"][0]) => (
    <div className="flex self-end gap-5">
      {item.departure.have_wifi && <WiFiIcon className="text-[#E5E5E5]" />}
      {item.departure.is_express && <ExpressIcon className="text-[#E5E5E5]" />}
      {item.departure.have_air_conditioning && <CupIcon className="text-[#E5E5E5]" />}
    </div>
  );

  return (
    <div className="flex flex-col gap-10">
      {routesData?.items?.map((item) => (
        <div key={item.departure.train._id} className="flex w-[960px] h-[353px] border gap-5">
          <div className="flex flex-col items-center gap-3 bg-[#E4E0E9] justify-center basis-48">
            <TrainImageIcon className="text-white" />
            <div className="font-bold text-2xl">{item.departure.train.name}</div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-gray-400 first-letter:uppercase">
                {item.departure.from.city.name}
                <ThinArrowIcon className="text-gray" />
              </div>
              <div className="first-letter:uppercase">{item.departure.to.city.name}</div>
            </div>
          </div>

          <div className="flex flex-col justify-between w-[480px] py-16 px-10">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="text-2xl font-medium">{timeFormate(item.departure.from.datetime)}</div>
                <div className="first-letter:uppercase">{item.departure.from.city.name}</div>
                <div className="text-gray-400">{item.departure.from.railway_station_name}</div>
              </div>

              <div className="flex flex-col">
                <div className="text-gray-400">{timeFormate(item.departure.duration)}</div>
                <RightOrangeArrowIcon className="text-[#FFA800]" />
              </div>

              <div className="flex flex-col">
                <div className="text-2xl font-medium">{timeFormate(item.departure.to.datetime)}</div>
                <div className="first-letter:uppercase">{item.departure.to.city.name}</div>
                <div className="text-gray-400">{item.departure.to.railway_station_name}</div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="text-2xl font-medium">{timeFormate(item.departure.from.datetime)}</div>
                <div className="first-letter:uppercase">{item.departure.from.city.name}</div>
                <div className="text-gray-400">{item.departure.from.railway_station_name}</div>
              </div>

              <div className="flex flex-col">
                <div className="text-gray-400">{timeFormate(item.departure.duration)}</div>
                <LeftOrangeArrowIcon className="text-[#FFA800]" />
              </div>

              <div className="flex flex-col">
                <div className="text-2xl font-medium">{timeFormate(item.departure.to.datetime)}</div>
                <div className="first-letter:uppercase">{item.departure.to.city.name}</div>
                <div className="text-gray-400">{item.departure.to.railway_station_name}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 w-72 px-5 pt-10 pb-2">
            <div className="flex flex-col grow max-h-60">
              {renderCarriageInfo("Люкс", item.available_seats_info.first, item.departure.price_info.first?.top_price)}
              {renderCarriageInfo("Купе", item.available_seats_info.second, item.departure.price_info.second?.top_price)}
              {renderCarriageInfo("Плацкарт", item.available_seats_info.third, item.departure.price_info.third?.side_price)}
              {renderCarriageInfo("Сидячий", item.available_seats_info.fourth, item.departure.price_info.fourth?.top_price)}
            </div>

            {renderAmenities(item)}

            <Link to="/place" className="self-end">
              <button
                className="py-1 px-2 bg-[#FFA800] rounded-md text-white cursor-pointer text-lg hover:shadow-md hover:shadow-[#bebcbe] active:bg-white active:text-[#FFA800] active:border active:border-[#FFA800]"
                onClick={() => handleSelectSeats(item)}
              >
                Выбрать места
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainDetailCard;
import TrainImageIcon from "../../img/svg/trainImage.svg?react";
import ThinArrowIcon from "../../img/svg/thinArrow.svg?react";
import RightOrangeArrowIcon from "../../img/svg/rightArrowTime.svg?react";
import LeftOrangeArrowIcon from "../../img/svg/leftArrowTime.svg?react";
import WiFiIcon from "../../img/svg/wifi.svg?react";
import CupIcon from "../../img/svg/cup.svg?react";
import ExpressIcon from "../../img/svg/express.svg?react";
import Currency from "../../img/svg/currency.svg?react"
import { Link } from "react-router-dom";

//доработка запроса свободных мест
import { useSeatsQuery } from "../../utils/useSeatsQuery";
import { useSeatsStore } from '../../store/seatsStore'


const TrainDetailCard: React.FC = ({routesData}) => {

  const { setSeatsGlobal } = useSeatsStore();

  // console.log(dateFilter)
  // const CarriageInfo = ({ type, availableSeats, price }: { type: string; availableSeats: number; price: number }) => {
  //   if (!availableSeats) return null;
  
  //   return (
  //     <div className="flex justify-between items-baseline gap-4">
  //       <div className="carriage-type">{type}</div>
  //       <div className="text-[#FFA800]">{availableSeats}</div>
  //       <div className="flex items-center gap-1">
  //         <span className="text-gray-400">от</span>
  //         <span className="text-2xl font-medium">{price}</span>
  //         <Currency />
  //       </div>
  //     </div>
  //   );
  // };

  // const Amenities = ({ haveWifi, isExpress, haveAC }: { haveWifi: boolean; isExpress: boolean; haveAC: boolean }) => (
  //   <div className="flex self-end gap-5">
  //     {haveWifi && <WiFiIcon className="text-[#E5E5E5]" />}
  //     {isExpress && <ExpressIcon className="text-[#E5E5E5]" />}
  //     {haveAC && <CupIcon className="text-[#E5E5E5]" />}
  //   </div>
  // );

  //  const carriages = [
  //   { type: 'Люкс', availableSeats: item.available_seats_info.first, price: item.departure.price_info.first?.bottom_price },
  //   { type: 'Купе', availableSeats: item.available_seats_info.second, price: item.departure.price_info.second?.bottom_price },
  //   { type: 'Плацкарт', availableSeats: item.available_seats_info.third, price: item.departure.price_info.third?.bottom_price },
  //   { type: 'Сидячий', availableSeats: item.available_seats_info.fourth, price: item.departure.price_info.fourth?.bottom_price },
  // ];

  return (
    <div className="flex flex-col gap-10 ">
      {routesData.items?.map((item) => {
        // console.log(item);
        return (
          <div
            key={item.departure.train._id}
            className="flex w-[960px] h-[353px] border gap-5">
            <div className="flex flex-col items-center gap-3 bg-[#E4E0E9] justify-center basis-48">
              <div className="text-white">
                <TrainImageIcon />
              </div>
              <div className="font-bold text-2xl">
                {item.departure.train.name}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-gray-400 first-letter:uppercase">
                  {item.departure.from.city.name}
                  <span className="text-gray">
                    <ThinArrowIcon />
                  </span>
                </div>
                <div className="first-letter:uppercase">{item.departure.to.city.name}</div>
              </div>
            </div>

            <div className="flex flex-col justify-between w-[480px] py-16 px-10">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  {/* <DateFormate time={item.departure.from.datetime}/> */}
                  <div className="text-2xl font-medium">00:10</div>
                  <div className="first-letter:uppercase">{item.departure.from.city.name}</div>
                  <div className="text-gray-400">
                    {item.departure.from.railway_station_name}
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-gray-400">9:42</div>
                  <div className="direct-arrow-right text-[#FFA800]">
                    <RightOrangeArrowIcon />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-2xl font-medium">9:52</div>
                  <div className="first-letter:uppercase">{item.departure.to.city.name}</div>
                  <div className="text-gray-400">
                    {item.departure.to.railway_station_name}
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="text-2xl font-medium">00:10</div>
                  <div className="first-letter:uppercase">
                    {item.departure.from.city.name}
                  </div>
                  <div className="text-gray-400">
                    {item.departure.from.railway_station_name}
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-gray-400">9:42</div>
                  <div className="text-[#FFA800]">
                    <LeftOrangeArrowIcon />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-2xl font-medium">9:52</div>
                  <div className="first-letter:uppercase">{item.departure.to.city.name}</div>
                  <div className="text-gray-400">
                    {item.departure.to.railway_station_name}
                  </div>
                </div>
              </div>
            </div>

            

            <div className="flex flex-col justify-between gap-4 w-72 px-5 pt-10 pb-2">
              {(item.available_seats_info ||
                item.departure.price_info.first ||
                item.departure.price_info.second ||
                item.departure.price_info.third ||
                item.departure.price_info.fourth) && (
                <div className="flex flex-col grow max-h-60">
                  {item.available_seats_info.first && (
                    <div className="flex justify-between items-baseline gap-4">
                      <div className="carriage-type">Люкс</div>
                      <div className="text-[#FFA800]">
                        {item.available_seats_info.first}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">от</span>
                        <span className="text-2xl font-medium">
                          {item.departure.price_info.first.bottom_price}
                        </span>
                        <Currency />
                      </div>
                    </div>
                  )}
                  {item.available_seats_info.second && (
                    <div className="flex justify-between items-baseline gap-4">
                      <div className="carriage-type">Купе</div>
                      <div className="text-[#FFA800]">
                        {item.available_seats_info.second}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">от</span>
                        <span className="text-2xl font-medium">
                          {item.departure.price_info.second.bottom_price}
                        </span>
                        <Currency />
                      </div>
                    </div>
                  )}
                  {item.available_seats_info.third && (
                    <div className="flex justify-between items-baseline gap-4">
                      <div className="carriage-type">Плацкарт</div>
                      <div className="text-[#FFA800]">
                        {item.available_seats_info.third}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">от</span>
                        <span className="text-2xl font-medium">
                          {item.departure.price_info.third.bottom_price}
                        </span>
                        <Currency />
                      </div>
                    </div>
                  )}
                  {item.available_seats_info.fourth && (
                    <div className="flex justify-between items-baseline gap-4">
                      <div className="carriage-type">Сидячий</div>
                      <div className="text-[#FFA800]">
                        {item.available_seats_info.fourth}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">от</span>
                        <span className="text-2xl font-medium">
                          {item.departure.price_info.fourth.bottom_price}
                        </span>
                        <Currency />
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="flex self-end gap-5">
                {(item.departure.have_wifi ||
                  item.departure.is_express ||
                  item.departure.have_air_conditioning) && (
                  <>
                    {item.departure.have_wifi && (
                      <div className="text-[#E5E5E5]">
                        <WiFiIcon />
                      </div>
                    )}
                    {item.departure.is_express && (
                      <div className="text-[#E5E5E5]">
                        <ExpressIcon />
                      </div>
                    )}
                    {item.departure.have_air_conditioning && (
                      <div className="text-[#E5E5E5]">
                        <CupIcon />
                      </div>
                    )}
                  </>
                )}
              </div>
              <Link to={"/place"} className="self-end">
                <button className="py-1 px-2 bg-[#FFA800] rounded-md text-white cursor-pointer text-lg"
                onClick={() => setSeatsGlobal(item.departure.train._id) }>
                  Выбрать места
                  
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrainDetailCard;

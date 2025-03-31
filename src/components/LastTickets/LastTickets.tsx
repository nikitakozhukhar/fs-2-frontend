import "./LastTickets.css";
import { useLastRoutesQuery } from "../../utils/useLastRoutesQuery";

import LastTicket from "../LastTicket/LastTicket";

// Типы для вложенных объектов
interface IPriceClass {
  price: number;
  top_price: number;
  bottom_price: number;
  side_price: number;
  linens_price: number;
  wifi_price: number;
}

interface ISeatsClass {
  first: number;
  second: number;
  third: number;
  fourth: number;
}

interface ICity {
  _id: string;
  name: string;
}

interface ITrain {
  _id: string;
  name: string;
}

interface IDepartureArrival {
  _id: string;
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  train: ITrain;
  from: {
    railway_station_name: string;
    city: ICity;
    datetime: number;
  };
  to: {
    railway_station_name: string;
    city: ICity;
    datetime: number;
  };
  min_price: number;
  duration: number;
  price_info: {
    first: IPriceClass;
    second: IPriceClass;
    third: IPriceClass;
    fourth: IPriceClass;
  };
  seats_info: ISeatsClass;
}

// Основной интерфейс для элемента массива
export interface ILastRoute {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  arrival: IDepartureArrival;
  departure: IDepartureArrival;
  total_avaliable_seats: number;
}

const LastTickets = () => {
  const {
    data: lastRoutes,
    isLoading: lastRoutesLoading,
    error: lastRoutesError,
  } = useLastRoutesQuery();

  if (lastRoutesLoading) {
    return <div>Loading...</div>;
  }

  if (lastRoutesError) {
    console.error("Error:", lastRoutesError);
    return <div>Error loading data</div>;
  }

  return (
    <div className="flex flex-col w-[360px] gap-5 mb-12">
      <div className="text-3xl font-medium uppercase">Последние билеты</div>
      <div className="flex flex-col gap-5">
        {lastRoutes.map((lastRoute: ILastRoute, index: number) => (
          <LastTicket key={index} lastRoute={lastRoute} />
        ))}
      </div>
    </div>
  );
};

export default LastTickets;

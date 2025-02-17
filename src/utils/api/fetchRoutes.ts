import axiosInstance from "../axiosInstance/axiosInstance";

interface ITrain {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  train: {
    name: string;
    _id: string;
  };
  from: {
    datetime: number;
    railway_station_name:string;
    city: {
      name: string;
      _id: string;
    };
  }
  to:{
    datetime: number;
    railway_station_name:string;
    city: {
      name: string;
      _id: string;
    };
  }
  duration: number;
  price_info: IPriceInfo;
  seats_info?: number;
  _id: string;
}

interface ISeatsInfo {
  first?: number;
  second?: number;
  third?: number;
  fourth?: number;
}

interface IPriceInfo {
  first?: {
    bottom_price?: number;
    side_price?: number;
    top_price?: number;
  };
  second?: {
    bottom_price?: number;
    side_price?: number;
    top_price?: number;
  };
  third?: {
    bottom_price?: number;
    side_price?: number;
    top_price?: number;
  };
  fourth?: {
    bottom_price?: number;
    side_price?: number;
    top_price?: number;
  };
}

export interface IRoute {
  items: [
    {
      have_first_class: boolean;
      have_second_class: boolean;
      have_third_class: boolean;
      have_fourth_class: boolean;
      have_wifi: boolean;
      have_air_conditioning: boolean;
      is_express: boolean;
      min_price: number;
      arrival?: object;
      departure: ITrain;
      available_seats_info: ISeatsInfo;
      total_avaliable_seats: number;
    }
  ],
  total_count: number;
  
}

export const fetchRoutes = async (
  from: string, 
  to: string, 
  limits: number = 5, 
  offset: number = 5,
  sort: string = '',
): Promise<IRoute> => {
  const { data } = await axiosInstance.get<IRoute>(`routes?from_city_id=${from}&to_city_id=${to}&limit=${limits}&offset=${offset}&sort=${sort}`);
  
  return data
}
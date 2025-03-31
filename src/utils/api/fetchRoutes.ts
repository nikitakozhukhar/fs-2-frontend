import axiosInstance from "../axiosInstance/axiosInstance";

export interface ITrain {
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
    railway_station_name: string;
    city: {
      name: string;
      _id: string;
    };
  }
  to: {
    datetime: number;
    railway_station_name: string;
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

export interface ISeatsInfo {
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
  fromCityId: string,
  toCityId: string,
  limits: number = 5,
  offset: number = 5,
  sort: string = '',
): Promise<IRoute> => {
  const { data } = await axiosInstance.get<IRoute>(`routes`, {
    params: {
      from_city_id: fromCityId,
      to_city_id: toCityId,
      limit: limits,
      offset: offset,
      sort: sort
    }
  });

  return data
}
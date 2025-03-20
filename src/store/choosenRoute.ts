import { create } from 'zustand';
import { ISeatsInfo, ITrain } from '../utils/api/fetchRoutes';

export interface IRouteInfo {
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

interface IChoosenRoute {
  routeInfo: IRouteInfo[];
  setRouteInfo: (routeInfo: IRouteInfo[]) => void;
}

export const choosenRoute = create<IChoosenRoute>((set) => ({
  routeInfo: [],
  setRouteInfo: (routeInfo) => set({routeInfo})
  }
))
import axiosInstance from "../axiosInstance/axiosInstance";

interface IRoute {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  arrival: object;
  departure: object;
  total_avaliable_seats: number;
}

export const fetchRoutes = async (from: string, to: string): Promise<IRoute> => {
  const { data } = await axiosInstance.get<IRoute>(`routes?${from}&to${to}`);

  return data
}
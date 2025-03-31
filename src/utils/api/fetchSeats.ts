import axiosInstance from "../axiosInstance/axiosInstance";

interface ISeatInfo {
  index: number,
  available: boolean,
}

interface ICoach {
  available_seats: number,
  bottom_price: number,
  class_type: string,
  have_air_conditioning: boolean,
  have_wifi: boolean,
  is_linens_included: boolean,
  linens_price: number,
  name: string,
  price: number,
  side_price: number,
  top_price: number,
  train: string,
  wifi_price: number,
  _id: string,
}
export interface ISeats {
  _id: string,
  name: string,
  classType: string,
  have_first_class: boolean,
  have_second_class: boolean,
  have_third_class: boolean,
  have_fourth_class: boolean,
  have_wifi: boolean,
  have_air_conditioning: boolean,
  have_express: boolean,
  price: number,
  top_price: number
  bottom_price: number
  side_price: number
  linens_price: number
  wifi_price: number
  avaliable_seats: number
  is_linens_included: boolean,
  seats: ISeatInfo[],
  coach: ICoach,
}

export const fetchSeats = async (query: string): Promise<ISeats[]> => {
  if (!query) {
    console.error("Query is empty");
    return [];
  }

  try {
    const { data } = await axiosInstance.get<ISeats[]>(`routes/${query}/seats`);
    return data;
  } catch (error) {
    console.error("Error fetching seats:", error);
    throw error;
  }
};
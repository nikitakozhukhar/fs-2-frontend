
import axiosInstance from "../axiosInstance/axiosInstance";

export interface ISeats {
  _id: string,
  name: string,
  classType: string,
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
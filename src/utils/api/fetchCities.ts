
import axiosInstance from "../axiosInstance/axiosInstance";

export interface ICity {
  _id: string;
  name: string;
}

export const fetchCities = async (query: string): Promise<ICity[]> => {
  if (!query) return [];

  const { data } = await axiosInstance.get<ICity[]>(`routes/cities?name=${query}`);
  
  return data;
};
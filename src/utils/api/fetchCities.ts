
import axiosInstance from "../axiosInstance/axiosInstance";

interface ICity {
  _id: number;
  name: string;
}

export const fetchCities = async (query: string): Promise<ICity[]> => {
  if (!query) return [];

  const { data } = await axiosInstance.get<ICity[]>(`routes/cities?name=${query}`);

  return data;
};
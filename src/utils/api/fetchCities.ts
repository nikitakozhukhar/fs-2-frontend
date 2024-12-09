
import axiosInstance from "../axiosInstance/axiosInstance";

interface ICity {
  id: number;
  name: string;
}

export const fetchCities = async (query: string): Promise<ICity[]> => {
  if (!query) return [];

  const { data } = await axiosInstance.get<ICity[]>(`routes/cities?name=${query}`);

  return data;
};
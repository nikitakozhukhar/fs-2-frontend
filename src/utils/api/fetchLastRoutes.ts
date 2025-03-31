import axiosInstance from "../axiosInstance/axiosInstance";

export const fetchLastRoutes = async () => {
  const { data } = await axiosInstance.get(`routes/last`);

  return data
}
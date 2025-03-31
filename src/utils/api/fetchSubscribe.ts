import axiosInstance from "../axiosInstance/axiosInstance";


export const fetchSubscribe = async (email: string) => {
  const { data } = await axiosInstance.get(`/subscribe?email=${email}`);

  return data
}
import axiosInstance from "../axiosInstance/axiosInstance";
import { User, Departure } from "../../store/orderStore"

export interface IOrder {
  user: User;
  departure: Departure;
}

export const fetchOrder = async (data: IOrder) => {
  if (!data) return [];

  const orderNumber = await axiosInstance.post(`/order`, {
    data
  })
    .then(response => console.log(response))

  return orderNumber;
};

export default fetchOrder
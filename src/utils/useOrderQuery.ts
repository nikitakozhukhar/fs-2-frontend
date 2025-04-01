import { useMutation } from "@tanstack/react-query";
import { fetchOrder } from "./api/fetchOrder";
import { User, Departure } from "../store/orderStore"

export interface IOrderData {
  user: User;
  departure: Departure;
}

export const useOrderData = () => {
  return useMutation({
    mutationKey: ['createOrder'],
    mutationFn: (data: IOrderData) => fetchOrder(data),
    onSuccess: (data) => {
      console.log('Mutation success:', data);
    },
    onError: (error) => {
      console.error('Mutation error:', error);
    }
  });
};

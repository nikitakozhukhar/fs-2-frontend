import axiosInstance from "../axiosInstance/axiosInstance";
import { IOrderData } from "../../utils/useOrderQuery"

// export interface IOrder {
//   user: User;
//   departure: Departure;
// }
export const fetchOrder = async (data: IOrderData) => {

  if (!data) {
    console.error("Data is empty");
    return [];
  }

  try {
    const orderNumber = await axiosInstance.post<IOrderData>(`order`, {
      data
    });
    return orderNumber;
  } catch (error) {
    console.error("Error fetching seats:", error);
    throw error;
  }

  // const orderNumber = await axiosInstance.post(`/order`, {
  //   data
  // })
  //   .then(response => console.log(response))

};

export default fetchOrder
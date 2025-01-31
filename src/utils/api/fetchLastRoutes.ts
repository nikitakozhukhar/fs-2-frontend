import axiosInstance from "../axiosInstance/axiosInstance";

interface IlastTRoute {
 
}


export const fetchLastRoutes = async () => {
  const { data } = await axiosInstance.get(`routes/last`);
  
  return data
}
import axios from "axios";

// const BASE_URL = process.env.VITE_APP_API_BASE_URL

const axiosInstance = axios.create({
  baseURL: 'https://students.netoservices.ru/fe-diplom/',
});

export default axiosInstance;
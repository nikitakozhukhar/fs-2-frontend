import axios, { AxiosProgressEvent } from "axios";
import { progressStore } from "../../store/progressStore";

const axiosInstance = axios.create({
  baseURL: 'https://students.netoservices.ru/fe-diplom/',
});

axiosInstance.interceptors.request.use((config) => {
  const { setProgress } = progressStore.getState();
  
  setProgress(10);

  if (config.onDownloadProgress) {
    const originalOnDownloadProgress = config.onDownloadProgress;
    config.onDownloadProgress = (progressEvent: AxiosProgressEvent) => {
      if (progressEvent.total) {
        const percent = Math.round((progressEvent.loaded * 90) / progressEvent.total);
        setProgress(10 + percent);
      }
      originalOnDownloadProgress?.(progressEvent);
    };
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    const { setProgress, resetProgress } = progressStore.getState();
    setProgress(100);
    setTimeout(() => {
      resetProgress();
    }, 500);
    return response;
  },
  (error) => {
    const { resetProgress } = progressStore.getState();
    resetProgress();
    return Promise.reject(error);
  }
);

export default axiosInstance;
import { create } from 'zustand'

interface ITrainDetails {

  trainName: string;
  fromCityName: string;
  toCityName: string;
  fromDateTime: number;
  toDateTime: number;
  fromRailwayStation: string;
  toRailwayStation: string;
  duration: number;

  setTrainDetails: <K extends keyof ITrainDetails>(key: K, value: ITrainDetails[K]) => void;
}

export const useTrainDetailsStore = create<ITrainDetails>((set) => ({

  trainName: '',
  fromCityName: '',
  toCityName: '',
  fromDateTime: 0,
  toDateTime: 0,
  fromRailwayStation: '',
  toRailwayStation: '',
  duration: 0,

  setTrainDetails: (key, value) => set((state) => ({ ...state, [key]: value })),
}))
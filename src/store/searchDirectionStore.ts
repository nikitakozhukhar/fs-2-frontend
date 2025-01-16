import { create } from 'zustand'
import { ICity } from '../utils/api/fetchCities';

interface ISearchDirection {
  fromCityGlobal:  { name: string; _id: string }; //string; 
  toCityGlobal: { name: string; _id: string }; //string; ;
  startDate: string;
  endDate: string;
  setFromCityGlobal: (query: { name: string; _id: string } ) => void; //(query: [] )
  setToCityGlobal: (query: { name: string; _id: string } ) => void;
  setStartDate: (query: string) => void;
  setEndDate: (query: string) => void;
}

export const useSearchDirectionStore = create<ISearchDirection>((set) => ({
  fromCityGlobal: {name: '', _id: '' }, //'', //[]
  toCityGlobal: {name: '', _id: '' }, //'', //[]
  startDate: '',
  endDate: '',
  setFromCityGlobal: (fromCityGlobal) => set(state => ({ fromCityGlobal: {...state.fromCityGlobal, ...fromCityGlobal }})),
  setToCityGlobal: (toCityGlobal) => set(state => ({ toCityGlobal: {...state.toCityGlobal, ...toCityGlobal }})),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}))
import { create } from 'zustand'
import { ICity } from '../utils/api/fetchCities';

interface ISearchDirection {
  fromCityGlobal:  { name: string; _id: string }; //string; 
  toCityGlobal: { name: string; _id: string }; //string; ;
  startDateGlobal: string;
  endDateGlobal: string;
  setFromCityGlobal: (query: { name: string; _id: string } ) => void; //(query: [] )
  setToCityGlobal: (query: { name: string; _id: string } ) => void;
  setStartDateGlobal: (query: string) => void;
  setEndDateGlobal: (query: string) => void;
}

export const useSearchDirectionStore = create<ISearchDirection>((set) => ({
  fromCityGlobal: {name: '', _id: '' }, //'', //[]
  toCityGlobal: {name: '', _id: '' }, //'', //[]
  startDateGlobal: '',
  endDateGlobal: '',
  setFromCityGlobal: (fromCityGlobal) => set(state => ({ fromCityGlobal: {...state.fromCityGlobal, ...fromCityGlobal }})),
  setToCityGlobal: (toCityGlobal) => set(state => ({ toCityGlobal: {...state.toCityGlobal, ...toCityGlobal }})),
  setStartDateGlobal: (startDateGlobal) => set({ startDateGlobal }),
  setEndDateGlobal: (endDateGlobal) => set({ endDateGlobal }),
}))
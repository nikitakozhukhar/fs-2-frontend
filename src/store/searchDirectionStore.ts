import { create } from 'zustand'

interface ISearchDirection {
  fromCity: string;
  toCity: string;
  startDate: string;
  endDate: string;
  setFromCity: (query: string) => void;
  setToCity: (query: string) => void;
  setStartDate: (query: string) => void;
  setEndDate: (query: string) => void;
}

export const useSearchDirectionStore = create<ISearchDirection>((set) => ({
  fromCity: '',
  toCity: '',
  startDate: '',
  endDate: '',
  setFromCity: (fromCity) => set({ fromCity }),
  setToCity: (toCity) => set({ toCity }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}))
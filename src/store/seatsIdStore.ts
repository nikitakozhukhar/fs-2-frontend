import { create } from 'zustand'

interface ISeats {
 seatsIdGlobal: any; 
 setSeatsIdGlobal: (query: string) => void
}

export const useSeatsIdStore = create<ISeats>((set) => ({
  seatsIdGlobal: [],
  setSeatsIdGlobal: (seatsIdGlobal: any) => set({ seatsIdGlobal }),
}))
import { create } from 'zustand'

interface ISeats {
 seatsIdGlobal: string; 
 setSeatsIdGlobal: (query: string) => void
}

export const useSeatsIdStore = create<ISeats>((set) => ({
  seatsIdGlobal: '',
  setSeatsIdGlobal: (seatsIdGlobal: any) => set({ seatsIdGlobal }),
}))
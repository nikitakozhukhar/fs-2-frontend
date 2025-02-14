import { create } from 'zustand'

interface ISeats {
 seatsGlobal: any; 
 setSeatsGlobal: (query: string) => void
}

export const useSeatsStore = create<ISeats>((set) => ({
  seatsGlobal: [],
  setSeatsGlobal: (seatsGlobal: any) => set({ seatsGlobal }),
}))
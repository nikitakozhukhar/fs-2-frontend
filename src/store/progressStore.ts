import { create } from 'zustand';

interface IProgressStore {
  progress: number;
  setProgress: (value: number) => void;
  resetProgress: () => void;
}

export const progressStore = create<IProgressStore>((set) => ({
  progress: 0,
  setProgress: (value) => set({ progress: value }),
  resetProgress: () => set({ progress: 0 }),
}));
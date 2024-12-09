import { create } from 'zustand'

interface ISearchState {
  query: string;
  setQuery: (query: string) => void;
}

export const useSearchStore = create<ISearchState>((set) => ({
  query: '',
  setQuery: (query) => set({ query })
}))
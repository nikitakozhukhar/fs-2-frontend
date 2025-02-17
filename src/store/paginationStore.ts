import { create } from 'zustand';

interface PaginationState {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const usePaginationStore = create<PaginationState>((set) => ({
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default usePaginationStore;
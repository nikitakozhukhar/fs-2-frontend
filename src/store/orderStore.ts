import { create } from 'zustand';

interface PersonInfo {
  isAdult: boolean;
  firstName: string;
  lastName: string;
  patronymic: string;
  gender: boolean; // true для мужского пола, false для женского
  birthday: string; // Дата в формате "YYYY-MM-DD"
  documentType: string;
  documentData: string;
}

interface Seat {
  coachId: string;
  personInfo: PersonInfo | null;
  seatNumber: number | null;
  isChild: boolean;
  includeChildrenSeat: boolean;
}

interface Departure {
  routeDirectionId: string;
  seats: Seat[];
}

export interface User {
  firstName: string;
  lastName: string;
  patronymic: string;
  phone: string;
  email: string;
  paymentMethod: "cash" | "online" | '';
}

interface BookingData {
  user: User;
  departure: Departure;
  addSeat: (coachId: string, seatNumber: number | null) => void;
  updatePassengerInfo: (seatIndex: number, personInfo: PersonInfo, isChild: boolean) => void;
  setUserData: <K extends keyof User>(key: K, value: User[K]) => void;
  
}

const orderStore = create<BookingData>((set) => ({
  user: {
    firstName: '',
    lastName: '',
    patronymic: '',
    phone: '',
    email: '',
    paymentMethod: '',
  },
  departure: {
    routeDirectionId: '',
    seats: [], // Изначально seats пуст
  },
  addSeat: (coachId, seatNumber) => set((state) => {
    const isAlreadyAdded = state.departure.seats.some(
      seat => seat.coachId === coachId && seat.seatNumber === seatNumber
    );
    
    if (isAlreadyAdded) return state;
    
    return {
      departure: {
        ...state.departure,
        seats: [
          ...state.departure.seats,
          {
            coachId,
            seatNumber,
            personInfo: null,
            isChild: false,
            includeChildrenSeat: false
          }
        ]
      }
    };
  }),
  updatePassengerInfo: (seatIndex, personInfo, isChild) => 
    set((state) => {
      const updatedSeats = [...state.departure.seats];
      updatedSeats[seatIndex] = {
        ...updatedSeats[seatIndex],
        personInfo,
        isChild
      };
      
      return {
        departure: {
          ...state.departure,
          seats: updatedSeats
        }
      };
    }),
    setUserData: (key, value) => 
      set((state) => ({
        user: {
          ...state.user,
          [key]: value, // Обновляем конкретное поле в user
        },
      })),
  
       
}));

export default orderStore;
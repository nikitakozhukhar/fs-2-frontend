import { create } from 'zustand';

export interface PersonInfo {
  isAdult: boolean;
  firstName: string;
  lastName: string;
  patronymic: string;
  gender: boolean; // true для мужского пола, false для женского
  birthday: string; // Дата в формате "YYYY-MM-DD"
  documentType: string;
  documentData: string;
}

export interface Seat {
  coachId: string;
  price: number;
  personInfo: PersonInfo | null;
  seatNumber: number | null;
  isChild: boolean;
  includeChildrenSeat: boolean;
}

export interface Departure {
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
  addrouteDirectionId: (directionId: string) => void;
  addSeat: (coachId: string, seatNumber: number | null, price: number) => void;
  updatePassengerInfo: (seatIndex: number, personInfo: PersonInfo, isChild: boolean) => void;
  setUserData: <K extends keyof User>(key: K, value: User[K]) => void;
  isPassengerDataComplete: (seatIndex: number) => boolean;
}

const orderStore = create<BookingData>((set, get) => ({
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
    seats: [],
  },
  addrouteDirectionId: (directionId) => set((state) => ({
    departure: {
      ...state.departure,
      routeDirectionId: directionId
    }
  })),

  addSeat: (coachId, seatNumber, price) => set((state) => {
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
            price,
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
          [key]: value,
        },
      })),
      isPassengerDataComplete: (seatIndex) => {
        const seat = get().departure.seats[seatIndex];
        if (!seat) return false;
        
        return (
          seat.personInfo !== null &&
          seat.personInfo.firstName !== '' &&
          seat.personInfo.lastName !== '' &&
          seat.personInfo.patronymic !== '' &&
          seat.personInfo.birthday !== '' &&
          seat.personInfo.documentData !== ''
        );
      },
       
}));

export default orderStore;
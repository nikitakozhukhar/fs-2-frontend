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
  personInfo: PersonInfo;
  seatNumber: number | null;
  isChild: boolean;
  includeChildrenSeat: boolean;
}

interface Departure {
  routeDirectionId: string;
  seats: Seat[];
}

interface User {
  firstName: string;
  lastName: string;
  patronymic: string;
  phone: string;
  email: string;
  paymentMethod: "cash" | "online";
}

interface BookingData {
  user: User;
  departure: Departure;
  newSeat: Partial<Seat>; // Промежуточное состояние для нового места
  setUserData: <K extends keyof User>(key: K, value: User[K]) => void;
  setDepartureData: <K extends keyof Departure>(key: K, value: Departure[K]) => void;
  updateNewSeat: (data: Partial<Seat>) => void; // Обновление промежуточного состояния
  addSeat: () => void; // Функция для финализации нового места
}

const orderStore = create<BookingData>((set) => ({
  user: {
    firstName: '',
    lastName: '',
    patronymic: '',
    phone: '',
    email: '',
    paymentMethod: 'cash',
  },
  departure: {
    routeDirectionId: '',
    seats: [], // Изначально seats пуст
  },
  newSeat: {}, // Промежуточное состояние для нового места
  setUserData: (key, value) =>
    set((state) => ({
      user: {
        ...state.user,
        [key]: value, // Обновляем конкретное поле в user
      },
    })),
  setDepartureData: (key, value) =>
    set((state) => ({
      departure: {
        ...state.departure,
        [key]: value, // Обновляем конкретное поле в departure
      },
    })),
  updateNewSeat: (data) =>
    set((state) => ({
      newSeat: {
        ...state.newSeat,
        ...data, // Обновляем промежуточное состояние
      },
    })),
  addSeat: () =>
    set((state) => {
      if (!state.newSeat.personInfo || !state.newSeat.seatNumber) {
        console.error('Не все данные заполнены');
        return state;
      }

      // Финализируем новое место и добавляем его в seats
      const newSeat: Seat = {
        coachId: state.newSeat.coachId || '', // Добавьте значение по умолчанию, если нужно
        personInfo: state.newSeat.personInfo,
        seatNumber: state.newSeat.seatNumber,
        isChild: state.newSeat.isChild || false, // Добавьте значение по умолчанию, если нужно
        includeChildrenSeat: state.newSeat.includeChildrenSeat || false, // Добавьте значение по умолчанию, если нужно
      };

      return {
        departure: {
          ...state.departure,
          seats: [...state.departure.seats, newSeat],
        },
        newSeat: {}, // Очищаем промежуточное состояние
      };
    }),
}));

export default orderStore;
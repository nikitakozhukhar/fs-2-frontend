import { v4 as uuidv4 } from "uuid";

// Тип для группированного места
export interface GroupedSeat {
  number: number;
  available: boolean;
  id: string;
}

export interface Coupe {
  seat1: GroupedSeat | null;
  seat2?: GroupedSeat | null;
  seat3?: GroupedSeat | null;
  seat4?: GroupedSeat | null;
  seat5?: GroupedSeat | null;
  seat6?: GroupedSeat | null;
  seat7?: GroupedSeat | null;
  seat8?: GroupedSeat | null;
  id: string;
}

// Тип для обработанных данных о вагоне
export interface ProcessedWagon {
  coachId: string;
  coachName: string;
  seats: Coupe[];
}

// Тип для места
interface Seat {
  index: number;
  available: boolean;
}

// Тип для данных о вагоне
export interface Wagon {
  coach: {
    name: string;
    available_seats: number;
    bottom_price: number;
    class_type: string;
    have_air_conditioning: boolean;
    have_wifi: boolean;
    is_linens_included: boolean;
    linens_price: number;
    price: number;
    side_price: number;
    top_price: number;
    train: string;
    wifi_price: number;
    _id: string;
  };
  seats?: Seat[];
}

// Функция группировки мест в купе
const groupSeats = (seats: Seat[] = [], groupSize: number): Coupe[] => {
  const groupedSeats: Coupe[] = [];

  for (let i = 0; i < seats.length; i += groupSize) {
    const coupe: Coupe = {
      id: uuidv4(),
      seat1: seats[i] ? { number: seats[i].index, available: seats[i].available, id: uuidv4() } : null,
      seat2: seats[i + 1] ? { number: seats[i + 1].index, available: seats[i + 1].available, id: uuidv4() } : null,
      seat3: seats[i + 2] ? { number: seats[i + 2].index, available: seats[i + 2].available, id: uuidv4() } : null,
      seat4: seats[i + 3] ? { number: seats[i + 3].index, available: seats[i + 3].available, id: uuidv4() } : null,
      seat5: seats[i + 4] ? { number: seats[i + 4].index, available: seats[i + 4].available, id: uuidv4() } : null,
      seat6: seats[i + 5] ? { number: seats[i + 5].index, available: seats[i + 5].available, id: uuidv4() } : null,
      seat7: seats[i + 6] ? { number: seats[i + 6].index, available: seats[i + 6].available, id: uuidv4() } : null,
      seat8: seats[i + 7] ? { number: seats[i + 7].index, available: seats[i + 7].available, id: uuidv4() } : null,
    };

    groupedSeats.push(coupe);
  }

  return groupedSeats;
};

// Функции обработки вагонов
export const firstClassSeats = (wagons: Wagon[]): ProcessedWagon[] =>
  wagons.map((wagon) => ({
    coachId: wagon.coach._id,
    coachName: wagon.coach.name,
    seats: groupSeats(wagon.seats ?? [], 2),
  }));

export const secondClassSeats = (wagons: Wagon[]): ProcessedWagon[] =>
  wagons.map((wagon) => ({
    coachId: wagon.coach._id,
    coachName: wagon.coach.name,
    seats: groupSeats(wagon.seats ?? [], 4),
  }));

export const thirdClassSeats = (wagons: Wagon[]): ProcessedWagon[] =>
  wagons.map((wagon) => ({
    coachId: wagon.coach._id,
    coachName: wagon.coach.name,
    seats: groupSeats(wagon.seats ?? [], 6),
  }));

export const fourthClassSeats = (wagons: Wagon[]): ProcessedWagon[] =>
  wagons.map((wagon) => ({
    coachId: wagon.coach._id,
    coachName: wagon.coach.name,
    seats: groupSeats(wagon.seats ?? [], 8),
  }));

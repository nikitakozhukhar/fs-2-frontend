import { create } from "zustand";
import { ReactNode } from "react";

import FirstClassIcon from "../img/svg/firstClass.svg?react";
import SecondClassIcon from "../img/svg/secondClass.svg?react";
import ThirdClassIcon from "../img/svg/thirdClass.svg?react";
import FourthClassIcon from "../img/svg/fourClass.svg?react";

import FirstClass from "../components/TrainDiagrams/FirstClass";
import SecondClass from "../components/TrainDiagrams/SecondClass";
import ThirdClass from "../components/TrainDiagrams/ThirdClass";
import FourthClass from "../components/TrainDiagrams/FourthClass";
import React from "react";

// Типы для иконок и схем вагонов
type Icons = {
  first: typeof FirstClassIcon;
  second: typeof SecondClassIcon;
  third: typeof ThirdClassIcon;
  fourth: typeof FourthClassIcon;
};

type Diagrams = {
  first: typeof FirstClass;
  second: typeof SecondClass;
  third: typeof ThirdClass;
  fourth: typeof FourthClass;
};

// Тип для вагона
type Wagon = {
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
};

// Тип для группировки вагонов
type GroupedWagons = Record<string, Wagon[]>;

// Тип для renderClassType
type RenderClassType = {
  name: string;
  icon: ReactNode;
  diagram: ReactNode;
  wagons: Wagon[];
};

// Иконки и схемы вагонов
const icons: Icons = {
  first: FirstClassIcon,
  second: SecondClassIcon,
  third: ThirdClassIcon,
  fourth: FourthClassIcon,
};

const diagrams: Diagrams = {
  first: FirstClass,
  second: SecondClass,
  third: ThirdClass,
  fourth: FourthClass,
};

// Состояние хранилища
type WagonStore = {
  groupedWagons: GroupedWagons | null;
  renderClassType: RenderClassType[];
  activeClassIcon: string | null;
  activeWagonNumber: string;
  setWagonData: (seatData: Wagon[]) => void;
  setActiveClassIcon: (classType: string) => void;
  setActiveWagonNumber: (wagonNumber: string) => void;
};

// Создание хранилища
const wagonStore = create<WagonStore>((set) => ({
  groupedWagons: null,
  renderClassType: [],
  activeClassIcon: null,
  activeWagonNumber: "",

  // Функция для обновления groupedWagons и renderClassType
  setWagonData: (seatData) => {
    const groupedWagons = seatData.reduce<GroupedWagons>((acc, wagon) => {
      const classType = wagon.coach.class_type;
      if (!acc[classType]) {
        acc[classType] = [];
      }
      acc[classType].push(wagon);
      return acc;
    }, {});

    const renderClassType = Object.keys(groupedWagons).map((classType) => ({
      name: classType,
      icon: React.createElement(icons[classType as keyof Icons]),
      diagram: React.createElement(diagrams[classType as keyof Diagrams]),
      wagons: groupedWagons[classType],
    }));

    const firstClassType = renderClassType.length > 0 ? renderClassType[0].name : null;
    const firstWagonNumber = firstClassType
      ? groupedWagons[firstClassType][0]?.coach.name
      : "";

    set({
      groupedWagons,
      renderClassType,
      activeClassIcon: firstClassType,
      activeWagonNumber: firstWagonNumber,
    });
  },

  // Функция для обновления активного класса вагона
  setActiveClassIcon: (classType) => {
    set((state) => {
      const wagonsForClass = state.groupedWagons?.[classType] || [];
      const firstWagonNumber = wagonsForClass[0]?.coach.name || "";
      return {
        activeClassIcon: classType,
        activeWagonNumber: firstWagonNumber,
      };
    });
  },

  // Функция для обновления активного номера вагона
  setActiveWagonNumber: (wagonNumber) => set({ activeWagonNumber: wagonNumber }),


}));

export default wagonStore;
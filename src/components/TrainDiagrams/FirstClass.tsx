import { v4 as uuidv4 } from 'uuid';
import WCRoomIcon from "../../img/svg/wc-svgrepo-com.svg?react";
import CoffeMakerIcon from "../../img/svg/coffee-maker-svgrepo-com.svg?react";
import ConductorIcon from "../../img/svg/conductor_umi9qkxgsyzx.svg?react";
import TrashIcon from "../../img/svg/trash-can-svgrepo-com.svg?react";
import NoSmokingIcon from "../../img/svg/no-smoking-sign-svgrepo-com.svg?react";

interface SeatData {
  seat1: number;
  seat2: number;
  id: string;
}

interface SeatProps {
  seatNumber: number;
}

const Seat: React.FC<SeatProps> = ({ seatNumber }) => (
  <div className="px-[1px] border-b-4 border-[#999999] flex-1 flex flex-col justify-end items-center cursor-pointer bg-blue-50 text-xl font-bold">
    {seatNumber}
  </div>
);

const data = [
  { seat1: 1, seat2: 2, id: uuidv4() },
  { seat1: 3, seat2: 4, id: uuidv4() },
  { seat1: 5, seat2: 6, id: uuidv4() },
  { seat1: 7, seat2: 8, id: uuidv4() },
  { seat1: 9, seat2: 10, id: uuidv4() },
  { seat1: 11, seat2: 12, id: uuidv4() },
  { seat1: 13, seat2: 14, id: uuidv4() },
  { seat1: 15, seat2: 16, id: uuidv4() },
  { seat1: 17, seat2: 18, id: uuidv4() },
];

const FirstClass = () => (
  <div className="flex w-[921px] h-[145px] m-auto mb-5 border-2 rounded-3xl">
    {/* Левый блок */}
    <div className="flex relative h-full">
      <div className="w-[45px] h-full border-2 flex justify-between items-center rounded-l-xl">
        <div className="w-[5px] h-[50px] bg-gray-500 -ml-0.5" />
        <div className="flex-grow relative">
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[20px] h-[8px] border-gray-500 border-2" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[20px] h-[8px] border-gray-500 border-2" />
        </div>
        <div className="w-[5px] h-[40px] bg-gray-500 -mr-0.5" />
      </div>

      <div className="relative flex flex-col justify-between items-center w-[35px] h-full py-3 border-2">
        <span className="absolute -top-[28px] w-[35px] bg-black text-white font-bold text-center">07</span>
        <WCRoomIcon />
        <CoffeMakerIcon className="mt-2" />
      </div>

      <div className="relative flex justify-center py-6 w-[50px] h-full border-2">
        <ConductorIcon />
      </div>
    </div>

    {/* Основные места */}
    <div className="relative z-0 flex w-[700px] h-full">
      {data.map(({ id, seat1, seat2 }) => (
        <div key={id} className="flex flex-col justify-between w-[78px]">
          <div className="flex justify-evenly items-stretch h-[100%] border-l-4 border-r-4 border-t-4 border-[#999999]">
            <Seat seatNumber={seat1} />
            <div className="border-2 border-white flex-1 flex flex-col justify-end" />
            <Seat seatNumber={seat2} />
          </div>

          <div className="h-[40px] w-[87px] border-4 border-white" />

          <div className="h-[40px] border-l-4 border-r-4 border-b-4 border-[#999999]" />
        </div>
      ))}
    </div>

    {/* Правый блок */}
    <div className="flex flex-col items-center justify-between py-1 border-2 w-[40px]">
      <WCRoomIcon />
      <TrashIcon />
    </div>
    <div className="relative left-[15px] flex justify-center items-center text-gray-400">
      <NoSmokingIcon />
    </div>
  </div>
);

export default FirstClass;

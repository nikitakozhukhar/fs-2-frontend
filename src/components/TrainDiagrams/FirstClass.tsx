import { v4 as uuidv4 } from 'uuid';
import WCRoomIcon from "../../img/svg/wc-svgrepo-com.svg?react";
import CoffeMakerIcon from "../../img/svg/coffee-maker-svgrepo-com.svg?react";
import ConductorIcon from "../../img/svg/conductor_umi9qkxgsyzx.svg?react";
import TrashIcon from "../../img/svg/trash-can-svgrepo-com.svg?react";
import NoSmokingIcon from "../../img/svg/no-smoking-sign-svgrepo-com.svg?react";

import Seat from './Seat';
import { firstClassSeats } from './seatsData';

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
      {firstClassSeats.map((coupe) => (

        <div key={coupe.id} className="flex flex-col justify-between w-[78px]">
          <div className="flex justify-evenly items-stretch h-[100%] border-l-4 border-r-4 border-t-4 border-[#999999]">
            <Seat seatNumber={coupe.seat1.number} seatId={coupe.seat1.id} />
            <div className="border-2 border-white flex-1 flex flex-col justify-end" />
            <Seat seatNumber={coupe.seat2.number} seatId={coupe.seat2.id}/>
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

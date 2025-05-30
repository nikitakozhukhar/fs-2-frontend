import wagonStore from "../../store/wagonStore";
import Seat from "./Seat";
import { firstClassSeats, ProcessedWagon, Wagon } from "./seatsData";

import WCRoomIcon from "../../img/svg/wc-svgrepo-com.svg?react";
import CoffeMakerIcon from "../../img/svg/coffee-maker-svgrepo-com.svg?react";
import ConductorIcon from "../../img/svg/conductor_umi9qkxgsyzx.svg?react";
import TrashIcon from "../../img/svg/trash-can-svgrepo-com.svg?react";
import NoSmokingIcon from "../../img/svg/no-smoking-sign-svgrepo-com.svg?react";

const FirstClass: React.FC = () => {
  const { renderClassType, activeWagonNumber } = wagonStore();

  const firstClassWagons: Wagon[] = (renderClassType.find(
    (item) => item.name === "first"
  )?.wagons ?? []) as Wagon[];

  if (!firstClassWagons) {
    return null;
  }

  const processedData: ProcessedWagon[] = firstClassSeats(firstClassWagons);

  const activeWagonData = processedData.find(
    (wagon) => wagon.coachName === activeWagonNumber
  );

  if (!activeWagonData) {
    return null;
  }
  const countedCoupeWidth = Math.floor(700 / activeWagonData.seats.length);

  return (
    <div className="flex w-[921px] h-[145px] m-auto mb-5 border-2 rounded-3xl">
      <div className="flex relative z-0 h-[100%]">
        <div className="w-[45px] h-[100%] border-2 flex justify-between items-center rounded-l-xl">
          <div className="w-[5px] h-[50px] border-gray-500 border-2 bg-gray-500 -ml-0.5"></div>
          <div className="flex-grow h-[100%] relative">
            <span className="absolute -mt-1 top-0 left-1/2 transform -translate-x-1/2 w-[20px] h-[8px] border-gray-500 border-2"></span>
            <span className="absolute -mb-1 bottom-0 left-1/2 transform -translate-x-1/2 w-[20px] h-[8px] border-gray-500 border-2"></span>
          </div>
          <div className="w-[5px] h-[40px] border-gray-500 border-2 bg-gray-500 -mr-0.5"></div>
        </div>

        <div className="relative z-0 flex flex-col justify-between items-center w-[35px] h-[100%] py-3 border-2">
          <span className="absolute -top-[28px] flex justify-center items-center w-[35px] bg-black font-bold text-white">
            07
          </span>
          <span className="absolute -left-[6px] top-[49%] rotate-[30deg] w-[70px] h-[1px] border-gray-400 border-t-[1px]"></span>
          <span className="absolute -left-[8px] top-[70%] rotate-[30deg] w-[45px] h-[1px] border-gray-400 border-t-[1px]"></span>
          <span className="absolute z-10 -right-[20px] top-[90px] w-[35px] h-[5px] rotate-90 bg-white"></span>
          <div className="">
            <WCRoomIcon />
          </div>
          <div className="">
            <CoffeMakerIcon />
          </div>
        </div>

        <div className="relative z-0 flex justify-center py-6 w-[50px] h-[100%] border-2">
          <ConductorIcon />
          <span className="absolute bottom-[53px] left-[21px] w-[30px] h-[2px] bg-gray-300"></span>
        </div>
      </div>

      <div className="relative z-0 flex w-[700px] h-full">
        {activeWagonData.seats.map((coupe) => (
          <div
            key={coupe.id}
            className={`flex flex-col justify-between `}
            style={{ width: `${countedCoupeWidth}px` }}
          >
            <div className="flex justify-evenly items-stretch h-[100%] border-l-4 border-r-4 border-t-4 border-[#999999]">
              <Seat
                seatNumber={coupe.seat1?.number ?? null}
                available={coupe.seat1?.available}
                coachId={activeWagonData.coachId}
              />
              <div className="border-2 border-white flex-1 flex flex-col justify-end" />
              <Seat
                seatNumber={coupe.seat2?.number ?? null}
                available={coupe.seat2?.available}
                coachId={activeWagonData.coachId}
              />
            </div>

            <div className="h-[40px] w-[87px] border-4 border-white" />

            <div className="h-[40px] border-l-4 border-r-4 border-b-4 border-[#999999]" />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between py-1 border-2 w-[40px]">
        <div className="relative">
          <WCRoomIcon />
          <span className="absolute top-[40px] left-[10px] w-[20px] h-[1px] bg-slate-500"></span>
          <span className="absolute top-[50px] right-[0px] rotate-90 w-[21px] h-[1px] bg-slate-500"></span>
          <span className="absolute top-[70px] right-[8px] -rotate-45 w-[25px] h-[1px] bg-slate-500"></span>
          <span className="absolute top-[52px] left-[15px] rotate-90 w-[25px] h-[4px] bg-gray-500"></span>
        </div>
        <div className="">
          <TrashIcon />
        </div>
      </div>

      <div className="relative left-[15px] flex justify-center items-center text-gray-400">
        <NoSmokingIcon />
      </div>
    </div>
  );
};

export default FirstClass;

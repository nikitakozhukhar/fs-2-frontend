import WCRoomIcon from "../../img/svg/wc-svgrepo-com.svg?react";
import CoffeMakerIcon from "../../img/svg/coffee-maker-svgrepo-com.svg?react";
import ConductorIcon from "../../img/svg/conductor_umi9qkxgsyzx.svg?react";
import TrashIcon from "../../img/svg/trash-can-svgrepo-com.svg?react";
import NoSmokingIcon from "../../img/svg/no-smoking-sign-svgrepo-com.svg?react";

import Seat from "./Seat";
import { fourthClassSeats, ProcessedWagon, Wagon } from "./seatsData";
import wagonStore from "../../store/wagonStore";

const FourthClass = () => {

  const { renderClassType, activeWagonNumber } = wagonStore();

  const fourthClassWagons: Wagon[] = (renderClassType.find((item) => item.name === "fourth")?.wagons ?? []) as Wagon[];

  if (!fourthClassWagons) {
    return null;
  }

  const processedData: ProcessedWagon[]  = fourthClassSeats(fourthClassWagons);

  const activeWagonData = processedData.find(
    (wagon) => wagon.coachName === activeWagonNumber
  );

  if (!activeWagonData) {
    return <div>Выберите вагон</div>
  }

  const coutedCoupeWidth = Math.floor(700 / activeWagonData.seats.length);

  return (
    <div className="flex w-[921px] h-[145px] m-auto mb-5 border-2 rounded-3xl ">
      <div className="flex relative z-0 h-[100%] ">
        <div className="w-[45px] h-[100%] border-2 flex justify-between items-center rounded-l-xl">
          <div className="w-[5px] h-[50px] border-gray-500 border-2 bg-gray-500 -ml-0.5"></div>
          <div className="flex-grow h-[100%] relative">
            <span className="absolute -mt-1 top-0 left-1/2 transform -translate-x-1/2 w-[20px] h-[8px]  border-gray-500 border-2"></span>
            <span className="absolute -mb-1 bottom-0 left-1/2 transform -translate-x-1/2 w-[20px] h-[8px]  border-gray-500 border-2"></span>
          </div>
          <div className="w-[5px] h-[40px]  border-gray-500 border-2 bg-gray-500 -mr-0.5"></div>
        </div>

        <div className="relative z-0 flex flex-col justify-between items-center w-[35px] h-[100%] py-3 border-2">
          <span className="absolute -top-[28px] flex justify-center items-center w-[35px] bg-black font-bold text-white">
            07
          </span>
          <span className="absolute -left-[6px] top-[49%] rotate-[30deg] w-[70px] h-[1px]  border-gray-400 border-t-[1px]"></span>
          <span className="absolute -left-[8px] top-[70%] rotate-[30deg] w-[45px] h-[1px]  border-gray-400 border-t-[1px]"></span>
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

      <div className="relative z-0 flex w-[700px] gap-5 border-4 border-gray-500">
        {activeWagonData.seats.map((coupe) => (
          <div key={coupe.id} className="relative flex flex-col" style={{ width: `${coutedCoupeWidth}px` }}>
            <div className="flex justify-between mb-4">
              <div className="flex flex-col-reverse gap-1 w-8 ">
                <Seat 
                  seatNumber={coupe.seat1?.number} 
                  seatId={coupe.seat1?.id} 
                  available={coupe.seat1?.available}
                />
                <Seat 
                  seatNumber={coupe.seat2?.number} 
                  seatId={coupe.seat2?.id} 
                  available={coupe.seat2?.available}
                />
              </div>
              <div className="flex flex-col-reverse gap-1 w-8 ">
                <Seat 
                  seatNumber={coupe.seat3?.number} 
                  seatId={coupe.seat3?.id} 
                  available={coupe.seat3?.available}/>
                <Seat 
                  seatNumber={coupe.seat4?.number} 
                  seatId={coupe.seat4?.id} 
                  available={coupe.seat4?.available}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col-reverse gap-1 w-8">
                <Seat 
                  seatNumber={coupe.seat5?.number} 
                  seatId={coupe.seat5?.id}
                  available={coupe.seat5?.available}
                />
                <Seat 
                  seatNumber={coupe.seat6?.number} 
                  seatId={coupe.seat6?.id}
                  available={coupe.seat6?.available}
                />
              </div>
              <div className="flex flex-col gap-1 w-8 ">
                <Seat 
                  seatNumber={coupe.seat7?.number} 
                  seatId={coupe.seat7?.id} 
                  available={coupe.seat7?.available}
                />
                <Seat 
                  seatNumber={coupe.seat8?.number} 
                  seatId={coupe.seat8?.id} 
                  available={coupe.seat8?.available}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between py-1 border-2 w-[40px] ">
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

export default FourthClass;

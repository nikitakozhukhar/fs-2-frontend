import WCRoomIcon from "../../img/svg/wc-svgrepo-com.svg?react";
import CoffeMakerIcon from "../../img/svg/coffee-maker-svgrepo-com.svg?react";
import ConductorIcon from "../../img/svg/conductor_umi9qkxgsyzx.svg?react";
import TrashIcon from "../../img/svg/trash-can-svgrepo-com.svg?react";
import NoSmokingIcon from "../../img/svg/no-smoking-sign-svgrepo-com.svg?react";

const FirstClass = () => {
  const data = [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
    [
      [9, 10],
      [11, 12],
    ],
    [
      [13, 14],
      [15, 16],
    ],
    [
      [17, 18],
      [19, 20],
    ],
    [
      [21, 22],
      [23, 24],
    ],
    [
      [25, 26],
      [27, 28],
    ],
    [
      [29, 30],
      [31, 32],
    ],
  ];

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
          <span className="absolute -top-[28px] flex justify-center items-center w-[35px] bg-black font-bold text-white">07</span>
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

      <div className="relative z-0 flex w-[700px] h-full">
        {data.map((numbers, idx) => (
          <div
            key={idx}
            className={`relative flex justify-between w-[90px] h-full border-t-[5px] border-l-[5px] border-b-[5px] border-gray-500 ${
              idx === data.length - 1 ? "border-r-[5px]" : ""
            }`}
          >
            {numbers.map((column, colIdx) => (
              <div className="border-b-gray-400 ">
                <div
                  key={colIdx}
                  className="flex flex-col-reverse self-start border-b-4 border-b-gray-500"
                >
                  {column.map((num, numIdx) => (
                    <div
                      key={numIdx}
                      className="flex items-center justify-center w-[30px] h-[40px] bg-slate-200 border-4 cursor-pointer"
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <span className="absolute z-0 bottom-[17px] w-[83px] h-[1px] bg-slate-200"></span>
          </div>
        ))}
        <div className="absolute z-20 top-[88px] w-[700px] h-[25px] bg-white"></div>
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

export default FirstClass;

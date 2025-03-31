import { useState } from "react";
import wagonStore from "../../store/wagonStore";
import HintOnHover from "../HintOnHover/HintOnHover";

import ConditionerIcon from "../../img/svg/condition.svg?react";
import WifiIcon from "../../img/svg/wifi2.svg?react";
import BeddingIcon from "../../img/svg/bedding.svg?react";
import CupIcon from "../../img/svg/cup2.svg?react";

const WagonType = () => {
  const {
    renderClassType,
    activeClassIcon,
    activeWagonNumber,
    setActiveClassIcon,
    setActiveWagonNumber,
  } = wagonStore();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const services = [
    { icon: <ConditionerIcon fill="inherit" />, name: "кондиционер" },
    { icon: <WifiIcon fill="inherit" />, name: "WI-FI" },
    { icon: <BeddingIcon fill="inherit" />, name: "белье" },
    { icon: <CupIcon fill="inherit" />, name: "питание" },
  ];

  return (
    <div className="">
      <div className="px-3 text-3xl font-bold mb-6">Тип вагона</div>
      <div className="flex justify-between px-7 mb-5">
        {renderClassType.map((item) => (
          <div
            key={item.name}
            onClick={() => setActiveClassIcon(item.name)}
            className={`flex flex-col gap-3 items-center cursor-pointer text-[#C4C4C4] ${
              activeClassIcon === item.name
                ? "text-orange-400"
                : "hover:text-gray-400"
            }`}
          >
            {item.icon}
            <div className="">
              {item.name === "first"
                ? "Люкс"
                : item.name === "second"
                ? "Купе"
                : item.name === "third"
                ? "Плацкарт"
                : "Сидячий"}
            </div>
          </div>
        ))}
      </div>

      <div
        className="
          flex justify-between items-center py-1 px-4 bg-[#FFA80070] bg-opacity-44"
      >
        <div className="flex gap-2 items-center">
          <span className="font-medium text-lg">Вагоны:</span>
          <div className="flex gap-1 cursor-pointer">
            {activeClassIcon &&
              renderClassType
                .find((item) => item.name === activeClassIcon)
                ?.wagons.map((wagon) => (
                  <span
                    key={wagon.coach._id}
                    onClick={() => setActiveWagonNumber(wagon.coach.name)}
                    className={`px-2 py-1 ${
                      activeWagonNumber === wagon.coach.name
                        ? `text-black `
                        : `text-white`
                    }  font-bold text-xl rounded-md shadow-sm`}
                  >
                    {wagon.coach.name}
                  </span>
                ))}
          </div>
        </div>
        <div className="flex gap-1 text-gray-700 text-sm">
          <span>Нумерация вагонов начинается с</span>
          <span className="font-semibold">головы поезда</span>
        </div>
      </div>

      <div className="flex justify-between pl-0 px-6 basis-44">
        <div className="flex flex-col items-center justify-center gap-2 px-10 bg-[#FFD98F]">
          <div className="text-3xl font-semibold">{activeWagonNumber}</div>
          <div className="text-2xl">вагон</div>
        </div>
        {activeClassIcon &&
          renderClassType
            .find((item) => item.name === activeClassIcon)
            ?.wagons.map(
              (wagon) =>
                activeWagonNumber === wagon.coach.name && (
                  <div
                    key={wagon.coach._id}
                    className="flex justify-around w-full"
                  >
                    {activeClassIcon === "fourth" ? (
                      <div className="flex justify-around mt-2 w-full">
                        <div className="flex flex-col items-start font-light">
                          <span className="font-normal">
                            Места {wagon.coach.available_seats}
                          </span>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <div className="font-light">Стоимость</div>
                          <div className="font-medium">
                            {wagon.coach.top_price}{" "}
                            <span className="text-[#928F94]">&#x20bd;</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-around w-full">
                        <div className="flex flex-col items-start justify-center gap-2">
                          <div className="font-light">
                            <span className="font-normal">
                              Места: {wagon.coach.available_seats}
                            </span>
                          </div>
                          <div className="font-normal">
                            Верхние{" "}
                            <span className="font-semibold">
                              {Math.floor(wagon.seats.length / 2)}
                            </span>
                          </div>
                          <div className="font-normal">
                            Нижние{" "}
                            <span className="font-semibold">
                              {Math.round(wagon.seats.length / 2)}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                          <div className="font-light">Стоимость</div>
                          <div className="font-medium">
                            {wagon.coach.top_price}{" "}
                            <span className="text-[#928F94]">&#x20bd;</span>
                          </div>
                          <div className="font-medium">
                            {wagon.coach.bottom_price}{" "}
                            <span className="text-[#928F94]">&#x20bd;</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
            )}
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="font-light">Обслуживание ФПК</div>
          <div className="flex gap-3 cursor-pointer ">
            {services.map((service, index) => (
              <div
                key={index}
                className="fill-white stroke-black-500 hover:fill-[#FFA800] active:text-white active:fill-[#FFA800] relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {service.icon}
                {hoveredIndex === index && (
                  <HintOnHover key={`hint-${index}`} hint={service.name} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end px-5 mb-5">
        <div className="w-[210px] p-4 bg-[#F3F3F3]">
          11 человек выбирают места в этом поезде
        </div>
      </div>

      {renderClassType.map((item) =>
        activeClassIcon === item.name ? (
          <div key={`diagram-${item.name}`}>{item.diagram}</div>
        ) : null
      )}
    </div>
  );
};

export default WagonType;

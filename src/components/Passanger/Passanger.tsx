import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import orderStore from "../../store/orderStore";
import PassengerForm from "../PassengerForm/PassengerForm";

import PlusPassanger from "../../img/svg/plusPassanger.svg?react";

const Passanger = () => {
  const { departure, isPassengerDataComplete } = orderStore();

  const [passengerCount, setPassengerCount] = useState(1);
  const [passengerIds, setPassengerIds] = useState<number[]>([]);
  const [hasValidPassenger, setHasValidPassenger] = useState(false);

  useEffect(() => {
    const isValid = passengerIds.some((id) => isPassengerDataComplete(id));
    setHasValidPassenger(isValid);
  }, [passengerIds, departure.seats, isPassengerDataComplete]);

  useEffect(() => {
    if (departure.seats.length > 0) {
      const initialIds = Array.from(
        { length: departure.seats.length },
        (_, i) => i
      );
      setPassengerIds(initialIds);
    }
  }, [departure.seats.length]);

  const addPassenger = () => {
    const newId = passengerIds.length > 0 ? Math.max(...passengerIds) + 1 : 0;
    setPassengerIds([...passengerIds, newId]);
    setPassengerCount(passengerCount + 1);
  };

  const handleRemovePassenger = (id: number) => {
    setPassengerIds(passengerIds.filter((passengerId) => passengerId !== id));
    setPassengerCount(passengerCount - 1);
  };

  return (
    <div className="mb-10 h-[100%]">
      <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

      <div className="flex flex-col w-[960px]">
        {passengerIds.map((id, index) => (
          <PassengerForm
            key={id}
            passengerNumber={index}
            passengerId={id}
            onRemove={() => handleRemovePassenger(id)}
            isLast={index === passengerIds.length - 1}
          />
        ))}

        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9] border-2 border-gray-400">
          <div className="flex items-center gap-5 ">
            <div className=" cursor-pointer"></div>
            <div className="text-2xl font-medium">Добавить пассажира</div>
          </div>
          <div
            onClick={addPassenger}
            className="text-xl text-gray-600 cursor-pointer hover:text-[#FFA800] transition-colors"
            aria-label="Добавить пассажира"
          >
            <PlusPassanger />
          </div>
        </div>

        <div className="self-end mt-8">
          <Link to={hasValidPassenger ? "/payment" : "#"}>
            <button
              disabled={!hasValidPassenger}
              className={`py-4 px-12 border-2 rounded-lg text-white text-2xl uppercase hover:shadow-md hover:shadow-[#bebcbe] active:bg-white active:text-[#FFA800] active:border active:border-[#FFA800]
                ${
                !hasValidPassenger
                  ? "bg-gray-400 border-gray-400 cursor-not-allowed"
                  : "bg-[#FFA800] border-[#FFA800] hover:bg-[#FFA800]/90"
              }`}
            >
              Далее
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Passanger;

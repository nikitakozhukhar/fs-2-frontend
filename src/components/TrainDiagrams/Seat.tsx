import { useState } from "react";
import orderStore from "../../store/orderStore";
import wagonStore from "../../store/wagonStore";

interface SeatProps {
  seatNumber: number | null;
  available: boolean | undefined;
  coachId: string;
}

const Seat: React.FC<SeatProps> = ({ seatNumber, available, coachId }) => {
  const { departure, addSeat } = orderStore();

  const [choosen, setIsChoosen] = useState(false);

  const { renderClassType, activeClassIcon } = wagonStore();

  const handleSeatClick = () => {
    if (!available) return;

    const currentClass = renderClassType.find(
      (item) => item.name === activeClassIcon
    );
    if (!currentClass) return;

    const currentWagon = currentClass.wagons.find(
      (wagon) => wagon.coach._id === coachId
    );
    if (!currentWagon) return;

    let price = 0;
    const coach = currentWagon.coach;

    if (activeClassIcon === "fourth") {
      price = coach.top_price;
    } else {
      const isUpperSeat = seatNumber ? seatNumber % 2 === 0 : false;
      price = isUpperSeat ? coach.top_price : coach.bottom_price;
    }

    addSeat(coachId, seatNumber, price);
    setIsChoosen(!choosen);
  };

  const isSelected = departure.seats.some(
    (seat) => seat.coachId === coachId && seat.seatNumber === seatNumber
  );

  return (
    <div
      onClick={handleSeatClick}
      className={`
        flex-1 flex flex-col justify-end items-center cursor-pointer 
        ${available ? `bg-blue-50` : `bg-gray-300 cursor-not-allowed`} 
        ${isSelected ? "bg-white border-2 border-[#FFA800]" : ""}
          hover:bg-blue-200 text-xl font-medium
      `}
    >
      {seatNumber}
    </div>
  );
};

export default Seat;

import { useState } from "react";
import orderStore from "../../store/orderStore";

interface SeatProps {
  seatNumber: number | null;
  available: boolean | undefined;
  coachId: string; 
}

const Seat: React.FC<SeatProps> = ({
  seatNumber,
  available,
  coachId,
}) => {
  const { departure, addSeat } = orderStore();

  const [choosen, setIsChoosen] = useState(false)

  const handleSeatClick = () => {
    if (!available) return;

    addSeat(
      coachId,
      seatNumber, 
    );

    setIsChoosen(!choosen)
  };
  const choosenSeat = departure.seats.map((item) => {item.seatNumber === seatNumber})
  // console.log(choosenSeat)

  return (
    <div
      onClick={handleSeatClick}
      className={`
        flex-1 flex flex-col justify-end items-center cursor-pointer 
        ${
          available ? `bg-blue-50` 
          : `bg-gray-300 cursor-not-allowed`
        } 
        ${choosen ? 'bg-white border-2 border-[#FFA800]' : ''}
          hover:bg-blue-200 text-xl font-medium
      `}
    >
      {seatNumber}
    </div>
  );
};

export default Seat;

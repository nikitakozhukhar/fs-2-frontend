interface SeatData {
  seat1: number;
  seat2: number;
  id: string;
}

interface SeatProps {
  seatNumber: number | undefined;
  seatId: string | undefined;
}

const Seat: React.FC<SeatProps> = ({ seatNumber, seatId }) => (
  <div id={seatId} className="flex-1 flex flex-col justify-end items-center cursor-pointer bg-blue-50 hover:bg-blue-200 text-xl font-medium">
    {seatNumber}
  </div>
);

export default Seat;
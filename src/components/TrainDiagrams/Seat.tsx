interface SeatProps {
  seatNumber: number | undefined;
  seatId: string | undefined;
  available: boolean | undefined;
}

const Seat: React.FC<SeatProps> = ({ seatNumber, seatId, available }) => (
  <div onClick={() => console.log(available)} id={seatId} className={`
    flex-1 flex flex-col justify-end items-center cursor-pointer 
    ${available ? `bg-blue-50` : `bg-gray-300 cursor-not-allowed`} hover:bg-blue-200 text-xl font-medium
    `}>
      {seatNumber}
  </div>
  
 
);

export default Seat;
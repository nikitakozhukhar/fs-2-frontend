import './LastTickets.css'
import LastTicket from "../LastTicket/LastTicket";

const LastTickets = () => {
  return (
    <div className="last-tickets-container">
        <div className="last-tickets-title">Последние билеты</div>
        <div className="last-tickets-column">
          <LastTicket />
          <LastTicket />           
        </div>
    </div>
  );
};

export default LastTickets;
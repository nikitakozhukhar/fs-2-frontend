import "./LastTicket.css";
import WifiIcon from "../../img/svg/wifi.svg?react";
import ExpressIcon from "../../img/svg/express.svg?react";
import CupIcon from "../../img/svg/cup.svg?react";

const LastTicket = () => {
  return (
    <div className="last-ticket-item">
      <div className="last-ticket-left-col">
        <div className="departure-place">
          <div className="departure-city">Санкт-Петербург</div>
          <div className="departure-station">Курский вокзал</div>
        </div>
        <div className="last-tickets-options">
          <div className="last-ticket-option">
            <WifiIcon />
          </div>
          <div className="last-ticket-option">
            <ExpressIcon />
          </div>
          <div className="last-ticket-option text-[#E5E5E5]">
            <CupIcon />
          </div>
        </div>
      </div>
      <div className="last-ticket-right-col">
        <div className="arrival-place">
          <div className="arrival-city">Самара</div>
          <div className="arrival-station">Московский вокзал</div>
        </div>
        <div className="ticket-cost">
          <span className="text">от</span> 
          <span className="ticket-price">2500</span> 
          <span className="currency"></span>
        </div>
      </div>
    </div>
  );
};

export default LastTicket;

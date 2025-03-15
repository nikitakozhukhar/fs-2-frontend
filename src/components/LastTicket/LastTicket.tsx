import "./LastTicket.css";
import WifiIcon from "../../img/svg/wifi.svg?react";
import ExpressIcon from "../../img/svg/express.svg?react";
import ConditionIcon from "../../img/svg/condition.svg?react";
import CupIcon from "../../img/svg/cup.svg?react";

import { ILastRoute } from '../LastTickets/LastTickets'

interface ILastTicketProps {
  lastRoute: ILastRoute;
}

const features: { key: keyof ILastRoute; icon: JSX.Element }[] = [
  { key: "have_wifi", icon: <WifiIcon /> },
  { key: "have_air_conditioning", icon: <ConditionIcon /> },
  { key: "is_express", icon: <ExpressIcon /> },
];

const LastTicket: React.FC<ILastTicketProps> = ({ lastRoute }) => {
  return (
    <div className="last-ticket-item">
      <div className="last-ticket-left-col">
        <div className="departure-place">
          <div className="departure-city first-letter:uppercase">
            {lastRoute.departure.from.city.name}
          </div>
          <div className="departure-station">
            {lastRoute.departure.from.railway_station_name}
          </div>
        </div>
        <div className="last-tickets-options">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="last-ticket-option"
              style={{ opacity: lastRoute[feature.key] ? 1 : 0.9 }} // Затемнение недоступных
            >
              {feature.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="last-ticket-right-col">
        <div className="arrival-place">
          <div className="arrival-city first-letter:uppercase">
            {lastRoute.departure.to.city.name}
          </div>
          <div className="arrival-station">
            {lastRoute.departure.to.railway_station_name}
          </div>
        </div>
        <div className="ticket-cost">
          <span className="text">от</span>
          <span className="ticket-price">{lastRoute.min_price}</span>
          <span className="currency"></span>
        </div>
      </div>
    </div>
  );
};

export default LastTicket;
import "./FindTicket.css";
import { Link } from 'react-router-dom'


const FindTicket = () => {
  return (
    <div className="find-ticket-container">
      <div className="find-ticket-column">
      <div className="find-ticket-direction">
        <h3 className="direction-title">Направление</h3>
        <form className="direction-form">
          <input
            placeholder="откуда"
            className="direction direction-input_from"

          ></input>
          <span className="direction-swap">
            <svg
              fill="gray"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              id="update-alt"
              className="icon glyph"
            >
              <path d="M12,3A9,9,0,0,0,6,5.32V3A1,1,0,0,0,4,3V8a1,1,0,0,0,.92,1H10a1,1,0,0,0,0-2H7.11A7,7,0,0,1,19,12a1,1,0,0,0,2,0A9,9,0,0,0,12,3Z"></path>
              <path d="M19.08,15H14a1,1,0,0,0,0,2h2.89A7,7,0,0,1,5,12a1,1,0,0,0-2,0,9,9,0,0,0,15,6.68V21a1,1,0,0,0,2,0V16A1,1,0,0,0,19.08,15Z"></path>
            </svg>
          </span>
          <input
            placeholder="куда"
            className="direction direction-input-where"
          ></input>
        </form>
      </div>

      <div className="find-ticket-date">
        <h3 className="date-title">Направление</h3>
        <form className="date-form">
          <input
            type="date" 
            placeholder="дд/мм/гг"
            className="date date-start"
          ></input>
          <input
            type="date"
            placeholder="дд/мм/гг"
            className="date date-end"
          ></input>
        </form>
      </div>
      <Link to={'/train'} className="find-ticket-button">
        <button className="find-ticket-button">Найти билеты</button>
      </Link>
      </div>
    </div>
  );
};

export default FindTicket;

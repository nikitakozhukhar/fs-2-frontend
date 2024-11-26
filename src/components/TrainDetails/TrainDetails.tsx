import "./TrainDetails.css";
import TrainDetailCard from "../TrainDetailCard/TrainDetailCard";

const TrainDetails = () => {
  return (
    <div className="train-details-row">

      <div className="display-serched-train row1">
        <div className="founded-trains">Найдено 20</div>
        <div className="founded-trains-right-col">
          <div className="sort-train">
            <label htmlFor="options-select">Сортировать по:</label>

            <select name="options" id="options-select">
              <option value=""></option>
              <option value="time">Времени</option>
              <option value="cost">Стоимости</option>
              <option value="duration">Длительности</option>
            </select>

            <div className="display-count">показывать по: 
              <span>5</span>
              <span>10</span>
              <span>20</span>
            </div>
          </div>
        </div>
      </div>

      <div className="train-details row2">
        <TrainDetailCard />
      </div>

      <div className="train-details-pages row3">
        <div className="page-back"></div>
        <div className="page-count-1">1</div>
        <div className="page-count-2">2</div>
        <div className="page-count-3">3</div>
        <div className="page-forward"></div>
      </div>

    </div>

    
  );
};

export default TrainDetails;

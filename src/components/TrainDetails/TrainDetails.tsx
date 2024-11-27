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

            <div className="display-count">
              показывать по:
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
        <div className="pagination page-back">
          <svg
            width="18"
            height="29"
            viewBox="0 0 18 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33625 14.5C9.82076 11.0945 13.1201 7.89424 16.3731 4.72332C17.2669 3.85207 17.1987 2.34671 16.3094 1.47083C15.4416 0.616038 14.1195 0.686134 13.2516 1.54092C9.06317 5.66637 4.86165 9.80466 0.72327 13.8808C0.325571 14.2725 0.325472 14.9137 0.723293 15.3053C4.70972 19.2293 8.86225 23.2984 12.9949 27.3844C13.8955 28.2748 15.2685 28.3485 16.1445 27.4338C16.9987 26.5419 17.0517 25.0479 16.1744 24.1785C13.0758 21.1078 9.80952 17.8945 6.33625 14.5Z"
              fill="#928F94"
            />
          </svg>
        </div>
        <div className="pagination page-count-1 pagination-active">1</div>
        <div className="pagination page-count-2">2</div>
        <div className="pagination page-count-3">3</div>
        <div className="pagination page-forward">
          <svg
            width="18"
            height="29"
            viewBox="0 0 18 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6637 14.5C8.17924 11.0945 4.87989 7.89424 1.62688 4.72332C0.733082 3.85207 0.801327 2.34671 1.69059 1.47083C2.55844 0.616038 3.88051 0.686134 4.74835 1.54092C8.93683 5.66637 13.1384 9.80466 17.2767 13.8808C17.6744 14.2725 17.6745 14.9137 17.2767 15.3053C13.2903 19.2293 9.13775 23.2984 5.00506 27.3844C4.10447 28.2748 2.7315 28.3485 1.85554 27.4338C1.00133 26.5419 0.948345 25.0479 1.82557 24.1785C4.92418 21.1078 8.19048 17.8945 11.6637 14.5Z"
              fill="#928F94"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrainDetails;

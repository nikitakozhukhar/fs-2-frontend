import RightArrowIcon from "../../img/svg/rightArrow.svg?react"; 
import './ProgressPageBar.css'

const ProgressPageBar = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-8 w-screen h-24 mb-12 bg-[#3E3C41] text-white">
      {["Билеты", "Пассажиры", "Оплата", "Проверка"].map((title, index) => (
        <div
          key={index}
          className={`relative flex items-center gap-4 p-4 bg-[#3E3C41] text-white rounded-md`}
        >
          <div className="flex justify-center items-center w-14 h-14 border border-white rounded-full">
            {index + 1}
          </div>
          <div className="text-base mr-3">{title}</div>
          {index < 4 && (
            <>
              <div className="absolute right-0 top-0 h-24 w-6 bg-white clip-arrow"></div>
              <div className="absolute right-0 top-0 h-24 w-6 bg-[#3E3C41] clip-arrow-inner"></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressPageBar;



import './ProgressPageBar.css'


const ProgressPageBar = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-8 h-24 mb-12 bg-[#3E3C41] text-white">
      <div className="container flex justify-between">
      {["Билеты", "Пассажиры", "Оплата", "Проверка"].map((title, index) => (
        <div
          key={index}
          className={`relative flex items-center w-[25%] gap-4 p-4 bg-[#3E3C41] text-white rounded-md`}
        >
          <div className="flex justify-center items-center w-14 h-14 border-4 border-white rounded-full text-3xl font-bold">
            {index + 1}
          </div>
          <div className="text-3xl font-bold mr-3">{title}</div>
          {index < 4 && (
            <>
              <div className="absolute right-0 top-0 h-24 w-6 bg-white clip-arrow"></div>
              <div className="absolute right-0 top-0 h-24 w-6 bg-[#3E3C41] clip-arrow-inner"></div>
            </>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProgressPageBar;



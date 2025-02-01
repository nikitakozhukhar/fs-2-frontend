import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatepicker = ({ selected, onChange }) => {
  return (
    <div className="relative">
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="dd.MM.yyyy"
        placeholderText="Выберите дату"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 text-black"
        wrapperClassName="w-full"
        popperClassName="z-50"
        calendarClassName="!bg-white border border-gray-200 rounded-lg shadow-lg p-2"
        dayClassName={(date) =>
          date.getDate() === selected?.getDate()
            ? "!bg-[#FFA800] !bg-opacity-45 !border-[3px] !border-[#FFA800] !text-black"
            : "hover:!bg-[#FFA800] !bg-white rounded-full"
        }
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex items-center justify-between px-2 py-1">
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              className="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded"
            >
              {"<"}
            </button>
            <span className="font-semibold">
              {date.toLocaleString("ru", { month: "long", year: "numeric" })}
            </span>
            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              className="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded"
            >
              {">"}
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default CustomDatepicker;
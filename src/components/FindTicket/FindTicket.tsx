import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchDirectionStore } from "../../store/searchDirectionStore";
import { useCitiesQuery } from "../../utils/useCitiesQuery";

import ReplaceIcon from "../../img/svg/update-alt-svgrepo-com.svg?react";

const FindTicket: React.FC = () => {
  const {
    fromCityGlobal,
    toCityGlobal,
    setFromCityGlobal,
    setToCityGlobal,
    setStartDateGlobal,
    setEndDateGlobal,
  } = useSearchDirectionStore();

  const [fromCityLocal, setFromCityLocal] = useState('');
  const [toCityLocal, setToCityLocal] = useState('');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const {
    data: fromCities,
    isLoading: fromLoading,
    error: fromError,
  } = useCitiesQuery(fromCityLocal);

  const {
    data: toCities,
    isLoading: toLoading,
    error: toError,
  } = useCitiesQuery(toCityLocal);

  const handleCitySelect = (
    city: { name: string; _id: string },
    setGlobalCity: (city: { name: string; _id: string }) => void,
    setLocalCity: (cityName: string) => void,
    setDropdown: (state: boolean) => void
  ) => {
    setGlobalCity(city); 
    setLocalCity(city.name); 
    setDropdown(false);
  };

  const handleInputFromCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromCityLocal(e.target.value)
    setShowFromDropdown(true);
  };

  const handleInputToCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToCityLocal(e.target.value)
    setShowToDropdown(true);
  };

  return (
    <div className="w-[730px]">
      <div className="flex flex-col justify-around gap-10 h-[575px] bg-[#292929CC]/80 ml-12 p-12">
        {/* Направление */}
        <div>
          <h3 className="text-white font-light text-3xl mb-4">Направление</h3>
          <form
            className="flex items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Откуда"
                name="fromCity"
                className="w-full h-12 pl-4 text-base text-gray-800 rounded-md focus:outline-none"
                value={fromCityLocal}
                onChange={handleInputFromCity}
                onBlur={() => setTimeout(() => setShowFromDropdown(false), 5000)}
                onFocus={() => setShowFromDropdown(true)}
              />
              {showFromDropdown && fromCityGlobal && (
                <div className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-md mt-2 w-full">
                  {fromLoading && (
                    <p className="text-gray-500 px-4 py-2">Загрузка...</p>
                  )}
                  {fromError && (
                    <p className="text-red-500 px-4 py-2">Ошибка загрузки...</p>
                  )}
                  {fromCities && fromCities.length > 0 ? (
                    <ul>
                      {fromCities.map((city) => (
                        <li
                          key={city._id}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() =>
                            handleCitySelect(
                              { name: city.name, _id: city._id },
                              setFromCityGlobal,
                              setFromCityLocal,
                              setShowFromDropdown
                            )
                          }
                        >
                          {city.name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 px-4 py-2">Города не найдены</p>
                  )}
                </div>
              )}
            </div>
            <div className="relative top-1 left-[6px] bg-transparent cursor-pointer">
              <ReplaceIcon className="text-gray-500"/>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Куда"
                name="toCity"
                className="w-full h-12 pl-4 text-base text-gray-800 rounded-md focus:outline-none"
                value={toCityLocal}
                onChange={handleInputToCity}
                onBlur={() => setTimeout(() => setShowToDropdown(false), 200)}
                onFocus={() => setShowToDropdown(true)}
              />
              {showToDropdown && toCityGlobal && (
                <div className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-md mt-2 w-full">
                  {toLoading && (
                    <p className="text-gray-500 px-4 py-2">Загрузка...</p>
                  )}
                  {toError && (
                    <p className="text-red-500 px-4 py-2">Ошибка загрузки...</p>
                  )}
                  {toCities && toCities.length > 0 ? (
                    <ul>
                      {toCities.map((city) => (
                        <li
                          key={city._id}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() =>
                            handleCitySelect(
                              { name: city.name, _id: city._id },
                              setToCityGlobal,
                              setToCityLocal,
                              setShowFromDropdown
                            )
                          }
                        >
                          {city.name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 px-4 py-2">Города не найдены</p>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Дата */}
        <div>
          <h3 className="text-white font-light text-3xl mb-4">Дата</h3>
          <form className="flex items-center gap-4">
            <input
              type="date"
              name="startDate"
              placeholder="дд/мм/гг"
              className="w-full h-12 pl-4 text-base text-gray-800 rounded-md focus:outline-none cursor-pointer"
              onChange={(e) => setStartDateGlobal(e.target.value)}
            />
            <div className="w-[40px]"></div>
            <input
              type="date"
              name="endDate"
              placeholder="дд/мм/гг"
              className="w-full h-12 pl-4 text-base text-gray-800 rounded-md focus:outline-none cursor-pointer"
              onChange={(e) => setEndDateGlobal(e.target.value)}
            />
          </form>
        </div>

         {/* Кнопка */}
         <Link to={"/train"} className="self-end">
          <button 
            className="bg-[#FFA800] text-black font-bold text-2xl py-3 px-6 rounded-lg uppercase hover:shadow-md hover:shadow-[#bebcbe] active:bg-white active:text-[#FFA800] active:border active:border-[#FFA800] active:shadow-inner"
            >
            Найти билеты
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FindTicket;
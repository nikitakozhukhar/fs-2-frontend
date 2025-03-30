import { useSearchDirectionStore } from "../../store/searchDirectionStore";
import { useCitiesQuery } from "../../utils/useCitiesQuery";
import { useRoutesQuery } from "../../utils/useRoutesQuery";
import TrainDetailCard from "../TrainDetailCard/TrainDetailCard";
import { IRoute } from "../../../src/utils/api/fetchRoutes";
import { UseQueryResult } from "@tanstack/react-query";
import PrevPageIcon from "../../img/svg/prevPage.svg?react";
import NextPageIcon from "../../img/svg/nextPage.svg?react";

import LoadingTrain from "../LoadingTrain/LoadingTrain";
import { useState } from "react";


const TrainDetails = () => {
  const { fromCityGlobal, toCityGlobal } = useSearchDirectionStore();
  const [limit, setNewLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('');
  
  const {
    data: fromCities,
    isLoading: fromCitiesLoading,
    error: fromCitiesError,
  } = useCitiesQuery(fromCityGlobal.name);

  const {
    data: toCities,
    isLoading: toCitiesLoading,
    error: toCitiesError,
  } = useCitiesQuery(toCityGlobal.name);

  if (fromCitiesLoading && toCitiesLoading) {
    return <LoadingTrain />;
  }

  if (fromCitiesError || toCitiesError) {
    return <div>Произошла ошибка при загрузке данных о городах.</div>;
  }

  const fromCityId = fromCities?.[0]?._id ?? "";
  const toCityId = toCities?.[0]?._id ?? "";

  // Получаем маршруты с сервера
  const fromRoutes: UseQueryResult<IRoute, Error> = useRoutesQuery(
    fromCityId,
    toCityId,
    limit,
    page,
    sortBy
  );

  if (fromRoutes.error) {
    return <div>Произошла ошибка при загрузке маршрутов.</div>;
  }

  const routesData = fromRoutes.data;
  console.log(routesData);

  const handleSetNewLimit = (newLimit: number) => {
    setNewLimit(newLimit);
    setPage(1);
  };

  const totalPages = Math.ceil((routesData?.total_count || 0) / limit);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) {
      newPage = 1;
    } else if (newPage > totalPages) {
      newPage = totalPages;
    }
    setPage(newPage);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="flex flex-col justify-between w-[960px]">
      {/* Первая строка: Найдено и сортировка */}
      <div className="flex flex-row justify-between mb-[30px]">
        <div className="founded-trains">Найдено: {routesData?.total_count}</div>
        <div className="founded-trains-right-col">
          <div className="flex flex-row gap-[20px]">
            <label htmlFor="options-select">Сортировать по:</label>
            <select
              name="options"
              id="options-select"
              className="border border-gray-300 rounded"
            >
              <option value=""></option>
              <option value="date">Времени</option>
              <option value="time">Стоимости</option>
              <option value="duration">Длительности</option>
            </select>
            <div className="flex flex-row gap-[10px]">
              показывать по:
              <span
                onClick={() => handleSetNewLimit(5)}
                className="cursor-pointer"
              >
                5
              </span>
              <span
                onClick={() => handleSetNewLimit(10)}
                className="cursor-pointer"
              >
                10
              </span>
              <span
                onClick={() => handleSetNewLimit(20)}
                className="cursor-pointer"
              >
                20
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Вторая строка: Детали поездов */}
      <div className="flex flex-col gap-[25px] mb-[30px]">
        {routesData && <TrainDetailCard routesData={routesData} />}
      </div>

      {/* Третья строка: Пагинация */}
      <div className="flex self-end gap-[15px]">
        {/* Кнопка "Назад" */}
        <div
          onClick={() => handlePageChange(page - 1)}
          className="flex items-center justify-center w-[50px] p-[10px_15px] border border-[#E4E0E9] text-[#928F94] cursor-pointer hover:border-[#FFA800] hover:bg-white hover:text-[#FFA800]"
        >
          <PrevPageIcon />
        </div>

        {/* Страницы пагинации */}
        {page > 1 && (
          <div
            onClick={() => handlePageChange(page - 1)}
            className={`flex items-center justify-center w-[50px] p-[10px_15px] border cursor-pointer ${
              page - 1 === page
                ? "border-[#FFA800] bg-white text-[#FFA800]"
                : "border-[#E4E0E9] text-[#928F94] hover:border-[#FFA800] hover:bg-white hover:text-[#FFA800]"
            }`}
          >
            {page - 1}
          </div>
        )}
        <div
          className={`flex items-center justify-center w-[50px] p-[10px_15px] border cursor-pointer ${
            page === page
              ? "border-[#FFA800] bg-[#FFA800] text-white"
              : "border-[#E4E0E9] text-[#928F94] hover:border-[#FFA800] hover:bg-white hover:text-[#FFA800]"
          }`}
        >
          {page}
        </div>
        {page < totalPages && (
          <div
            onClick={() => handlePageChange(page + 1)}
            className={`flex items-center justify-center w-[50px] p-[10px_15px] border cursor-pointer ${
              page + 1 === page
                ? "border-[#FFA800] bg-white text-[#FFA800]"
                : "border-[#E4E0E9] text-[#928F94] hover:border-[#FFA800] hover:bg-white hover:text-[#FFA800]"
            }`}
          >
            {page + 1}
          </div>
        )}

        {/* Кнопка "Вперед" */}
        <div
          onClick={() => handlePageChange(page + 1)}
          className="flex items-center justify-center w-[50px] p-[10px_15px] border border-[#E4E0E9] text-[#928F94] cursor-pointer hover:border-[#FFA800] hover:bg-white hover:text-[#FFA800]"
        >
          <NextPageIcon />
        </div>
      </div>
    </div>
  );
};

export default TrainDetails;

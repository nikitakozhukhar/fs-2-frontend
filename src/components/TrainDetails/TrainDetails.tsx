import { useSearchDirectionStore } from "../../store/searchDirectionStore";
import { useCitiesQuery } from "../../utils/useCitiesQuery";
import { useRoutesQuery } from "../../utils/useRoutesQuery";
import TrainDetailCard from "../TrainDetailCard/TrainDetailCard";
import { IRoute } from "../../../src/utils/api/fetchRoutes";
import { UseQueryResult } from "@tanstack/react-query";
import PrevPageIcon from "../../img/svg/prevPage.svg?react";
import NextPageIcon from "../../img/svg/nextPage.svg?react";

import LoadingTrain from "../LoadingTrain/LoadingTrain";

const TrainDetails = () => {
  const { fromCityGlobal, toCityGlobal } = useSearchDirectionStore();

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

  const fromCityId = fromCities?.[0]?._id ?? '';
  const toCityId = toCities?.[0]?._id ?? '';

  // Получаем маршруты с сервера
  const fromRoutes: UseQueryResult<IRoute, Error> = useRoutesQuery(
    fromCityId,
    toCityId
  );

  // Проверяем статус запроса
  if (fromRoutes.isLoading) {
    return <LoadingTrain />;
  }

  const routesData = fromRoutes.data;

  return (
    <div className="flex flex-col justify-between w-[960px]">
      {/* Первая строка: Найдено и сортировка */}
      <div className="flex flex-row justify-between mb-[30px]">
        <div className="founded-trains">Найдено: {routesData?.items?.length}</div>
        <div className="founded-trains-right-col">
          <div className="flex flex-row gap-[20px]">
            <label htmlFor="options-select">Сортировать по:</label>
            <select name="options" id="options-select" className="border border-gray-300 rounded">
              <option value=""></option>
              <option value="time">Времени</option>
              <option value="cost">Стоимости</option>
              <option value="duration">Длительности</option>
            </select>
            <div className="flex flex-row gap-[10px]">
              показывать по:
              <span className="cursor-pointer">5</span>
              <span className="cursor-pointer">10</span>
              <span className="cursor-pointer">20</span>
            </div>
          </div>
        </div>
      </div>

      {/* Вторая строка: Детали поездов */}
      <div className="flex flex-col gap-[25px] mb-[30px]">
        <TrainDetailCard routesData={routesData} />
      </div>

      {/* Третья строка: Пагинация */}
      <div className="flex self-end gap-[15px]">
        {/* Кнопка "Назад" */}
        <div className="flex items-center justify-center w-[50px] p-[10px_15px] border border-[#E4E0E9] text-[#928F94] cursor-pointer hover:border-[#FFA800] hover:bg-white hover:text-[#FFA800]">
          <PrevPageIcon />
        </div>

        {/* Страницы пагинации */}
        <div className="flex items-center justify-center w-[50px] p-[10px_15px] border border-[#E4E0E9] text-[#928F94] cursor-pointer hover:border-[#FFA800] hover:bg-white hover:text-[#FFA800] pagination-active">
          1
        </div>
        <div className="flex items-center justify-center w-[50px] p-[10px_15px] border border-[#E4E0E9] text-[#928F94] cursor-pointer hover:border-[#FFA800] hover:bg-white hover:text-[#FFA800]">
          2
        </div>
        <div className="flex items-center justify-center w-[50px] p-[10px_15px] border border-[#E4E0E9] text-[#928F94] cursor-pointer hover:border-[#FFA800] hover:bg-white hover:text-[#FFA800]">
          3
        </div>

        {/* Кнопка "Вперед" */}
        <div className="flex items-center justify-center w-[50px] p-[10px_15px] border border-[#E4E0E9] text-[#928F94] cursor-pointer hover:border-[#FFA800] hover:bg-white hover:text-[#FFA800]">
          <NextPageIcon />
        </div>
      </div>
    </div>
  );
};

export default TrainDetails;
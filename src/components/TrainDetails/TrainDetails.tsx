import { useState } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { IRoute } from "../../../src/utils/api/fetchRoutes";
import { useCitiesQuery } from "../../utils/useCitiesQuery";
import { useRoutesQuery } from "../../utils/useRoutesQuery";
import { useSearchDirectionStore } from "../../store/searchDirectionStore";
import LoadingTrain from "../LoadingTrain/LoadingTrain";
import TrainDetailCard from "../TrainDetailCard/TrainDetailCard";
import CustomSelect from "../CustomSelect/CustomSelect";
import PrevPageIcon from "../../img/svg/prevPage.svg?react";
import NextPageIcon from "../../img/svg/nextPage.svg?react";

const TrainDetails = () => {
  const { fromCityGlobal, toCityGlobal } = useSearchDirectionStore();
  const [limit, setNewLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");

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

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setPage(1);
  };

  return (
    <div className="flex flex-col justify-between w-[960px]">
      <div className="flex flex-row justify-between mb-[30px]">
        <div className="founded-trains">Найдено: {routesData?.total_count}</div>
        <div className="founded-trains-right-col">
          <div className="flex flex-row gap-[20px]">
            <label htmlFor="options-select">Сортировать по:</label>
            <CustomSelect value={sortBy} onChange={handleSortChange} />
            <div className="flex flex-row items-center gap-2 text-gray-700">
              <span>показывать по:</span>
              {[5, 10, 20].map((count) => (
                <span
                  key={count}
                  onClick={() => handleSetNewLimit(count)}
                  className={`
                    ${limit === count ? "text-[#FAA800]" : ""}
          cursor-pointer px-3 py-1 rounded-md
          hover:bg-[#FFCA62] hover:text-white active:bg-[#FAA800]
          transition-colors duration-200
        `}
                >
                  {count}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[25px] mb-[30px]">
        {routesData && <TrainDetailCard routesData={routesData} />}
      </div>

      <div className="flex self-end gap-[15px]">
        <div
          onClick={() => handlePageChange(page - 1)}
          className="flex items-center justify-center w-[50px] p-[10px_15px] border border-[#E4E0E9] text-[#928F94] cursor-pointer hover:border-[#FFA800] hover:bg-white hover:text-[#FFA800]"
        >
          <PrevPageIcon />
        </div>

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

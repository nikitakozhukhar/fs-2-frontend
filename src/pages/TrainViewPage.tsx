import Header from "../components/Header/Header";
import ProgressPageBar from "../components/ProgressPageBar/ProgressPageBar";
import FilterWidget from "../components/FilterWidget/FilterWidget";
import LastTickets from "../components/LastTickets/LastTickets";
import TrainDetails from "../components/TrainDetails/TrainDetails";

import { useSearchDirectionStore } from "../store/searchDirectionStore";
import { useCitiesQuery } from "../utils/useCitiesQuery";
import { useRoutesQuery } from "../utils/useRoutesQuery";
import { UseQueryResult } from "@tanstack/react-query";
import LoadingTrain from "../components/LoadingTrain/LoadingTrain";
import { IRoute } from "../../src/utils/api/fetchRoutes";
import { useState } from "react";

const TrainViewPage = () => {

  const { fromCityGlobal, toCityGlobal } = useSearchDirectionStore();

  const {
    data: fromCities,
  } = useCitiesQuery(fromCityGlobal.name);

  const {
    data: toCities,
  } = useCitiesQuery(toCityGlobal.name);

  const [limit, setNewLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('');

  const fromCityId = fromCities?.[0]?._id ?? "";
  const toCityId = toCities?.[0]?._id ?? "";

  const fromRoutes: UseQueryResult<IRoute, Error> = useRoutesQuery(
    fromCityId,
    toCityId,
    limit,
    page,
    sortBy
  );

  return (
    <div className="flex flex-col min-h-screen">
    <Header location={"train"} text={false} />
    <ProgressPageBar />
    
    <main className="flex-grow relative">
        <div className="container mx-auto max-w-[1200px] w-full py-8 px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="aside-widgets md:w-1/4 mr-8">
              <FilterWidget />
              <LastTickets />
            </aside>
            <section className="train-details-container md:w-3/4">
              <TrainDetails />
            </section>
          </div>
        </div>

        {fromRoutes.isLoading && (
          <div className="absolute -mt-12 inset-0 bg-[#3E3C41] bg-opacity-90 flex items-center justify-center z-50">
            <LoadingTrain />
          </div>
        )}
      </main>
  </div>
  );
};

export default TrainViewPage;

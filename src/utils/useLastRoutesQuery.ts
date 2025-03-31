import { useQuery } from "@tanstack/react-query";
import { fetchLastRoutes } from "./api/fetchLastRoutes";

export const useLastRoutesQuery = () => {
  return useQuery({
    queryKey: ['lastRoutes'],
    queryFn: () => fetchLastRoutes(),
  })
}
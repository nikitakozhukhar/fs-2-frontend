import { useQuery } from "@tanstack/react-query";
import { fetchRoutes } from "./api/fetchRoutes";

export const useRoutesQuery = (
  fromCityId: string,
  toCityId: string,
  limits: number,
  offset: number,
  sort: string) => {
  return useQuery({
    queryKey: ['routes', fromCityId, toCityId, limits, offset, sort],
    queryFn: () => fetchRoutes(fromCityId, toCityId, limits, offset, sort),
    enabled: !!fromCityId && !!toCityId
  })
}
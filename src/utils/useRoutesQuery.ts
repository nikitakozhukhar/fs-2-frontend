import { useQuery } from "@tanstack/react-query";
import { fetchRoutes } from "./api/fetchRoutes";

export const useRoutesQuery = (from_city_id: string, to_city_id: string) => {
  return useQuery({
    queryKey:['routes', from_city_id, to_city_id],
    queryFn: () => fetchRoutes(from_city_id, to_city_id),
    enabled: !!from_city_id && !!to_city_id
  })
}
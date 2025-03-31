import { useQuery } from "@tanstack/react-query";
import { fetchCities } from "./api/fetchCities";

export const useCitiesQuery = (query: string) => {
  return useQuery({
    queryKey: ["cities", query],
    queryFn: () => fetchCities(query),
    enabled: query.length > 0,
    staleTime: 1000 * 60 * 5,
  });
};

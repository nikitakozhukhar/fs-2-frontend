import { useQuery } from "@tanstack/react-query";
import { fetchSeats } from "./api/fetchSeats";

export const useSeatsQuery = (query:string) => {
  return useQuery({
    queryKey: ['seats', query],
    queryFn: () => fetchSeats(query),
    enabled: !!query,
  });
};

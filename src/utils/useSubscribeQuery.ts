import { useQuery } from "@tanstack/react-query";
import { fetchSubscribe } from "./api/fetchSubscribe";

export const useSubscribeQuery = (email: string) => {
  return useQuery({
    queryKey: ['subscribe', email],
    queryFn: () => fetchSubscribe(email),
    enabled: email.length > 0,
    staleTime: 1000 * 60 * 5,
  });
};

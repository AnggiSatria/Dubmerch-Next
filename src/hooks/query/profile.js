import { getProfiles } from "@/lib";
import { useQuery } from "@tanstack/react-query";

export const readProfiles = (activeFilter) => {
  return useQuery({
    queryKey: ["profiles", activeFilter],
    queryFn: async () => await getProfiles(activeFilter),
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};

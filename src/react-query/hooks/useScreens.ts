import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import screenService from "../services/screenService";

const useScreens = (gameId: number) => {
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => screenService(gameId).getAll(),
    staleTime: ms("24h"),
  });
};

export default useScreens;

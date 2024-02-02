import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import trailerService from "../services/trailerService";

const useTrailers = (gameId: number) => {
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: () => trailerService(gameId).getAll(),
    staleTime: ms("24h"),
  });
};

export default useTrailers;

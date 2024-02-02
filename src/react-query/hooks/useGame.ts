import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAME } from "../constants";
import gameService from "../services/gameService";

const useGame = (slug: string) => {
  return useQuery({
    queryKey: [CACHE_KEY_GAME, slug], // everytime slug changes react query will fetch another game from the back-end
    queryFn: () => gameService.get(slug),
    staleTime: ms("1h"),
  });
};

export default useGame;

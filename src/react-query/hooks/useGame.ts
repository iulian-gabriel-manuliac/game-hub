import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import gameService from "../services/gameService";

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug], // everytime slug changes react query will fetch another game from the back-end
    queryFn: () => gameService.get(slug),
    staleTime: ms("1h"),
  });
};

export default useGame;

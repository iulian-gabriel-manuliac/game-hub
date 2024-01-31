import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/apiClient";
import gameService from "../services/gameService";
import { GameQuery } from "../../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGames;

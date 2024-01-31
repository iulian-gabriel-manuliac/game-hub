import { useQuery } from "@tanstack/react-query";
import genresData from "../../data/genres";
import { CACHE_KEY_GENRES } from "../constants";
import genreService from "../services/genreService";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.getAll,
    staleTime: ms("24h"),
    initialData: genresData,
  });
};

export default useGenres;

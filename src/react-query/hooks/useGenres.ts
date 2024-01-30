import { useQuery } from "@tanstack/react-query";
import genres from "../../data/genres";
import { CACHE_KEY_GENRES } from "../constants";
import genreService from "../services/genreService";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    //initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;

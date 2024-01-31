import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_PLATFORMS } from "../constants";
import platformService from "../services/platformService";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.getAll,
    staleTime: ms("10s"),
  });
};

export default usePlatforms;

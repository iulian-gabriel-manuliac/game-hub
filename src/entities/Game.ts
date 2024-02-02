import Genre from "./Genre";
import Platform from "./Platform";
import Publisher  from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  publishers: Publisher[];
  rating_top: number;
  slug: string;
  description_raw: string;
}

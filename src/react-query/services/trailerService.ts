import { Trailer } from "../../entities/Trailer";
import APIClient from "./apiClient";

const trailerService = (id: number) => {
  return new APIClient<Trailer>(`/games/${id}/movies`);
};

export default trailerService;

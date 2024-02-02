import APIClient from "./apiClient";
import { Screen } from "../../entities/Screen";

const screenService = (id: number) => {
  return new APIClient<Screen>(`/games/${id}/screenshots`);
};

export default screenService;

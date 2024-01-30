import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7e9d913c93df48a297a405c4db10d9cf",
  },
});

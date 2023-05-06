import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "65a214dd7da343bd8520b43767877077",
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  // baseURL: "http://localhost:8080/api",
  params: {
    key: "4be7d1436c4c4e9aa1bbec389b508445",
  },
});

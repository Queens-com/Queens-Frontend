import axios from "axios";

const instance = axios.create({
  baseURL: "http://167.99.198.108",
});

export default instance;

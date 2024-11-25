import axios from "axios";
import { api_key } from "../config";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/",
});

instance.interceptors.request.use(
  (config) => {
    const appid = api_key;
    if (!config.params) {
      config.params = {};
    }
    config.params.appid = appid;
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;

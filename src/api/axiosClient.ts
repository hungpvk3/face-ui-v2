import axios from "axios";
import { userApi } from "./Users";

const instance = axios.create({
  baseURL: "https://facebook-api-v2.herokuapp.com/api/web",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: "Bearer " + localStorage.getItem("accessToken") ?? "",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshTokenRes = (await userApi.refreshToken()) as any;

      if (refreshTokenRes.success) {
        instance.defaults.headers.common["Authorization"] =
          "Bearer " + refreshTokenRes.accessToken;
        localStorage.setItem("accessToken", refreshTokenRes.accessToken);
        return instance(originalRequest);
      } else {
        instance.defaults.headers.common["Authorization"] = "Bearer " + null;
        localStorage.removeItem("refreshToken");
      }
    } else {
      return error.response.data;
    }

    return Promise.reject(error);
  }
);

export default instance;

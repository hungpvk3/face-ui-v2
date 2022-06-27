import axiosClient from "./axiosClient";

export const userApi = {
  register: async (data: any) => {
    return await axiosClient.post("users/", data);
  },
  login: async (data: { email: string; password: string }) => {
    return await axiosClient.post("users/login", data);
  },
  logout: async () => {
    return await axiosClient.post("users/logout", {
      refreshToken: localStorage.getItem("refreshToken"),
    });
  },
  verifyOtp: async (otp: string) => {
    return await axiosClient.patch("users/otp/verify", { otp });
  },
  resendOtp: async (email?: string) => {
    return await axiosClient.patch("users/otp/create", {
      email: localStorage.getItem("email") || email,
    });
  },
  refreshToken: async () => {
    return await axiosClient.post("users/token/refresh", {
      refreshToken: localStorage.getItem("refreshToken"),
    });
  },
  friendCount: async () => {
    return await axiosClient.get("users/friends");
  },
  followerCount: async () => {
    return await axiosClient.get("users/followers");
  },
  getMe: async () => {
    return await axiosClient.get("users/me");
  },
  getFriends: async (limit: number, page: number) => {
    return await axiosClient.get(`users/friends?limit=${limit}&page=${page}`);
  },
  getFollowers: async (limit: number, page: number) => {
    return await axiosClient.get(`users/followers?limit=${limit}&page=${page}`);
  },
};

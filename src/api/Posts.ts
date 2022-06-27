import axiosClient from "./axiosClient";

export const postApi = {
  getPostFell: async () => {
    return await axiosClient.get("posts/news?limit=5&page=1");
  },
};

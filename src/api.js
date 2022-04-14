import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "5cc72a8f41eb9b91b2f02e2aca853617",
    language: "ko",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
  upComing: () => api.get("movie/upcoming"),
  detail: (id) => api.get(`movie/${id}`),
};

import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
})

api.interceptors.request.use(async config => {
  config.params = {...config.params, api_key: `${process.env.REACT_APP_TOKEN_API}`, language: "pt-BR"}
  return config;
});

export default api;
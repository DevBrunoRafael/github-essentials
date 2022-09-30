import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (user) => api.get(`/users/${user}`);

export const getRepos = async (user) => api.get(`/users/${user}/repos`);

export default api;

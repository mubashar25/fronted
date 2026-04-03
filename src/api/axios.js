import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // vite
  // baseURL: process.env.REACT_APP_API_URL, // CRA
});

// 🔐 TOKEN AUTO ATTACH
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

export default API;
import axios from "axios";

const axiosAPIInstances = axios.create({
  baseURL: "https://vechicle-rental-backend.vercel.app/api",
});

// Add a request interceptor
axiosAPIInstances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      refreshtoken: localStorage.getItem("refreshtoken"),
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosAPIInstances;

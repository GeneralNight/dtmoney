import axios from 'axios';

const url = 'http://localhost:3000/api'

const axiosInstance = axios.create({
  baseURL: url,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const api = {  
  getTransactions() {
    return axiosInstance.get('/transactions')
  },
  createTransactions(body: any) {
    return axiosInstance.post('/transactions', body)
  }  
};
import axios from 'axios';
import { Transaction, TransactionInput } from '../types';

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
  async createTransactions(body: TransactionInput): Promise<{transaction:Transaction}> {
    return axiosInstance.post('/transactions', body).then(res=> {
      return res.data
    })
  },
  async deleteTransaction(transactionId:number) {
    return axiosInstance.delete(`/transactions/${transactionId}`).then(res=> {
      return res.data
    })
  }
};
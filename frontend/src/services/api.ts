
import axios, { InternalAxiosRequestConfig } from 'axios';
import { BurialOrder, FuneralEvent, DriverSchedule, Payment, Plot } from '../types';

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? '/api'
    : 'http://0.0.0.0:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const burialAPI = {
  getBurialOrders: () => api.get<ApiResponse<BurialOrder[]>>('/burial/orders/'),
};

export const scheduleAPI = {
  getFuneralSchedule: () => api.get<ApiResponse<FuneralEvent[]>>('/scheduling/schedule/'),
  getDriverSchedule: () => api.get<ApiResponse<DriverSchedule[]>>('/scheduling/driver-schedule/'),
};

export const paymentAPI = {
  getPayments: () => api.get<ApiResponse<Payment[]>>('/payments/'),
};

export const plotAPI = {
  getPlots: () => api.get<ApiResponse<Plot[]>>('/cemetery/plots/'),
};

export default api;

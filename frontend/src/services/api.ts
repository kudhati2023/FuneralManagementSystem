
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { BurialOrder, FuneralEvent, ApiResponse } from '../types';

// API response types
interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? '/api'  // Production URL
    : 'http://0.0.0.0:8000/api', // Development URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const burialAPI = {
  getBurialOrders: (): Promise<AxiosResponse<ApiResponse<BurialOrder[]>>> => 
    api.get('/burial/orders/'),
};

export const scheduleAPI = {
  getFuneralSchedule: (): Promise<AxiosResponse<ApiResponse<FuneralEvent[]>>> => 
    api.get('/scheduling/schedule/'),
};

export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
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

// API endpoints
export const mortuaryAPI = {
  getDeceasedRecords: () => api.get('/mortuary/records/'),
  getDeceasedRecord: (id) => api.get(`/mortuary/records/${id}/`),
  createDeceasedRecord: (data) => api.post('/mortuary/records/', data),
  updateDeceasedRecord: (id, data) => api.put(`/mortuary/records/${id}/`, data),
  deleteDeceasedRecord: (id) => api.delete(`/mortuary/records/${id}/`),
};

export const burialAPI = {
  getBurialOrders: () => api.get('/burial/orders/'),
  getBurialOrder: (id) => api.get(`/burial/orders/${id}/`),
  createBurialOrder: (data) => api.post('/burial/orders/', data),
  updateBurialOrder: (id, data) => api.put(`/burial/orders/${id}/`, data),
  deleteBurialOrder: (id) => api.delete(`/burial/orders/${id}/`),
};

export const plotAPI = {
  getPlots: () => api.get('/cemetery/plots/'),
  getPlot: (id) => api.get(`/cemetery/plots/${id}/`),
  bookPlot: (data) => api.post('/cemetery/bookings/', data),
  updateBooking: (id, data) => api.put(`/cemetery/bookings/${id}/`, data),
};

export const paymentAPI = {
  getPayments: () => api.get('/payments/'),
  createPayment: (data) => api.post('/payments/', data),
  getPaymentHistory: (deceasedId) => api.get(`/payments/history/${deceasedId}/`),
};

export const scheduleAPI = {
  getFuneralSchedule: () => api.get('/scheduling/schedule/'),
  createSchedule: (data) => api.post('/scheduling/schedule/', data),
  updateSchedule: (id, data) => api.put(`/scheduling/schedule/${id}/`, data),
};

export default api;
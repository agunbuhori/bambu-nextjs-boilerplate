import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_LOCAL,
  headers: {
    'Content-Type': 'application/json',
  },
});

if (typeof window !== 'undefined') {
  const token = localStorage.getItem('token');

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export default api;

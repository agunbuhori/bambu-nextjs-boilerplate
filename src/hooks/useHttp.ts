import type { AxiosInstance } from 'axios';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_LOCAL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const useHttp = () => {
  /**
   * If need authorization
   *
   * @returns AxiosInstance
   */
  const auth = (): AxiosInstance => {
    const token = window.localStorage.getItem('token');
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    return instance;
  };

  /**
   * If don't need authorization
   *
   * @returns AxiosInstance
   */
  const guest = (): AxiosInstance => {
    return instance;
  };

  return { auth, guest };
};

export default useHttp;

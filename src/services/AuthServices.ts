import type { Response } from '@/interfaces/Response';
import api from '@/libs/api';

import type { User } from '../interfaces/User';

export const authenticate = async (credentials: {
  username: string;
  password: string;
}): Promise<boolean> => {
  const loginRequest = await api.post('v1/auth/login', credentials);

  if (loginRequest.data.code === 200) {
    window.localStorage.setItem('token', loginRequest.data.data);

    return true;
  }

  return false;
};

export const getCurrentUser = async (): Promise<User | undefined | boolean> => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('token')) {
      try {
        const request = await api.get<Response<User>>('/v1/auth/user');
        return request.data.data;
      } catch (error) {
        console.error(error);
      }
    }
    return false;
  }
  return false;
};

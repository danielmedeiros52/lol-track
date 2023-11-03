import { refreshToken } from '@/actions/authentication';
import axios from 'axios';
import { getSession } from 'next-auth/react';

const instance = axios.create({
  baseURL: process.env.BACKEND_URL
});

instance.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session) {
      config.headers['Authorization'] = `Bearer ${session.user.access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const session = await getSession();

    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshToken(session?.user.refresh);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return instance(originalRequest);
    }
    
    return Promise.reject(error);
  }
);

export default instance;

import axios from 'axios';
import { TOKEN } from '@/src/utils/constant';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_DOMAIN,
});

axiosInstance.interceptors.request.use(
  ($config) => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      $config.headers.Authorization = `Bearer ${token}`;
    }
    return $config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response?.data || response,
  (error) => Promise.reject(error?.response?.data || error?.response || error),
);

export default axiosInstance;

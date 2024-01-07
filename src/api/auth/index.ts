import axiosInstance from '@/src/api/axios';

export interface AuthType {
  id?: number;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  image?: string;
  token?: string;
}

const authLogin = async (params?: {
  username: string;
  password: string;
}): Promise<AuthType> => {
  return axiosInstance.post('/auth/login', params);
};

export { authLogin };

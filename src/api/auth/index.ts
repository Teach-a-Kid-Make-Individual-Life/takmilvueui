import axiosInstance from '@/src/api/axios';


export interface UserType {
  _id?: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  imageUrl?: string;
  languages?: string;
  role?: string;
}

export interface AuthResponse {
  accessToken: string;
  expiresIn: number;
  roleType: string;
  tokenType: string;
  user: UserType;
}

const authLogin = async (params?: {
  username: string;
  password: string;
}): Promise<AuthResponse> => {
  return axiosInstance.post('/people/auth/login', params);
};

export { authLogin };

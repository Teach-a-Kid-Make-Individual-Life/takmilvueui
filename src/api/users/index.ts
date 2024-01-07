import axiosInstance from '@/src/api/axios';
import type { PaginationResponse } from '@/src/api/types';

export interface UserType {
  id?: number;
}

export interface ListUserResponse extends PaginationResponse {
  users?: UserType[];
}

const getListUser = async (
  params?: PaginationResponse,
): Promise<ListUserResponse> => {
  return axiosInstance.get('/users', { params });
};

export { getListUser };

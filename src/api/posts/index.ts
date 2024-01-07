import axiosInstance from '@/src/api/axios';
import type { PaginationResponse } from '@/src/api/types';

export interface PostType {
  id?: number;
}

export interface ListPostResponse extends PaginationResponse {
  posts?: PostType[];
}

const getListPost = async (
  params?: PaginationResponse,
): Promise<ListPostResponse> => {
  return axiosInstance.get('/posts', { params });
};

export { getListPost };

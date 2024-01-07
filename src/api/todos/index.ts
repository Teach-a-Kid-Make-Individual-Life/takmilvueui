import axiosInstance from '@/src/api/axios';
import type { PaginationResponse } from '@/src/api/types';

export interface TodyType {
  id?: number;
}

export interface ListTodoResponse extends PaginationResponse {
  todos?: TodyType[];
}

const getListTodo = async (
  params?: PaginationResponse,
): Promise<ListTodoResponse> => {
  return axiosInstance.get('/todos', { params });
};

export { getListTodo };

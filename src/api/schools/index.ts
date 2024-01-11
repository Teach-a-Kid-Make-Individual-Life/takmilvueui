import axiosInstance from '@/src/api/axios';
import type { PaginationResponse } from '@/src/api/types';

export interface SchoolType {
  _id?: number;
  name?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
  order?: number;
}

export type ProductValues = keyof SchoolType;

export interface ProductHeader {
  key?: ProductValues;
  label?: string;
}

export interface ListSchoolResponse extends PaginationResponse {
  data?: SchoolType[];
}

const getListSchools = async (
  params?: PaginationResponse,
): Promise<ListSchoolResponse> => {
  return axiosInstance.get('/schools', { params });
};

const getSchoolCount = async (): Promise<Number> => {
  return axiosInstance.get('/schools/count');
};

export { getListSchools as getListSchool, getSchoolCount };

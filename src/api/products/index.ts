import axiosInstance from '@/src/api/axios';
import type { PaginationResponse } from '@/src/api/types';

export interface ProductType {
  id?: number;
  title?: string;
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

export type ProductValues = keyof ProductType;

export interface ProductHeader {
  key?: ProductValues;
  label?: string;
}

export interface ListProductResponse extends PaginationResponse {
  products?: ProductType[];
}

const getListProduct = async (
  params?: PaginationResponse,
): Promise<ListProductResponse> => {
  return axiosInstance.get('/products', { params });
};

export { getListProduct };

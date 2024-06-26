import axiosInstance from '@/src/api/axios';
import type { PaginationResponse } from '@/src/api/types';

export interface SchoolType {
  _id?: number;
  name?: string;
  status?: string;
  address?: {
    _id?: string
    district?: string;
    state?: string;
  }
  startYear?: number;
  teacher?: {
    _id?: string
    firstName?: string
    lastName?: string
  }
  coordinator?: {
    _id?: string
    firstName?: string
    lastName?: string
  }
  regionalCoordinator?: {
    _id?: string
    firstName?: string
    lastName?: string
  }
}

export type SchoolValues = keyof SchoolType;

export interface SchoolHeader {
  key?: SchoolValues;
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

import { AxiosError } from "axios";
import { ApiResponse } from "../../api/interfaces/ApiResponse";
import { apiDelivery } from "../../api/remote/apiService";
import { User } from "../entities/User";

export const authService = {
  login: async (email: string, password: string): Promise<ApiResponse> => {
    try {
        const { data } = await apiDelivery.post<ApiResponse>('login', { email, password });
        return data;
    } catch (error) {
        const err = error as AxiosError;
        const apiError: ApiResponse = err.response?.data as ApiResponse;
        return Promise.reject(apiError);
    }
  },
  register: async (user: User): Promise<ApiResponse> => {
    try {
      const { data } = await apiDelivery.post<ApiResponse>('register', user);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      const apiError: ApiResponse = err.response?.data as ApiResponse;
      return Promise.reject(apiError);
    }
  }
};
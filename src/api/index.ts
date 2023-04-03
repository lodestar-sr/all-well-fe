import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { API_BASE_URL, STORAGE_KEY } from '@constants';

export const $api = axios.create({
  baseURL: API_BASE_URL
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEY.token);
  config.headers.set('Authorization', `Bearer ${token}`);
  return config;
});

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(STORAGE_KEY.token);
      localStorage.removeItem(STORAGE_KEY.userProfile);
    }

    throw error.response;
  }
);

export class HttpService {
  static get<T = any>(url: string, option: AxiosRequestConfig = {}) {
    return HttpService.request<T>('GET', url, { ...option });
  }

  static post<T, K = any>(url: string, body?: K, headers: any = {}) {
    return HttpService.request<T>('POST', url, { data: body, headers });
  }

  static put<T>(url: string, body: any = {}, headers: any = {}) {
    return HttpService.request<T>('PUT', url, { data: body, headers });
  }

  static patch<T>(url: string, body: any = {}, headers: any = {}) {
    return HttpService.request<T>('PATCH', url, { data: body, headers });
  }

  static delete<T>(url: string, body: any = {}, headers: any = {}) {
    return HttpService.request<T>('DELETE', url, { data: body, headers });
  }

  static request<T>(
    method: Method,
    url: string,
    options: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return $api
      .request<T>({
        ...options,
        method,
        url
      })
      .catch((e) => {
        throw e;
      });
  }
}

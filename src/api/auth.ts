import { HttpService } from '@/api/index';
import { SignInResponse } from './types';

export const signIn = (email: string, password: string) => {
  return HttpService.post<SignInResponse>('/auth/login', { email, password });
};

export const signUp = (email: string, password: string) => {
  return HttpService.post('/auth/register', { email, password });
};

export const forgotPassword = (email: string) => {
  return HttpService.post('/auth/forgot-password', { email });
};

export const createPassword = (password: string, token: string) => {
  return HttpService.post('/auth/create-password', { password, token });
};

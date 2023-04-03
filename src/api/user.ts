import { GetMyProfileResponse } from './types';
import { HttpService } from '@/api/index';

export const getMyProfile = () => {
  return HttpService.get<GetMyProfileResponse>('/users/me');
};

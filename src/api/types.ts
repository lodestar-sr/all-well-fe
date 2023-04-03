export interface GetUserOrganizationsResponse {
  organisations: {
    id: string;
    name: string;
    parent_id: string;
  }[];
}

export interface GetMyProfileResponse {
  id: number;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface SignInResponse {
  access_token: string;
}

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { getMyProfile } from '@/api/user';
import { GetMyProfileResponse } from '@/api/types';
import { STORAGE_KEY } from '@constants';
import { createPassword, forgotPassword, signIn, signUp } from '@/api/auth';

interface AuthState {
  token: string;
  setToken: (token: string) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  getMyProfile: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  createPassword: (password: string, token: string) => Promise<void>;

  isLoadingUserSession: boolean;
  userProfile?: GetMyProfileResponse;

  tempRegisterEmail: string;
  setTempRegisterEmail: (email: string) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLoadingUserSession: false,

        token: '',
        setToken: (token) => set({ token }),

        tempRegisterEmail: '',
        setTempRegisterEmail: (email) => set({ tempRegisterEmail: email }),

        async forgotPassword(email) {
          await forgotPassword(email);
        },
        async createPassword(password, token) {
          await createPassword(password, token);
        },

        async signOut() {
          set({
            token: '',
            userProfile: undefined
          });
          localStorage.removeItem(STORAGE_KEY.token);
          localStorage.removeItem(STORAGE_KEY.userProfile);
        },
        async getMyProfile() {
          await getMyProfile().then((data) => {
            localStorage.setItem(
              STORAGE_KEY.userProfile,
              JSON.stringify(data.data)
            );
            return data;
          });
        },
        async signIn(email, password) {
          await signIn(email, password).then((data) => {
            localStorage.setItem(STORAGE_KEY.token, data.data.access_token);
            return data;
          });
        },
        async signUp(email, password) {
          await signUp(email, password);
        }
      }),
      {
        name: 'auth'
      }
    )
  )
);

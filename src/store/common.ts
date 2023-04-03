import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface CommonState {
  loadingAPICount: number;
}

export const useCommonStore = create<CommonState>()(
  devtools(
    persist(
      (set) => ({
        loadingAPICount: 0,
        addLoadingAPICount: () =>
          set((state) => ({
            loadingAPICount: state.loadingAPICount + 1
          })),
        removeLoadingAPICount: () =>
          set((state) => ({
            loadingAPICount: state.loadingAPICount - 1
          }))
      }),
      {
        name: 'auth'
      }
    )
  )
);

import { create } from 'zustand';
import { User } from '../../common-types/src/index';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
}));

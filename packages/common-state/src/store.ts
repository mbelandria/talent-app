import { create } from "zustand";
import { User } from "common-types";

console.log(
  "%c[MFE] common-state module executed",
  "color: red; font-weight: bold;"
);

export interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

import { create } from 'zustand';

type RegisterStore = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isLoading: boolean;
  setFirstname: (firstname: string) => void;
  setLastname: (lastname: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setIsLoading: (isLoading: boolean) => void;
};

const useRegisterStore = create<RegisterStore>((set) => ({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  isLoading: false,
  setFirstname: (firstname) => set({ firstname }),
  setLastname: (lastname) => set({ lastname }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useRegisterStore;
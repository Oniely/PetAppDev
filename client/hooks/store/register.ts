import { create } from 'zustand';

type RegisterStore = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  setFirstname: (firstname: string) => void;
  setLastname: (lastname: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
};

const useRegisterStore = create<RegisterStore>((set) => ({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  setFirstname: (firstname) => set({ firstname }),
  setLastname: (lastname) => set({ lastname }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));

export default useRegisterStore;
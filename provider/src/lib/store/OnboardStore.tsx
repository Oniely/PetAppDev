import { create } from 'zustand';

interface OnboardedState {
	onboarded: boolean;
	setOnboarded: (value: boolean) => void;
}

export const useOnboarded = create<OnboardedState>()((set) => ({
	onboarded: false,
	setOnboarded: (value) => set({ onboarded: value })
}))
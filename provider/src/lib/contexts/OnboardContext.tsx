"use client";

import { createContext, useEffect } from "react"
import { useOnboarded } from "../store/OnboardStore";
import { redirect, usePathname } from "next/navigation";

const OnboardContext = createContext(null);

const OnboardedContextProvider = ({ children }: { children: React.ReactNode }) => {
	const { onboarded, setOnboarded } = useOnboarded();
	const pathname = usePathname();

	useEffect(() => {
		console.log(pathname);
		if (!onboarded && pathname !== '/onboarding') {
			redirect('/onboarding');
		}
	}, [])

	return (
		<OnboardContext.Provider value={null}>
			{children}
		</OnboardContext.Provider>
	)
}

export default OnboardedContextProvider
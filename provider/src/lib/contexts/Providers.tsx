import { ClerkProvider } from "@clerk/nextjs";
import OnboardedContextProvider from "./OnboardContext";

interface Props {
	children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
	return (
		<ClerkProvider>
			<OnboardedContextProvider>
				{children}
			</OnboardedContextProvider>
		</ClerkProvider>
	);
};

export default Providers;

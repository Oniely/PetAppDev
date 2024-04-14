import useRegisterStore from "@/hooks/store/register";
import { router, Stack } from "expo-router";
import Spinner from "react-native-loading-spinner-overlay";

const RegisterLayout = () => {
	const { isLoading } = useRegisterStore();

	return (
		<>
			<Spinner visible={isLoading} />
			<Stack screenOptions={{ headerShown: false }} />
		</>
	);
};

export default RegisterLayout;

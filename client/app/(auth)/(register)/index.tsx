import SignUpScreen from "@/components/clerk/SignUpScreen";
import useRegisterStore from "@/hooks/store/register";
import { router } from "expo-router";

const SignUp = () => {
	const { pendingVerification } = useRegisterStore();

	return (
		<>
			<SignUpScreen />
		</>
	);
};

export default SignUp;

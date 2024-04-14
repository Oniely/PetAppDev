import Colors from "@/constants/Colors";
import useRegisterStore from "@/hooks/store/register";
import { useAuth, useSignUp } from "@clerk/clerk-expo";
import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaView } from "react-native-safe-area-context";

const Verify = () => {
	const { signUp, setActive, isLoaded } = useSignUp();
	const { userId } = useAuth();

	const {
		email,
	} = useRegisterStore();
	const [code, setCode] = useState("");
	const [timer, setTimer] = useState(30);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function signUp() {
			if (!userId) return;
			console.log("SignUpScreen", userId);
			await axios.post("/auth/sign-up", { userId });
		}

		signUp();
	}, [signUp]);

	useEffect(() => {
			if (timer > 0) {
				const timerCountInterval = setInterval(() => {
					setTimer(timer - 1);
				}, 1000);

				return () => clearInterval(timerCountInterval);
			}
	}, [timer]);

	const resendCode = async () => {
		if (!isLoaded) {
			return;
		}
		setLoading(true);

		try {
			// send the email.
			await signUp.prepareEmailAddressVerification({
				strategy: "email_code",
			});
		} catch (err: any) {
			alert(err.errors[0].message);
		} finally {
			setLoading(false);
		}
	};

	const onPressVerify = async () => {
		if (!isLoaded) {
			return;
		}

		setLoading(true);

		if (!code) {
			setLoading(false);
			alert("Enter Code");
			return;
		}

		try {
			const completeSignUp =
				await signUp.attemptEmailAddressVerification({
					code,
				});

			await setActive({ session: completeSignUp.createdSessionId });
		} catch (err: any) {
			alert(err.errors[0].message);
		} finally {
			setLoading(false);
		}
	};

	const onCancelPress = () => {
		router.replace("/(auth)/(register)");
	};

	return (
		<SafeAreaView className="flex-1 bg-orange-white">
			<Spinner visible={loading} />
			<ScrollView className="flex-1 px-4">
				<View className="flex-1 pt-6">
					<View>
						<Image
							source={require("@/assets/images/logo.png")}
							className="object-contain w-10 h-10"
						/>
					</View>
					<View className="mt-12">
						<Text
							style={{
								fontFamily: "Montserrat_600SemiBold",
							}}
							className="text-[50px] font-semibold text-gray-800 leading-[55px]"
						>
							Enter Code
						</Text>
						<Text
							style={{ fontFamily: "Montserrat_400Regular" }}
							className="pl-1 text-base text-gray-500"
						>
							We sen't a code to your email address:
						</Text>
						<Text
							style={{ fontFamily: "Poppins_500Medium" }}
							className="mt-3 text-base text-gray-600"
						>
							- {email}
						</Text>
					</View>
					<View className="h-[350px] items-center justify-center">
						<OtpInput
							numberOfDigits={6}
							focusColor={Colors["main-orange"]}
							onTextChange={(text) => setCode(text)}
							onFilled={(text) => {
								setCode(text);
							}}
							theme={{
								pinCodeContainerStyle: {
									height: 80,
									width: 60,
									borderWidth: 0,
									borderBottomWidth: 1,
									borderColor: Colors["dark-gray"],
								},
								pinCodeTextStyle: {
									fontFamily: "Montserrat_500Medium",
								},
							}}
						/>
						<Text
							style={{ fontFamily: "Poppins_500Medium" }}
							className="mt-6"
						>
							Resent Code in{" "}
							{timer > 0 ? (
								<Text className="text-main-orange">0: {timer}</Text>
							) : (
								<Text
									onPress={resendCode}
									style={{ fontFamily: "Poppins_500Medium" }}
									className="underline text-main-orange"
								>
									Send
								</Text>
							)}
						</Text>
					</View>
					<View className="justify-end flex-1 py-10 space-y-3">
						<TouchableOpacity
							onPress={onPressVerify}
							className="py-5 bg-main-orange rounded-xl"
						>
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-base text-center text-orange-white"
							>
								Verify Code
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={onCancelPress}
							className="py-5 border border-dark-gray rounded-xl"
						>
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-base text-center text-dark-gray"
							>
								Cancel
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Verify;

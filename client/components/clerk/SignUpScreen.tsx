import * as React from "react";
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import SignInWithOAuth from "./SignInWithOAuth";
import Spinner from "react-native-loading-spinner-overlay";
import { OtpInput } from "react-native-otp-entry";
import Colors from "@/constants/Colors";

export default function SignUpScreen() {
	const { isLoaded, signUp, setActive } = useSignUp();

	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [emailAddress, setEmailAddress] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [pendingVerification, setPendingVerification] = React.useState(false);
	const [code, setCode] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [timer, setTimer] = React.useState(60);

	React.useEffect(() => {
		if (pendingVerification === true) {
			if (timer > 0) {
				const timerCountInterval = setInterval(() => {
					setTimer(timer - 1);
				}, 1000);

				return () => clearInterval(timerCountInterval);
			}
		} else {
			setTimer(60);
		}
	}, [timer, pendingVerification]);

	// start the sign up process.
	const onSignUpPress = async () => {
		if (!isLoaded) {
			return;
		}
		setLoading(true);

		try {
			await signUp.create({
				firstName,
				lastName,
				emailAddress,
				password,
			});

			// send the email.
			await signUp.prepareEmailAddressVerification({
				strategy: "email_code",
			});

			// change the UI to our pending section.
			setPendingVerification(true);
		} catch (err: any) {
			alert(err.errors[0].message);
		} finally {
			setLoading(false);
		}
	};

	// This verifies the user using email code that is delivered.
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
			const completeSignUp = await signUp.attemptEmailAddressVerification(
				{
					code,
				}
			);

			await setActive({ session: completeSignUp.createdSessionId });
		} catch (err: any) {
			alert(err.errors[0].message);
		} finally {
			setLoading(true);
		}
	};

	const onCancelPress = () => {
		if (!isLoaded) {
			return;
		}
		setPendingVerification(false);
		router.replace('/(auth)/register');
	}

	return (
		<KeyboardAvoidingView className="flex-1 px-4 pt-6 bg-off-white" keyboardVerticalOffset={Platform.OS === 'android' ? 75 : 0}>
			<Spinner visible={loading} />
			{!pendingVerification && (
				<View className="flex-1 pt-6">
					<View>
						<Image
							source={require("@/assets/images/logo.png")}
							className="object-contain w-10 h-10"
						/>
					</View>
					<View className="mt-12">
						<View className="space-y-2">
							<View className="gap-1">
								<Text
									style={{
										fontFamily: "Montserrat_600SemiBold",
									}}
									className="text-[50px] font-semibold text-gray-800 leading-[55px]"
								>
									Create New
								</Text>
								<Text
									style={{
										fontFamily: "Montserrat_600SemiBold",
									}}
									className="text-[50px] font-semibold text-gray-800 leading-[55px]"
								>
									Account
								</Text>
							</View>
						</View>
						<View className="space-y-4 h-[420px]">
							<View>
								<Text
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									className="text-lg font-medium"
								>
									First Name
								</Text>
								<TextInput
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									placeholder="John"
									className="px-3 py-4 text-base border rounded-xl bg-off-white"
									value={firstName}
									onChangeText={(firstName) =>
										setFirstName(firstName)
									}
								/>
							</View>
							<View>
								<Text
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									className="text-lg font-medium"
								>
									Last Name
								</Text>
								<TextInput
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									placeholder="Doe"
									className="px-3 py-4 text-base border rounded-xl bg-off-white"
									value={lastName}
									onChangeText={(lastName) =>
										setLastName(lastName)
									}
								/>
							</View>
							<View>
								<Text
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									className="text-lg font-medium"
								>
									Email Address
								</Text>
								<TextInput
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									placeholder="example@gmail.com"
									className="px-3 py-4 text-base border rounded-xl bg-off-white"
									autoCapitalize="none"
									value={emailAddress}
									onChangeText={(emailAddress) =>
										setEmailAddress(emailAddress)
									}
								/>
							</View>
							<View>
								<Text
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									className="text-lg font-medium"
								>
									Password
								</Text>
								<TextInput
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									placeholder="Your password here"
									className="px-3 py-4 text-base border rounded-xl bg-off-white"
									autoCapitalize="none"
									value={password}
									secureTextEntry={true}
									onChangeText={(password) =>
										setPassword(password)
									}
								/>
								<Text
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									className="mt-1 text-[14px] underline"
								/>
							</View>
						</View>
						<View className="items-center">
							<TouchableOpacity
								onPress={onSignUpPress}
								className="items-center w-full py-4 rounded-xl bg-main-orange"
							>
								<Text
									style={{ fontFamily: "OpenSans_700Bold" }}
									className="text-lg text-neutral-100"
								>
									Sign Up
								</Text>
							</TouchableOpacity>
							<Text
								style={{ fontFamily: "OpenSans_400Regular" }}
								className="mt-2 text-sm"
							>
								Already a member?{" "}
								<Link href={"/login"} replace className="underline">
									Login Here
								</Link>
							</Text>
						</View>
					</View>
					<Text className="my-6 text-sm text-center text-gray-400">
						or
					</Text>
					<SignInWithOAuth />
				</View>
			)}

			{pendingVerification && (
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
							- {emailAddress}
						</Text>
					</View>
					<View className="h-[350px] items-center justify-center">
						<OtpInput
							numberOfDigits={6}
							focusColor={Colors["main-orange"]}
							onTextChange={(text) => setCode(text)}
							onFilled={(text) => onPressVerify}
							theme={{
								pinCodeContainerStyle: {
									height: 80,
									width: 60,
									borderWidth: 0,
									borderBottomWidth: 1,
								},
							}}
						/>
						<Text
							style={{ fontFamily: "Poppins_500Medium" }}
							className="mt-6"
						>
							Resent Code in{" "}
							{timer > 0 ? (
								<Text className="text-main-orange">
									0: {timer}
								</Text>
							) : (
								<Text
									onPress={onSignUpPress}
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
								className="text-base text-center text-off-white"
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
			)}
		</KeyboardAvoidingView>
	);
}

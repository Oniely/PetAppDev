import * as React from "react";
import {
	Image,
	SafeAreaView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import SignInWithOAuth from "./SignInWithOAuth";
import Spinner from "react-native-loading-spinner-overlay";

export default function SignUpScreen() {
	const { isLoaded, signUp, setActive } = useSignUp();

	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [emailAddress, setEmailAddress] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [pendingVerification, setPendingVerification] = React.useState(false);
	const [code, setCode] = React.useState("");
	const [loading, setLoading] = React.useState(false);

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
			setFirstName("");
			setLastName("");
			setEmailAddress("");
			setPassword("");
		}
	};

	// This verifies the user using email code that is delivered.
	const onPressVerify = async () => {
		if (!isLoaded) {
			return;
		}
		setLoading(true);

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
			setFirstName("");
			setLastName("");
			setEmailAddress("");
			setPassword("");
		}
	};

	return (
		<SafeAreaView className="pt-6 px-4 bg-off-white flex-1">
			<Spinner visible={loading} />
			{!pendingVerification && (
				<View className="pt-6 flex-1">
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
						<View className="space-y-4">
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
								<Link href={"/login"} className="underline">
									Login Here
								</Link>
							</Text>
						</View>
					</View>
					<Text className="text-gray-400 text-sm text-center my-6">
						or
					</Text>
					<SignInWithOAuth />
				</View>
			)}
			{pendingVerification && (
				<View>
					<View>
						<TextInput
							style={{
								fontFamily: "OpenSans_400Regular",
							}}
							placeholder="Code..."
							className="px-3 py-4 text-base border rounded-xl bg-off-white"
							value={code}
							onChangeText={(code) => setCode(code)}
						/>
					</View>
					<TouchableOpacity onPress={onPressVerify}>
						<Text>Verify Email</Text>
					</TouchableOpacity>
				</View>
			)}
		</SafeAreaView>
	);
}

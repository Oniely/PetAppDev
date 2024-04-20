import {
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import SignInWithOAuth from "./SignInWithOAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import useRegisterStore from "@/hooks/store/register";
import Spinner from "react-native-loading-spinner-overlay";
import { useState } from "react";

export default function SignUpScreen() {
	const { signUp, isLoaded } = useSignUp();
	const {
		firstname,
		lastname,
		email,
		password,
		
		setFirstname,
		setLastname,
		setEmail,
		setPassword,
	} = useRegisterStore();

	const [loading, setLoading] = useState(false);

	// start the sign up process.
	const onSignUpPress = async () => {
		if (!isLoaded) {
			return;
		}

		setLoading(true);

		if (!firstname || !lastname || !email || !password) {
			alert("All fields are required");
			setLoading(false);
			return;
		}

		try {
			await signUp.create({
				firstName: firstname,
				lastName: lastname,
				emailAddress: email,
				password,
			});

			// send the email.
			await signUp.prepareEmailAddressVerification({
				strategy: "email_code",
			});

			setFirstname("");
			setLastname("");
			setEmail("");
			setPassword("");

			router.push("/(auth)/(register)/verify");
		} catch (err: any) {
			console.log(err.errors[0]);
			alert(err.errors[0].message);
		} finally {
			setLoading(false);
		}
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
					<View className="mt-14">
						<View className="space-y-2 mb-3">
							<View className="gap-1">
								<Text
									style={{
										fontFamily: "Montserrat_600SemiBold",
									}}
									className="text-[45px] font-semibold text-gray-800"
								>
									Create New
								</Text>
								<Text
									style={{
										fontFamily: "Montserrat_600SemiBold",
									}}
									className="text-[45px] font-semibold text-gray-800"
								>
									Account
								</Text>
							</View>
						</View>
						<View className="space-y-4">
							<View className="space-y-1">
								<Text
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									className="font-medium"
								>
									First Name
								</Text>
								<TextInput
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									placeholder="Your firstname here"
									className="px-3 py-3 border rounded-xl text-xs"
									value={firstname}
									onChangeText={(text) => setFirstname(text)}
								/>
							</View>
							<View className="space-y-1">
								<Text
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									className="font-medium"
								>
									Last Name
								</Text>
								<TextInput
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									placeholder="Your lastname here"
									className="px-3 py-3 border rounded-xl text-xs"
									value={lastname}
									onChangeText={(text) => setLastname(text)}
								/>
							</View>
							<View className="space-y-1">
								<Text
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									className="font-medium"
								>
									Email Address
								</Text>
								<TextInput
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									placeholder="example@gmail.com"
									className="px-3 py-3 border rounded-xl text-xs"
									autoCapitalize="none"
									value={email}
									onChangeText={(text) => setEmail(text)}
								/>
							</View>
							<View className="space-y-1">
								<Text
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									className="font-medium"
								>
									Password
								</Text>
								<TextInput
									style={{
										fontFamily: "OpenSans_400Regular",
									}}
									placeholder="Your password here"
									className="px-3 py-3 border rounded-xl text-xs"
									autoCapitalize="none"
									value={password}
									secureTextEntry={true}
									onChangeText={(text) => setPassword(text)}
								/>
							</View>
						</View>
						<View className="items-center mt-8">
							<TouchableOpacity
								onPress={onSignUpPress}
								className="items-center w-full py-4 rounded-xl bg-main-orange"
							>
								<Text
									style={{ fontFamily: "OpenSans_700Bold" }}
									className="text-neutral-100 text-base"
								>
									Sign Up
								</Text>
							</TouchableOpacity>
							<Text
								style={{ fontFamily: "OpenSans_400Regular" }}
								className="mt-2 text-[12px]"
							>
								Already a member?{" "}
								<Link
									href={"/login"}
									replace
									className="underline"
								>
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
			</ScrollView>
		</SafeAreaView>
	);
}

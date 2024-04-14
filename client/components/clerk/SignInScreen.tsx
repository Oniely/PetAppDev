import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn, useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import SignInWithOAuth from "./SignInWithOAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

export default function SignInScreen() {
	const { signIn, setActive, isLoaded } = useSignIn();
	const { userId } = useAuth();

	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	// call to backend when signIn has been triggered
	useEffect(() => {
		async function signIn() {
			if (!userId) return;
			console.log("SignInScreen", userId);
			await axios.post('/auth/sign-in', { userId });
		}

		signIn();
	}, [signIn])

	const onSignInPress = async () => {
		if (!isLoaded) {
			return;
		}

		setLoading(true);

		try {
			const completeSignIn = await signIn.create({
				identifier: emailAddress,
				password,
			});
			// This is an important step,
			// This indicates the user is signed in
			await setActive({ session: completeSignIn.createdSessionId });
		} catch (err: any) {
			console.log(err.errors[0]);
			alert(err.errors[0].message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<SafeAreaView className="bg-orange-white flex-1 h-full">
			<Spinner visible={loading} />
			<ScrollView className="flex-1 px-4">
				<View className="mt-6">
					<Image
						source={require("@/assets/images/logo.png")}
						className="object-contain w-10 h-10"
					/>
				</View>
				<View className="mt-12 space-y-10">
					<View className="space-y-2">
						<View className="gap-1">
							<Text
								style={{ fontFamily: "Montserrat_600SemiBold" }}
								className="text-[50px] font-semibold text-gray-800 leading-[55px]"
							>
								Hello!
							</Text>
							<Text
								style={{ fontFamily: "Montserrat_600SemiBold" }}
								className="text-[50px] font-semibold text-gray-800 leading-[55px]"
							>
								Welcome Back!
							</Text>
						</View>
						<Text
							style={{ fontFamily: "OpenSans_400Regular" }}
							className="text-lg text-gray-500/80"
						>
							Welcome to Petoy! Get ready to pamper your furry friend
							with our top-notch care services tailored just for them.
						</Text>
					</View>
					<View className="space-y-8">
						<View>
							<Text
								style={{ fontFamily: "OpenSans_400Regular" }}
								className="text-lg font-medium"
							>
								Email Address
							</Text>
							<TextInput
								style={{ fontFamily: "OpenSans_400Regular" }}
								placeholder="example@gmail.com"
								className="px-3 py-4 text-base border rounded-xl"
								autoCapitalize="none"
								value={emailAddress}
								onChangeText={(emailAddress) =>
									setEmailAddress(emailAddress)
								}
								id="email"
							/>
						</View>
						<View>
							<Text
								style={{ fontFamily: "OpenSans_400Regular" }}
								className="text-lg font-medium"
							>
								Password
							</Text>
							<TextInput
								style={{ fontFamily: "OpenSans_400Regular" }}
								placeholder="example@gmail.com"
								className="px-3 py-4 text-base border rounded-xl"
								autoCapitalize="none"
								secureTextEntry={true}
								value={password}
								onChangeText={(password) => setPassword(password)}
								id="password"
							/>
						</View>
					</View>
					<View className="items-center">
						<TouchableOpacity
							onPress={onSignInPress}
							className="items-center w-full py-4 rounded-xl bg-main-orange"
						>
							<Text
								style={{ fontFamily: "OpenSans_700Bold" }}
								className="text-lg text-neutral-100"
							>
								Sign In
							</Text>
						</TouchableOpacity>
						<Text
							style={{ fontFamily: "OpenSans_400Regular" }}
							className="mt-2 text-sm"
						>
							Don't have an account yet?{" "}
							<Link href={"/(auth)/(register)"} replace className="underline">
								Register Here
							</Link>
						</Text>
					</View>
				</View>
				<Text className="text-gray-400 text-sm text-center my-6">or</Text>
				<SignInWithOAuth />
			</ScrollView>
		</SafeAreaView>
	);
}

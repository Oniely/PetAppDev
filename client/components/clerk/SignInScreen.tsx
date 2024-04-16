import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import SignInWithOAuth from "./SignInWithOAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

export default function SignInScreen() {
	const { signIn, setActive, isLoaded } = useSignIn();

	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const onSignInPress = async () => {
		if (!isLoaded) {
			return;
		}

		setLoading(true);

		if (emailAddress)

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
				<View className="mt-14 space-y-8">
					<View className="space-y-2">
						<View className="gap-1">
							<Text
								style={{ fontFamily: "Montserrat_600SemiBold" }}
								className="text-[45px] font-semibold text-gray-800"
							>
								Hello!
							</Text>
							<Text
								style={{ fontFamily: "Montserrat_600SemiBold" }}
								className="text-[45px] font-semibold text-gray-800"
							>
								Welcome Back!
							</Text>
						</View>
						<Text
							style={{ fontFamily: "OpenSans_400Regular" }}
							className="text-[12px] text-gray-500/80"
						>
							Welcome to Petoy! Get ready to pamper your furry friend
							with our top-notch care services tailored just for them.
						</Text>
					</View>
					<View className="space-y-8">
						<View className="space-y-2">
							<Text
								style={{ fontFamily: "OpenSans_400Regular" }}
								className="font-medium"
							>
								Email Address
							</Text>
							<TextInput
								style={{ fontFamily: "OpenSans_400Regular" }}
								placeholder="example@gmail.com"
								className="px-3 py-3 border rounded-xl text-sm"
								autoCapitalize="none"
								value={emailAddress}
								onChangeText={(emailAddress) =>
									setEmailAddress(emailAddress)
								}
								id="email"
							/>
						</View>
						<View className="space-y-2">
							<Text
								style={{ fontFamily: "OpenSans_400Regular" }}
								className="font-medium"
							>
								Password
							</Text>
							<TextInput
								style={{ fontFamily: "OpenSans_400Regular" }}
								placeholder="Your password here"
								className="px-3 py-3 border rounded-xl text-sm"
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
								className="text-neutral-100 text-base"
							>
								Sign In
							</Text>
						</TouchableOpacity>
						<Text
							style={{ fontFamily: "OpenSans_400Regular" }}
							className="mt-2 text-[12px]"
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

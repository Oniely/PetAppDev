import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import SignInWithOAuth from "./SignInWithOAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import Spinner from "react-native-loading-spinner-overlay";

export default function SignInScreen() {
	const { signIn, setActive, isLoaded } = useSignIn();

	const [emailAddress, setEmailAddress] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [loading, setLoading] = React.useState(false);

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
			router.replace('/(tabs)/home');
		} catch (err: any) {
			alert(err.errors[0].message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<SafeAreaView className="pt-6 px-4 bg-off-white flex-1 h-full">
			<Spinner visible={loading} />
			<View>
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
							style={{ fontFamily: "OpenSans_400Regular" }}
							className="text-lg font-medium"
						>
							Password
						</Text>
						<TextInput
							style={{ fontFamily: "OpenSans_400Regular" }}
							placeholder="example@gmail.com"
							className="px-3 py-4 text-base border rounded-xl bg-off-white"
							autoCapitalize="none"
							secureTextEntry={true}
							value={password}
							onChangeText={(password) => setPassword(password)}
						/>
						<Text
							style={{ fontFamily: "OpenSans_400Regular" }}
							className="mt-1 text-[14px] underline"
						>
							Forgot Password?
						</Text>
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
						<Link href={"/register"} replace className="underline">
							Register Here
						</Link>
					</Text>
				</View>
			</View>
			<Text className="text-gray-400 text-sm text-center my-6">or</Text>
			<SignInWithOAuth />
		</SafeAreaView>
	);
}

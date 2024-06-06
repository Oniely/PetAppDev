import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Image, Text, TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
	// Warm up the android browser to improve UX
	// https://docs.expo.dev/guides/authentication/#improving-user-experience
	useWarmUpBrowser();

	const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

	const onPress = React.useCallback(async () => {
		try {
			const { createdSessionId, signIn, signUp, setActive } =
				await startOAuthFlow();

			if (createdSessionId) {
				setActive!({ session: createdSessionId });
			} else {
				// ---
			}
		} catch (err) {
			console.error("OAuth error", err);
		}
	}, []);

	return (
		<TouchableOpacity
			onPress={onPress}
			className="border flex flex-row items-center justify-center py-4 rounded-xl space-x-2 mb-8"
		>
			<Image
				source={require("@/assets/images/google-icon.png")}
				className="w-5 h-5"
			/>
			<Text
				style={{ fontFamily: "OpenSans_400Regular" }}
				className="text-center"
			>
				Sign in with Google
			</Text>
		</TouchableOpacity>
	);
};
export default SignInWithOAuth;

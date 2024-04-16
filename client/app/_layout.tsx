import * as SplashScreen from "expo-splash-screen";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";

import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

import {
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import {
	OpenSans_400Regular,
	OpenSans_500Medium,
	OpenSans_600SemiBold,
	OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import axios from "axios";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
	async getToken(key: string) {
		try {
			return SecureStore.getItemAsync(key);
		} catch (err) {
			return null;
		}
	},
	async saveToken(key: string, value: string) {
		try {
			return SecureStore.setItemAsync(key, value);
		} catch (err) {
			return;
		}
	},
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

axios.defaults.baseURL = "http://192.168.43.68:4000";

export default function RootLayout() {
	const [loaded, error] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_600SemiBold,
		Poppins_700Bold,

		Montserrat_400Regular,
		Montserrat_500Medium,
		Montserrat_600SemiBold,

		OpenSans_400Regular,
		OpenSans_500Medium,
		OpenSans_600SemiBold,
		OpenSans_700Bold,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ClerkProvider
			tokenCache={tokenCache}
			publishableKey={CLERK_PUBLISHABLE_KEY!}
		>
			<RootLayoutNav />
		</ClerkProvider>
	);
}

function RootLayoutNav() {
	const { isLoaded, isSignedIn, signOut, userId } = useAuth();
	const segments = useSegments();
	const router = useRouter();

	useEffect(() => {
		if (!isLoaded) return;

		if (isSignedIn) {
			axios.post("/auth/sign-up", { userId }).then((res) => {
				const { data } = res;
				
				if (data.message) {
					alert(data.message)
					signOut();
				}
			});
		}

		const inTabsGroup = segments[0] === "(tabs)";

		if (isSignedIn && !inTabsGroup) {
			router.replace("/(tabs)/home/");
		} else if (!isSignedIn) {
			router.replace("/");
		} 	

	}, [isSignedIn]);

	return (
		<Stack
			screenOptions={{
				headerShown: false,
				animation: "fade",
				animationTypeForReplace: "pop",
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="(auth)" />
			<Stack.Screen name="(tabs)" />
		</Stack>
	);
}

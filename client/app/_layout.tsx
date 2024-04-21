import * as SplashScreen from "expo-splash-screen";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";

import { ClerkProvider, useAuth, useUser } from "@clerk/clerk-expo";
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
axios.defaults.baseURL = "http://192.168.1.36:4000";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

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
	const { user } = useUser();
	const segments = useSegments();
	const router = useRouter();

	useEffect(() => {
		if (!isLoaded) return;

		const inTabsGroup = segments[0] === "(tabs)";

		console.log(`User changed: ${isSignedIn}`);
		console.log(segments);

		if (isSignedIn && !inTabsGroup) {
			console.log("Registering");
			axios
				.post("/auth/sign-up", {
					userId,
					fname: user?.firstName,
					lname: user?.lastName,
					image_url: user?.imageUrl,
				})
				.then((res) => {
					if (res.data.message) {
						console.log(`Error in registering, Logging out!`);
						signOut();
					}
				});

			router.replace("/home/");
		} else if (!isSignedIn) {
			router.replace("/(auth)/");
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
			<Stack.Screen name="(auth)" />
			<Stack.Screen name="(tabs)" />
		</Stack>
	);
}

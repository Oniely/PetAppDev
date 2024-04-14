import {
	View,
	Text,
	TouchableOpacity,
	Image,
	SafeAreaView,
} from "react-native";
import { Redirect, router } from 'expo-router';
import { Feather } from '@expo/vector-icons'
import React from "react";
import { useAuth } from '@clerk/clerk-expo';


const Onboarding = () => {
	const { isLoaded, isSignedIn } = useAuth();

	if (isLoaded && isSignedIn) {
		<Redirect href={'/(tabs)/home/'} />
	}

	return (
		<SafeAreaView className="h-full px-4 bg-orange-white">
			<View className="flex-row justify-between pt-12">
				<Image
					source={require("@/assets/images/logo.png")}
					className="object-contain w-10 h-10"
				/>
				<TouchableOpacity
					onPress={() => router.push("/(auth)/login")}
					className="bg-main-orange items-center justify-center rounded-full w-10 h-10"
				>
					<Feather name="arrow-right" size={24} color="#FFF5E9" />
				</TouchableOpacity>
			</View>

			<View>
				<Image
					source={require("@/assets/images/hero_onboarding.png")}
					className="w-full h-[450px]"
				/>
			</View>

			<View className="justify-end flex-1 pb-8 gap-14">
				<View>
					<View>
						<Text
							style={{ fontFamily: "Poppins_700Bold" }}
							className="text-6xl leading-[70px] text-main-orange"
						>
							Find Caring
						</Text>
						<Text
							style={{ fontFamily: "Poppins_700Bold" }}
							className="text-6xl text-main-orange"
						>
							Hands
						</Text>
					</View>
					<View>
						<Text
							style={{ fontFamily: "Poppins_400Regular" }}
							className="text-base text-gray-500 mt-2"
						>
							Compassionate care for your cherished companions.
							Feel at ease with our reliable, affectionate
							services. Your pet’s comfort and happiness is our
							top priority.
						</Text>
					</View>
				</View>
				<TouchableOpacity
					onPress={() => router.push("/(auth)/login")}
					className="items-center py-4 mt-6 rounded-full bg-main-orange"
				>
					<Text
						style={{ fontFamily: "Poppins_600SemiBold" }}
						className="text-lg text-orange-white"
					>
						Get Started
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Onboarding;

import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import {
	Poppins_400Regular,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const Onboarding = () => {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_600SemiBold,
		Poppins_700Bold,
	});

	return (
		<View className="h-full px-4 bg-orange-white">
			<View className="flex-row justify-between">
				<Image
					source={require("@/assets/images/logo.png")}
					className="object-contain w-10 h-10"
				/>
				<TouchableOpacity onPress={() => router.push('/')} className="bg-main-orange items-center justify-center rounded-full w-10 h-10">
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
				<TouchableOpacity onPress={() => router.push('/')} className="items-center py-4 mt-6 rounded-full bg-main-orange">
					<Text
						style={{ fontFamily: "Poppins_600SemiBold" }}
						className="text-lg text-orange-white"
					>
						Get Started
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Onboarding;

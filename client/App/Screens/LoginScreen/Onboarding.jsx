import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import {
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import CheckIcon from '../../../assets/images/check.svg';

const Onboarding = () => {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_600SemiBold,
		Poppins_700Bold
	});

	return (
		<View className="h-full px-4 pt-12 bg-orange-white">
			<View className="flex-row justify-between">
				<Image
					source={require("../../../assets/images/logo.png")}
					className="object-contain w-10 h-10"
				/>
				<View className="bg-main-orange items-center justify-center rounded-full w-10 h-10 p-2">
					<CheckIcon stroke={"#f1f1f1"} />
				</View>
			</View>

			<View>
				<Image
					source={require("../../../assets/images/hero_onboarding.png")}
					className="w-full h-[440px]"
				/>
			</View>

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
					className="text-base text-gray-500 mt-2 "
				>
					Compassionate care for your cherished companions. Feel at
					ease with our reliable, affectionate services. Your pet’s
					comfort and happiness is our top priority.
				</Text>
			</View>

			<View className="justify-end flex-1 pb-6">
				<TouchableOpacity className="items-center py-4 mt-6 rounded-full bg-main-orange">
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
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
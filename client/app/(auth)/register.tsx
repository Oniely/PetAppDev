import { Link } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import { Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import { OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
	const [fontsLoaded] = useFonts({
		Montserrat_600SemiBold,
		OpenSans_400Regular,
		OpenSans_700Bold
	});

	return (
		<SafeAreaView className="pt-6 px-4 bg-off-white flex-1 h-full">
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
							Create New
						</Text>
						<Text
							style={{ fontFamily: "Montserrat_600SemiBold" }}
							className="text-[50px] font-semibold text-gray-800 leading-[55px]"
						>
							Account
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
							className="px-3 py-4 text-base border rounded-xl bg-off-white"
							id="password"
						/>
						<Text
							style={{ fontFamily: "OpenSans_400Regular" }}
							className="mt-1 text-[14px] underline"
						/>
					</View>
				</View>
				<View className="items-center">
					<TouchableOpacity className="items-center w-full py-4 rounded-xl bg-main-orange">
						<Text style={{ fontFamily: "OpenSans_700Bold" }} className="text-lg text-neutral-100">
							Sign Up
						</Text>
					</TouchableOpacity>
					<Text
						style={{ fontFamily: "OpenSans_400Regular" }}
						className="mt-2 text-sm"
					>
						Already a member?{" "}
						<Link href={"/"} className="underline">
							Login Here
						</Link>
					</Text>
				</View>
			</View>
			<Text className="text-gray-400 text-sm text-center my-6">or</Text>
			<View className="flex-1">
				<TouchableOpacity className="border h-14 rounded-xl items-center justify-center flex-row space-x-1">
					<Image source={require('@/assets/images/google-icon.png')} className="w-7 h-7" />
					<Text style={{ fontFamily: "OpenSans_400Regular" }} className="text-center text-base"> Sign in with Google</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default SignUp;

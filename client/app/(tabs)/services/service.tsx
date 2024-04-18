import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const service = () => {
	return (
		<ScrollView className="flex-1 bg-off-white">
			<View className="flex-1 bg-main-orange">
				<View className="h-[220px] items-center justify-center space-y-3 px-6">
					<Image
						source={require("@/assets/images/dogo_care.jpg")}
						alt="Profile Photo"
						className="w-full h-44 rounded-lg"
					/>
				</View>
				<View className="bg-off-white h-full rounded-t-3xl py-6 px-6">
					<View className="items-start mb-5">
						<Text
							style={{ fontFamily: "Poppins_600SemiBold" }}
							className="text-2xl"
						>
							Dr. Anna Johanson
						</Text>
						<Text
							style={{ fontFamily: "Poppins_400Regular" }}
							className="text-low-gray"
						>
							Veterinary Behavior
						</Text>
					</View>
					<View className="flex-row justify-between items-center space-x-5 mb-5">
						<View className="bg-white/80 shadow-xl items-start w-[105px] p-3 rounded-lg">
							<Text style={{ fontFamily: "Poppins_500Medium" }}>
								Experience
							</Text>
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg text-main-orange"
							>
								11 years
							</Text>
						</View>
						<View className="bg-white/80 shadow-xl items-start w-[105px] p-3 rounded-lg">
							<Text style={{ fontFamily: "Poppins_500Medium" }}>
								Price
							</Text>
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg text-main-orange"
							>
								$250
							</Text>
						</View>
						<View className="bg-white/80 shadow-xl items-start w-[105px] p-3 rounded-lg">
							<Text style={{ fontFamily: "Poppins_500Medium" }}>
								Location
							</Text>
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg text-main-orange"
							>
								2.5 Km
							</Text>
						</View>
					</View>
					<View className="items-start space-y-4 mb-8">
						<View className="space-y-1">
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg"
							>
								About
							</Text>
							<Text
								style={{ fontFamily: "Poppins_400Regular" }}
								className="text-low-gray"
							>
								Dr. Maria Naiis is a highly experienced veterinarian
								with 11 years of dedicated practice, showcasing a
								pro...
							</Text>
						</View>
						<View className="space-y-2">
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg"
							>
								Available Days
							</Text>
							<Text>Monday - Wednesday - Friday</Text>
						</View>
						<View className="space-y-1">
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg"
							>
								Available Time
							</Text>
							<Text>AM - 9:00 - 12:00 PM - 1:30 - 6:00</Text>
						</View>
					</View>
					<View className="w-full">
						<TouchableOpacity className="py-3 px-3 bg-main-orange rounded-lg">
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-off-white text-center"
							>
								Book an Appointment
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default service;

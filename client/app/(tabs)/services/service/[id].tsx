import ServiceCard from "@/components/services/ServiceCard";
import Search from "@/components/shared/Search";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const Service = () => {
	const { id } = useLocalSearchParams();

	return (
		<ScrollView className="flex-1 bg-off-white">
			<View className="flex-1 px-6">
				<View className="bg-main-orange w-full h-28 rounded-lg mb-6"></View>
				<Search />
				<View className="mt-6 space-y-2">
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
						className="text-base"
					>
						Our Services
					</Text>

					<View className="flex flex-row flex-wrap justify-between gap-2">
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default Service;

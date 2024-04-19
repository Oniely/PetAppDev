import Category from "@/components/home/Category";
import ServiceCard from "@/components/services/ServiceCard";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import {
	View,
	Text,
	ScrollView,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Services = () => {
	return (
		<SafeAreaView className="flex-1">
			<ScrollView className="flex-1 bg-off-white px-4 pt-6">
				<View className="flex-row items-center justify-between bg-main-orange px-5 py-3 rounded-2xl mb-6">
					<View>
						<Text
							style={{ fontFamily: "Poppins_600SemiBold" }}
							className="text-xl text-white"
						>
							Lets Find Specialist
						</Text>
						<Text
							style={{ fontFamily: "Poppins_600SemiBold" }}
							className="text-xl text-white"
						>
							Doctor for Your Pet!
						</Text>
					</View>
					<View>
						<Image
							source={require("@/assets/images/dogo_care.jpg")}
							className="w-[95px] h-[95px] rounded-lg"
						/>
					</View>
				</View>

				<View className="border border-dark-gray/50 flex-row items-center pl-4 pr-1 py-1 rounded-2xl mb-6">
					<TextInput
						placeholder="Search..."
						className="flex-1 text-sm text-dark-gray"
					/>
					<TouchableOpacity className="bg-main-orange p-2 rounded-xl">
						<Feather
							name="search"
							size={24}
							color={Colors["orange-white"]}
						/>
					</TouchableOpacity>
				</View>

				<Category />

				<View className="mt-6 mb-3">
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
						className="text-base"
					>
						Service Provider
					</Text>
				</View>

				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Services;
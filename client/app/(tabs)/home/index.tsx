import { useUser } from "@clerk/clerk-expo";
import {
	View,
	Text,
	Image,
	Pressable,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import Category from "@/components/home/Category";
import NavCard from "@/components/home/NavCard";

const Home = () => {
	const { user } = useUser();

	return (
		<SafeAreaView className="flex-1 bg-off-white">
			<ScrollView className="flex-1 space-y-[24px] px-5">
				<View className="flex-row items-center justify-between mt-6">
					<View className="flex-row gap-2">
						<Link href={'/(tabs)/profile/'} asChild>
							<Pressable>
								<Image
									source={{ uri: user?.imageUrl }}
									alt="Photo"
									className="w-11 h-11 rounded-full"
								/>
							</Pressable>
						</Link>
						<View>
							<Text
								style={{ fontFamily: "Poppins_500Medium" }}
								className="capitalize text-dark-gray text-base"
							>
								{user?.firstName}
							</Text>
							<Text
								style={{ fontFamily: "Poppins_400Regular" }}
								className="text-gray-600 text-sm"
							>
								Good Morning!
							</Text>
						</View>
					</View>
					<Pressable>
						<Feather name="bell" size={24} color={Colors["dark-gray"]} />
					</Pressable>
				</View>

				<View className="border border-dark-gray/50 flex-row items-center pl-4 pr-1 py-1 rounded-2xl">
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

				<View className="h-[125px] py-5 px-5 rounded-3xl bg-white flex-row items-center space-x-4 shadow-xl mb-8">
					<View className="flex-1 space-y-1">
						<Text
							style={{ fontFamily: "Poppins_600SemiBold" }}
							className="text-dark-gray text-xl"
						>
							In Love With Pets?
						</Text>
						<Text
							style={{ fontFamily: "Poppins_500Medium" }}
							numberOfLines={1}
							className="text-main-orange text-sm"
						>
							Get all what you need for them
						</Text>
					</View>
					<View>
						<Image
							source={require("@/assets/images/dogo_care.jpg")}
							className="object-center object-cover w-[100px] h-[100px] rounded-2xl"
						/>
					</View>
				</View>

				<Category />

				<View className="flex-1">
					<NavCard
						title="Services"
						cardTitle="Discover essential services for your furry friend!"
						imageUrl={require("@/assets/images/dogo_care.jpg")}
						gotoLink="../services"
					/>
					<NavCard
						title="Community"
						cardTitle="Connect and share with communities!"
						imageUrl={require("@/assets/images/dogo_care.jpg")}
						gotoLink="../community"
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

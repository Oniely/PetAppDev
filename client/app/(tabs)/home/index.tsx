import { useUser } from "@clerk/clerk-expo";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Search from "@/components/shared/Search";
import { SearchBar } from "react-native-screens";
import { Link } from "expo-router";

const Home = () => {
	const { user } = useUser();

	return (
		<SafeAreaView className="flex-1 pt-6 px-6">
			<View className="flex-row items-center justify-between">
				<View className="flex-row gap-2">
					<Link href={"/(tabs)/profile"} asChild>
						<Image
							source={{ uri: user?.imageUrl }}
							alt="Photo"
							className="w-11 h-11 rounded-full"
						/>
					</Link>
					<View>
						<Text
							style={{ fontFamily: "" }}
							className="capitalize text-dark-gray text-base"
						>
							{user?.firstName}
						</Text>
						<Text className="text-gray-600 text-sm">
							Good Morning!
						</Text>
					</View>
				</View>
				<Pressable>
					<Feather name="bell" size={24} color="black" />
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

export default Home;

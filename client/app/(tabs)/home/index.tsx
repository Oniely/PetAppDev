import { useUser } from "@clerk/clerk-expo";
import { View, Text, Image, Pressable  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';

const Home = () => {
	const { user } = useUser();

	return (
		<SafeAreaView className="flex-1 p-6">
			<View className="flex-row items-center justify-between">
				<View className="flex-row gap-2">
					<Image source={{ uri: user?.imageUrl }} alt="Photo" className="w-11 h-11 rounded-full" />
					<View>
						<Text style={{ fontFamily: "" }} className="capitalize text-dark-gray text-base">{user?.firstName}</Text>
						<Text className="text-gray-600 text-sm">Good Morning!</Text>
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

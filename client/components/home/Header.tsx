import Colors from "@/constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";

const Header = () => {
  const { user } = useUser();

	return (
		<View className="flex-row items-center justify-between mb-6">
			<View className="flex-row gap-2">
				<Link href={"/(tabs)/profile/"} asChild>
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
	);
};

export default Header;

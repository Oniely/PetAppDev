import { Link, router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

interface Props {
	link: string;
	title: string;
	icon: React.ReactNode;
}

const ProfileMenuItem = ({ link, title, icon }: Props) => {
	return (
    // @ts-ignore
		<TouchableOpacity onPress={() => router.push(link)} className="flex-row items-center py-3 mb-1 rounded-full">
			<View className="flex-1 flex-row items-center gap-4">
				<View className="bg-light-orange/60 w-12 h-12 items-center justify-center rounded-full">
					{icon}
				</View>
				<Text
					style={{ fontFamily: "Poppins_500Medium" }}
					className="text-[16px] capitalize"
				>
					{title}
				</Text>
			</View>
			<View className="bg-light-orange/50 w-12 h-12 items-center justify-center rounded-full">
				<Feather
					name="chevron-right"
					size={22}
					color={Colors["dark-gray"]}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default ProfileMenuItem;

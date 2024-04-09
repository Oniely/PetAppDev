import { useUser } from "@clerk/clerk-expo";
import { View, Text, TouchableOpacity, Image } from "react-native";

const Profile = () => {
	const { user } = useUser();

	return (
		<View className="h-[350px] items-center justify-center space-y-2">
			<Image
				source={{
					uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbfKhOuGk_Ag_8BBQ5Kc0xi1pAXxGNGP9JYQ&s",
				}}
				alt="Profile Photo"
				className="w-48 h-40 rounded-full"
			/>
			<View className="items-center">
				<Text
					style={{ fontFamily: "Poppins_700Bold" }}
					className="text-lg text-orange-white tracking-wide"
				>
					{user?.firstName} {user?.lastName}
				</Text>
				<Text
					style={{ fontFamily: "Poppins_500Medium" }}
					className="text-orange-white tracking-[0.2px]"
				>
					{user?.primaryEmailAddress!["emailAddress"]}
				</Text>
			</View>
			<TouchableOpacity className="bg-light-orange px-16 py-4 rounded-full">
				<Text
					style={{ fontFamily: "Poppins_500Medium" }}
					className="text-base"
				>
					Edit Profile
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Profile;

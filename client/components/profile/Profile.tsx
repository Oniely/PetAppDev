import { useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";

const Profile = () => {
	const { user } = useUser();
	
	return (
		<View className="h-[350px] items-center justify-center space-y-3">
			<Image
				source={{
					uri:
						user?.imageUrl ||
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbfKhOuGk_Ag_8BBQ5Kc0xi1pAXxGNGP9JYQ&s",
				}}
				alt="Profile Photo"
				className="w-52 h-44 rounded-full"
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
			<Link href={'/(tabs)/profile/edit_profile'} asChild>
				<TouchableOpacity className="bg-light-orange px-16 py-4 rounded-full">
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
						className="text-base"
					>
						Edit Profile
					</Text>
				</TouchableOpacity>
			</Link>
		</View>
	);
};

export default Profile;

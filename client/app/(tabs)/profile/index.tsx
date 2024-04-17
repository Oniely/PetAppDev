import { ScrollView, View } from "react-native";
import ProfileMenu from "@/components/profile/ProfileMenu";
import Profile from "@/components/profile/Profile";

const ProfileScreen = () => {
	return (
		<ScrollView className="flex-1 bg-white"> 
			<View className="flex-1 bg-main-orange">
				<Profile />
				<ProfileMenu />
			</View>
		</ScrollView>
	);
};

export default ProfileScreen;

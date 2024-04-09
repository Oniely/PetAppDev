import { View } from "react-native";
import ProfileMenu from "@/components/profile/ProfileMenu";
import Profile from "@/components/profile/Profile";

const ProfileScreen = () => {
	return (
		<View className="flex-1 bg-main-orange">
			<Profile />
			<ProfileMenu />
		</View>
	);
};

export default ProfileScreen;

import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { router, Stack, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";

const ProfileLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerShown: true,
				headerTitleAlign: "center",
				headerTitleStyle: {
					color: Colors["off-white"],
					fontFamily: "Poppins_500Medium",
					fontSize: 18,
				},
				headerStyle: {
					backgroundColor: Colors["main-orange"],
				},
				headerShadowVisible: false,
				headerLeft: () => (
					<TouchableOpacity
						onPress={router.back}
						className="bg-off-white rounded-md ml-2"
					>
						<Feather
							name="chevron-left"
							size={26}
							color={Colors["main-orange"]}
						/>
					</TouchableOpacity>
				),
				animation: "ios",
				animationTypeForReplace: "pop",
			}}
		>
			<Stack.Screen name="index" options={{ title: "Your Profile" }} />
			<Stack.Screen
				name="edit_profile"
				options={{ title: "Edit Profile" }}
			/>
		</Stack>
	);
};

export default ProfileLayout;

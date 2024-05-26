import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

const ServicesLayout = () => {
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
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen
				name="provider/[id]"
				options={{ headerShown: true, title: "Provider" }}
			/>
			<Stack.Screen
				name="service/[id]"
				options={{
					headerShown: true,
					title: "Services",
					headerStyle: {
						backgroundColor: Colors["off-white"],
					},
					headerLeft: () => (
						<TouchableOpacity
							onPress={router.back}
							className="bg-main-orange rounded-md ml-2"
						>
							<Feather
								name="chevron-left"
								size={26}
								color={Colors["off-white"]}
							/>
						</TouchableOpacity>
					),
					headerTitleStyle: {
						color: Colors["dark-gray"],
						fontFamily: "Poppins_500Medium",
						fontSize: 18,
					},
				}}
			/>
		</Stack>
	);
};

export default ServicesLayout;

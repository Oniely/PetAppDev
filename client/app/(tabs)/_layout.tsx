import React from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "@clerk/clerk-expo";

export default function TabLayout() {
	const { isSignedIn } = useAuth();

	return (
		<>
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarActiveTintColor: "#F59245",
					tabBarInactiveTintColor: "#7E808F",
					tabBarActiveBackgroundColor: Colors["off-white"],
					tabBarStyle: {
						height: 80,
						backgroundColor: "#FFFFFF",
						shadowOpacity: 0,
						borderWidth: 0
					},
					tabBarIconStyle: {
						marginBottom: -12,
					},
					tabBarLabelStyle: {
						fontSize: 11,
						marginBottom: 18,
					},
					tabBarItemStyle: {
						borderRadius: 5,
					},
					headerTitleAlign: "center",
					headerTitleStyle: {
						color: Colors["off-white"],
						fontFamily: "Poppins_500Medium",
						fontSize: 18,
					},
					headerStyle: {
						backgroundColor: Colors["main-orange"],
						shadowOpacity: 0,
					},
					headerShadowVisible: false,
					tabBarHideOnKeyboard: true,
					headerLeft: () => (
						<TouchableOpacity className="bg-off-white rounded-md ml-4">
							<Feather
								name="chevron-left"
								size={26}
								color={Colors["main-orange"]}
							/>
						</TouchableOpacity>
					),
				}}
			>
				<Tabs.Screen name="index" options={{ href: null }} />
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						tabBarIcon: ({ color }) => (
							<Feather name="home" size={24} color={color} />
						),
					}}
					redirect={!isSignedIn}
				/>
				<Tabs.Screen
					name="services"
					options={{
						title: "Services",
						tabBarIcon: ({ color }) => (
							<Feather name="heart" size={24} color={color} />
						),
					}}
					redirect={!isSignedIn}
				/>
				<Tabs.Screen
					name="moments"
					options={{
						title: "Moments",
						tabBarIcon: ({ color }) => (
							<Feather name="trello" size={24} color={color} />
						),
					}}
					redirect={!isSignedIn}
				/>
				<Tabs.Screen
					name="notifications"
					options={{
						title: "Notifications",
						tabBarIcon: ({ color }) => (
							<Feather name="bell" size={24} color={color} />
						),
					}}
					redirect={!isSignedIn}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Your Profile",
						tabBarIcon: ({ color }) => (
							<Feather name="user" size={24} color={color} />
						),
					}}
					redirect={!isSignedIn}
				/>
			</Tabs>

			<StatusBar backgroundColor={Colors['dark-gray']} style='light' />
		</>
	);
}

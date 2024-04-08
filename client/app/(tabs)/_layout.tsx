import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Feather } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

	return (
			<Tabs screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: "#F59245",
				tabBarInactiveTintColor: "#7E808F",
				tabBarStyle: {
					height: 75,
				},
				tabBarIconStyle: {
					marginBottom: -12
				},
				tabBarLabelStyle: {
					fontSize: 12,
					marginBottom: 15,
				},
			}}>
				<Tabs.Screen name="index" options={{ href: null }} />

				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						tabBarIcon: ({ color }) => (
							<Feather name="home" size={24} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="services"
					options={{
						title: "Services",
						tabBarIcon: ({ color }) => (
							<Feather name="heart" size={24} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="community"
					options={{
						title: "Community",
						tabBarIcon: ({ color }) => (
							<Feather name="users" size={24} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						tabBarIcon: ({ color }) => (
							<Feather name="user" size={24} color={color} />
						),
					}}
				/>
			</Tabs>
	);
}

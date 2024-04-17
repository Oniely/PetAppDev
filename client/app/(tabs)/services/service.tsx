import { Stack } from "expo-router";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const service = () => {
	return (
		<>
			<Stack.Screen options={{ headerTitle: "Services" }} />
			<View className="flex-1">
      <View className="h-[200px] items-center justify-center space-y-3">
			<Image
				source={require('@/assets/images/dogo_care.jpg')}
				alt="Profile Photo"
				className="w-60 h-44 rounded-full"
			/>
		</View>
			</View>
		</>
	);
};

export default service;

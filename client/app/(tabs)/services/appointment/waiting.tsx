import { Link } from "expo-router";
import { View, Text, ScrollView } from "react-native";

const Waiting = () => {
	return (
		<View className="flex-1 py-5 px-6 items-center justify-center">
			<Text style={{ fontFamily: "Poppins_500Medium" }} className="text-center text-base mb-3">
				Appointment has been set please wait for the provider to confirm
				your schedule.
			</Text>
			<Link style={{ fontFamily: "Poppins_400Regular" }} href="/(tabs)/home/" className="underline mb-1 uppercase"> 
				Go to home
			</Link>
		</View>
	);
};

export default Waiting;

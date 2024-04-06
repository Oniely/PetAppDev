import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import axios from "axios";
import Onboarding from "./App/Screens/LoginScreen/Onboarding";

axios.defaults.baseURL = "http://192.168.1.64:4000";
axios.defaults.withCredentials = true;

export default function App() {
	return (
		<View className="">
			<Onboarding />
			<StatusBar style="auto" />
		</View>
	);
}

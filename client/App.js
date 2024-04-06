import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import Login from "./App/LoginScreen/Login";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "http://192.168.1.64:4000";
axios.defaults.withCredentials = true;

export default function App() {
	const [data, setData] = useState("");

	return (
		<View className="px-4 pt-14">
			<Image
				source={require("./assets/favicon.png")}
				className="w-6 h-6"
			/>
			<View className="">
				<Login />
				<FlatList
					data={data}
					renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item._id}
				/>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

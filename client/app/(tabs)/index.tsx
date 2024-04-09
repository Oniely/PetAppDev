import { Link, Redirect } from "expo-router";
import { View, Text } from "react-native";

const Index = () => {
	

	return (
		<Redirect href={'/home/'} />
	);
};

export default Index;

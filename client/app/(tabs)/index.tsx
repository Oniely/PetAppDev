import { Link, Redirect } from "expo-router";
import { View, Text } from "react-native";

const Home = () => {
	return (
		<Redirect href={'/home/'} />
	);
};

export default Home;

import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Login = () => {
	return (
		<View className="pt-14">
			<View className="gap-2 mb-12">
				<Text className="text-[50px] font-medium tracking-wider text-gray-800">
					Hello,
				</Text>
				<Text className="text-5xl font-medium tracking-wider text-gray-800">
					Welcome Back!
				</Text>
				<Text className="text-lg text-gray-500">
					Welcome to Petoy! Get ready to pamper your furry friend with
					our top-notch care services tailored just for them.
				</Text>
			</View>
      <View className="gap-8">
        <View>
          <Text className="text-lg font-medium">Email Address</Text>
					<TextInput placeholder="example@gmail.com" className="px-3 py-4 text-base border rounded-2xl" />
        </View>
        <View>
          <Text className="text-lg font-medium">Password</Text>
					<TextInput placeholder="example@gmail.com" className="px-3 py-4 text-base border rounded-2xl" />
					<Text className="mt-1 text-base">Forgot Password?</Text>
        </View>
      </View>
			<View className="items-center mt-12">
				<TouchableOpacity className="items-center w-full py-4 rounded-2xl bg-main-orange">
					<Text className="text-base text-neutral-100">Log in</Text>
				</TouchableOpacity>
				<Text className="mt-1 text-base">Don't have an account yet? Register Here</Text>
			</View>
		</View>
	);
};

export default Login;

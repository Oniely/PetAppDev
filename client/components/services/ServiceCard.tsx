import { View, Text, Image } from "react-native";

const ServiceCard = () => {
	return (
		<View className="bg-white first-letter p-4 flex-row space-x-3 rounded-3xl mb-6">
			<Image source={require('@/assets/images/dogo_care.jpg')} className="w-[100px] h-[100px] rounded-xl" />
			<View className="items-start justify-center">
        <Text style={{ fontFamily: "Poppins_500Medium" }} className="text-base">Name of Service Provider</Text>
        <Text style={{ fontFamily: "Poppins_500Medium" }} className="text-gray-400">Type of Service Provider</Text>
      </View>
		</View>
	);
};

export default ServiceCard;

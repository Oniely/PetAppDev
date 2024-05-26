import { Image, View } from "react-native";
import { Text } from "../Themed";

interface Props {
	image_url: string;
	serviceName: string;
}

const ServiceCard = ({ image_url, serviceName }: Props) => {
	return (
		<View className="bg-white w-[47%] h-48 shadow-md rounded-lg shrink-0 px-3 py-2">
			<Image
				source={{
					uri: image_url,
				}}
				className="object-cover w-full h-[80%] rounded-md"
			/>
			<View className="flex-1 items-center justify-center">
				<Text
					style={{ fontFamily: "Poppins_500Medium" }}
					className="text-base capitalize"
				>
					{serviceName}
				</Text>
			</View>
		</View>
	);
};

export default ServiceCard;

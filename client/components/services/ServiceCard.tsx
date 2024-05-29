import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
	image_url: string;
	serviceName: string;
	typeOfService: string;
	href: string;
}

const ServiceCard = ({
	image_url,
	serviceName,
	typeOfService,
	href,
}: Props) => {
	return (
		// @ts-ignore
		<Link href={href} asChild>
			<TouchableOpacity className="bg-white w-[47%] h-48 shadow-md rounded-lg shrink-0 px-3 py-2 mt-2">
				<Image
					source={{
						uri: image_url,
					}}
					className="object-cover w-full h-[75%] rounded-md"
				/>
				<View className="flex-1 items-center justify-center space-y-[-3px] mt-2">
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
						className="text-base capitalize"
					>
						{serviceName}
					</Text>
					<Text
						style={{ fontFamily: "Poppins_400Regular" }}
						className="capitalize"
					>
						{typeOfService}
					</Text>
				</View>
			</TouchableOpacity>
		</Link>
	);
};

export default ServiceCard;

import { View, Text, Image, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

interface Props {
	href: string;
	image_url: string;
	companyName: string;
	type: string;

}

const ServiceCard = ({ href, image_url, companyName, type }: Props) => {;
	return (
		<Link href={href} asChild>
			<Pressable className="mb-8">
				<View className="bg-white first-letter py-4 px-5 flex-row space-x-5 rounded-3xl shadow-2xl">
					<Image
						source={{ uri: image_url }}
						className="w-[100px] h-[100px] rounded-xl"
					/>
					<View className="items-start justify-center">
						<Text
							style={{ fontFamily: "Poppins_500Medium" }}
							className="text-base"
						>
							{companyName}
						</Text>
						<Text
							style={{ fontFamily: "Poppins_400Regular" }}
							className="text-low-gray"
						>
							{type}
						</Text>
						<View className="flex-row mt-2 gap-2">
							<View className="flex-row items-center gap-1">
								<Feather
									name="star"
									size={21}
									color={Colors["low-orange"]}
								/>
								<Text style={{ fontFamily: "Montserrat_500Medium" }} className=" text-low-gray">4.9</Text>
							</View>
							<View className="flex-row items-center gap-1">
							<Feather name="map-pin" size={20} color={Colors["low-orange"]} />
								<Text style={{ fontFamily: "Montserrat_500Medium" }} className=" text-low-gray">1 km</Text>
							</View>
						</View>
					</View>
				</View>
			</Pressable>
		</Link>
	);
};

export default ServiceCard;

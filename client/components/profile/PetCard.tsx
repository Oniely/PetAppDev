import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
	href: string;
	species: "Dog" | "Cat";
	name: string;
}

const PetCard = ({ href, species, name }: Props) => {
	const img =
		species === "Dog"
			? require("@/assets/images/dog.png")
			: require("@/assets/images/cat.png");

	return (
		// @ts-ignore
		<Link href={href} asChild>
			<TouchableOpacity className="w-[170px] h-[190px] bg-[#e3edfb] rounded-2xl relative shadow-xl mb-4">
				<Image
					source={img}
					alt="Pet Photo"
					className="w-[150px] h-[150px] object-cover object-center absolute z-50 -top-3 left-3"
				/>
				<View className="w-full h-[50px] items-center justify-center absolute bottom-0">
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
						className="text-base"
					>
						{name}
					</Text>
				</View>
			</TouchableOpacity>
		</Link>
	);
};

export default PetCard;

import { router } from "expo-router";
import {
	View,
	Text,
	ImageSourcePropType,
	TouchableOpacity,
	Image,
} from "react-native";

interface Props {
	title: string;
	cardTitle: string;
	gotoLink: any;
	imageUrl: ImageSourcePropType;
}

const NavCard = ({ title, cardTitle, gotoLink, imageUrl }: Props) => {
	return (
		<>
			<Text
				style={{ fontFamily: "Poppins_500Medium" }}
				className="mb-6 text-lg capitalize"
			>
				{title}
			</Text>
			<View className="h-[150px] bg-white rounded-3xl p-5 flex-row space-x-2 mb-8 shadow-xl">
				<View className="items-start justify-between flex-1">
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
						className="text-base"
						numberOfLines={2}
					>
						{cardTitle}
					</Text>
					<TouchableOpacity
						onPress={() => router.push(gotoLink)}
						className="px-6 py-3 bg-main-orange/90 rounded-xl"
					>
						<Text
							style={{ fontFamily: "Poppins_600SemiBold" }}
							className="text-off-white text-sm"
						>
							See More
						</Text>
					</TouchableOpacity>
				</View>
				<View>
					<Image
						source={imageUrl}
						alt="Card Photo"
						className="object-cover w-28 h-full rounded-xl"
					/>
				</View>
			</View>
		</>
	);
};

export default NavCard;

import { View, Text, Image, ImageSourcePropType } from "react-native";

interface Props {
	title: string;
	imageUrl: string;
}

const CategoryItem = ({ title, imageUrl }: Props) => {
	return (
		<View className="py-4 space-y-2 self-start items-center">
			<Image
				source={{ uri: imageUrl }}
				alt={title}
				className="w-[60px] h-[60px] object-cover rounded-full"
			/>
			<Text
				style={{ fontFamily: "Poppins_400Regular" }}
				numberOfLines={1}
				className="text-xs"
			>
				{title}
			</Text>
		</View>
	);
};

export default CategoryItem;

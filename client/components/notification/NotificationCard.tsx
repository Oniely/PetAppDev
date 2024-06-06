import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

interface Props {
	image_url: string;
	name: string;
	message: string;
	status: string;
	date: string;
	time: string;
	serviceName: string;
	href: string;
}

const NotificationCard = ({
	image_url,
	name,
	message,
	status,
	date,
	time,
	serviceName,
	href,
}: Props) => {
	return (
		<View className="py-2 flex flex-row items-start justify-start space-x-3 mb-4">
			<View className="items-start justify-start">
				{/* @ts-ignore */}
				<Link href={href} asChild>
					<Pressable className="w-14 h-14">
						<Image
							source={{ uri: image_url }}
							alt="Profile Image"
							className="w-full h-full object-cover rounded-full"
						/>
					</Pressable>
				</Link>
			</View>
			<View className="space-y-1">
				<Text
					style={{ fontFamily: "Poppins_500Medium" }}
					className="text-sm"
				>
					{name}: {serviceName} - {status}
				</Text>
				<View className="border border-neutral-200 p-3 rounded-lg">
					<Text
						style={{ fontFamily: "OpenSans_400Regular" }}
						className="text-sm"
					>
						{message}
					</Text>
				</View>
				<View className="flex flex-row items-center justify-between">
					<Text
						style={{ fontFamily: "Poppins_400Regular" }}
						className="text-xs"
					>
						{time}
					</Text>
					<Text
						style={{ fontFamily: "Poppins_400Regular" }}
						className="text-xs"
					>
						{date}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default NotificationCard;

import { useUser } from "@clerk/clerk-expo";
import { View, Text, ScrollView, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const Moments = () => {
	const { user } = useUser();

	return (
		<SafeAreaView className="flex-1">
			<ScrollView className="flex-1 px-4 py-6 space-y-5 overflow-hidden">
				<View className="flex-row items-center justify-between">
					<Text
						style={{ fontFamily: "Montserrat_600SemiBold" }}
						className="text-3xl"
					>
						Moments
					</Text>
					<View className="p-1 bg-gray-300 rounded-full">
						<Feather name="search" size={22} color="black" />
					</View>
				</View>
				<View className="flex flex-row items-center space-x-2 mb-6">
					<Image
						source={{ uri: user?.imageUrl }}
						alt="Profile Image"
						width={45}
						height={45}
						className="object-cover rounded-full"
					/>
					<TextInput
						className="w-[280px] border-b border-neutral-300 py-2 px-2"
						placeholder="What`s on your mind?"
					/>
					<Feather
						name="image"
						size={24}
						color={Colors["main-orange"]}
					/>
				</View>
				<View className="w-full border-b-4 border-b-neutral-200"></View>
				<View className="pt-6 space-y-3 border-b border-b-neutral-200">
					<View className="flex-row items-center justify-between">
						<View className="flex-row space-x-2">
							<Image
								source={{ uri: user?.imageUrl }}
								alt="Profile Image"
								width={45}
								height={45}
								className="object-cover rounded-full"
							/>
							<View className="justify-between">
								<Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-base">{user?.fullName}</Text>
								<Text style={{ fontFamily: "Poppins_400Regular" }} className="text-gray-500">8h ago</Text>
							</View>
						</View>

						<Feather name="more-horizontal" size={20} color={Colors["nav-gray"]} />
					</View>
					<View>
						<Text style={{ fontFamily: "Poppins_400Regular" }} className="text-sm">My dogs are playing with their toys! ❤️ Such cuties! ❤️</Text>
					</View>
					<View className="h-[300px]">
						<Image source={{ uri: "https://images.squarespace-cdn.com/content/v1/642c4730a9c5ce5bd5d6b2b1/681cf18f-b252-42e3-8620-b2935910dc24/Can-Service-Dogs-Play-Other-Dogs.jpeg" }} alt="Content Image" className="w-full h-full rounded-sm" />
					</View>
					<View className="flex-row items-center justify-between">
						<View className="flex-row items-center justify-between w-full">
							<View className="flex-row items-center space-x-1">
								<View className="bg-red-600 p-1 rounded-full">
									<AntDesign name="heart" size={12} color="white" />
								</View>
								<Text style={{ fontFamily:"Poppins_400Regular" }} className="text-sm">10</Text>
							</View>
							<Text style={{ fontFamily:"Poppins_400Regular" }} className="text-xs text-gray-600">3 comments</Text>
						</View>
					</View>
					<View className="flex-row items-center pb-2">
						<View className="flex-row items-center justify-center py-2 space-x-2 w-1/3">
							<AntDesign name="heart" size={20} color="#dc2626" />
							<Text style={{ fontFamily:"Poppins_400Regular" }} className="text-xs">Love It!</Text>
						</View>
						<View className="flex-row items-center justify-center py-2 space-x-2 w-1/3">
							<Feather name="message-square" size={20} color="#4b5563" />
							<Text style={{ fontFamily:"Poppins_400Regular" }} className="text-xs">Comment</Text>
						</View>
						<View className="flex-row items-center justify-center py-2 space-x-2 w-1/3">
							<SimpleLineIcons name="share" size={20} color="#4b5563" />
							<Text style={{ fontFamily:"Poppins_400Regular" }} className="text-xs">Share</Text>
						</View>
					</View>
				</View>

				<View className="pt-6 space-y-3 border-b border-b-neutral-200 mb-5">
					<View className="flex-row items-center justify-between">
						<View className="flex-row space-x-2">
							<Image
								source={{ uri: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/291126846_800421134666615_2924436859097174626_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AQ0fgsA7Nv0Q7kNvgFkaX5J&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYBVTNGT5NCs5AM9E27H0PgiDzut6Tolnl5S7hFUAgXEsA&oe=66671BC3" }}
								alt="Profile Image"
								width={45}
								height={45}
								className="object-cover rounded-full"
							/>
							<View className="justify-between">
								<Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-base">Godwin Seguiro</Text>
								<Text style={{ fontFamily: "Poppins_400Regular" }} className="text-gray-500">11h ago</Text>
							</View>
						</View>

						<Feather name="more-horizontal" size={20} color={Colors["nav-gray"]} />
					</View>
					<View>
						<Text style={{ fontFamily: "Poppins_400Regular" }} className="text-sm">Cute Adonis playing with his ball!! ❤️</Text>
					</View>
					<View className="h-[300px]">
						<Image source={{ uri: "https://cdn.pixabay.com/video/2023/03/27/156318-812205657_tiny.jpg" }} alt="Content Image" className="w-full h-full rounded-sm" />
					</View>
					<View className="flex-row items-center justify-between">
						<View className="flex-row items-center justify-between w-full">
							<View className="flex-row items-center space-x-1">
								<View className="bg-red-600 p-1 rounded-full">
									<AntDesign name="heart" size={12} color="white" />
								</View>
								<Text style={{ fontFamily:"Poppins_400Regular" }} className="text-sm">10</Text>
							</View>
							<Text style={{ fontFamily:"Poppins_400Regular" }} className="text-xs text-gray-600">3 comments</Text>
						</View>
					</View>
					<View className="flex-row items-center pb-2">
						<View className="flex-row items-center justify-center py-2 space-x-2 w-1/3">
							<AntDesign name="heart" size={20} color="#dc2626" />
							<Text style={{ fontFamily:"Poppins_400Regular" }} className="text-xs">Love It!</Text>
						</View>
						<View className="flex-row items-center justify-center py-2 space-x-2 w-1/3">
							<Feather name="message-square" size={20} color="#4b5563" />
							<Text style={{ fontFamily:"Poppins_400Regular" }} className="text-xs">Comment</Text>
						</View>
						<View className="flex-row items-center justify-center py-2 space-x-2 w-1/3">
							<SimpleLineIcons name="share" size={20} color="#4b5563" />
							<Text style={{ fontFamily:"Poppins_400Regular" }} className="text-xs">Share</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Moments;

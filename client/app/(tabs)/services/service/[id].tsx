import axios from "axios";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Service = () => {
	const { id } = useLocalSearchParams();
	const [service, setService] = useState<any>({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`/service/${id}`)
			.then((res) => {
				setService(res.data);
			})
			.catch((err: any) => console.log(err.message))
			.finally(() => setLoading(false));
	}, []);

	return (
		<ScrollView className="flex-1 bg-off-white">
            <Spinner visible={loading} />
			<View className="flex-1 bg-main-orange">
				<View className="h-[220px] items-center justify-center space-y-3 px-6">
					<Image
						source={{ uri: service.image_url }}
						alt="Profile Photo"
						className="w-full h-44 rounded-lg object-contain"
					/>
				</View>
				<View className="bg-off-white h-full rounded-t-3xl py-6 px-6">
					<View className="items-start mb-5">
						<Text
							style={{ fontFamily: "Poppins_600SemiBold" }}
							className="text-2xl capitalize"
						>
							{service.serviceName}
						</Text>
						<Text
							style={{ fontFamily: "Poppins_400Regular" }}
							className="text-low-gray capitalize"
						>
							{service.typeOfService?.split('_').join(" ")}
						</Text>
					</View>
					<View className="flex-row items-center space-x-5 mb-5">
						<View className="bg-white/80 shadow-xl items-start w-[45%] p-3 rounded-lg">
							<Text style={{ fontFamily: "Poppins_500Medium" }}>
								Price
							</Text>
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg text-main-orange"
							>
								{`₱${service.price}`}
							</Text>
						</View>
						<View className="bg-white/80 shadow-xl items-start w-[45%] p-3 rounded-lg">
							<Text style={{ fontFamily: "Poppins_500Medium" }}>
								Duration
							</Text>
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg text-main-orange"
							>
								{service.duration} mins
							</Text>
						</View>
					</View>
					<View className="items-start space-y-4 mb-8">
						<View className="space-y-1">
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg"
							>
								About
							</Text>
							<Text
								style={{ fontFamily: "Poppins_400Regular" }}
								className="text-low-gray overflow-hidden min-h-[170px]"
							>
								{service.description}
							</Text>
						</View>
					</View>
					<View className="w-full">
						<Link href={`/services/providerServices/${id}`} asChild>
							<TouchableOpacity className="py-3 px-3 bg-main-orange rounded-lg">
								<Text
									style={{
										fontFamily: "Poppins_600SemiBold",
									}}
									className="text-off-white text-center"
								>
									Book an Appointment
								</Text>
							</TouchableOpacity>
						</Link>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default Service;

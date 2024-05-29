import axios from "axios";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Provider = () => {
	const { id } = useLocalSearchParams();
	const [provider, setProvider] = useState<any>({});
	const [loading, setLoading] = useState(false);
	const [time, setTime] = useState({
		am: "",
		pm: "",
	});

	useEffect(() => {
		setLoading(true);
		axios
			.get(`service/provider/${id}`)
			.then((res) => {
				setTime({
					am: res.data.operatingHours?.startTime!,
					pm: res.data.operatingHours?.endTime!,
				});
				setProvider(res.data);
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
						source={{ uri: provider?.image_url }}
						alt="Profile Photo"
						className="w-full h-44 rounded-lg object-contain"
					/>
				</View>
				<View className="bg-off-white h-full rounded-t-3xl py-6 px-6">
					<View className="items-start mb-5">
						<Text
							style={{ fontFamily: "Poppins_600SemiBold" }}
							className="text-2xl"
						>
							{provider?.companyName}
						</Text>
						<Text
							style={{ fontFamily: "Poppins_400Regular" }}
							className="text-low-gray"
						>
							Veterinary Behaviors
						</Text>
					</View>
					<View className="flex-row justify-between items-center space-x-5 mb-5">
						<View className="bg-white/80 shadow-xl items-start w-[105px] p-3 rounded-lg">
							<Text style={{ fontFamily: "Poppins_500Medium" }}>
								Experience
							</Text>
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg text-main-orange"
							>
								{provider?.experienceYears} years
							</Text>
						</View>
						<View className="bg-white/80 shadow-xl items-start w-[105px] p-3 rounded-lg">
							<Text style={{ fontFamily: "Poppins_500Medium" }}>
								Price
							</Text>
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg text-main-orange"
							>
								{`₱${provider?.hourlyRate}`}
							</Text>
						</View>
						<View className="bg-white/80 shadow-xl items-start w-[105px] p-3 rounded-lg">
							<Text style={{ fontFamily: "Poppins_500Medium" }}>
								Ratings
							</Text>
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg text-main-orange"
							>
								4.9
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
								className="text-low-gray max-h-[1rem] overflow-hidden"
							>
								{provider?.bio}
							</Text>
						</View>
						<View className="space-y-2">
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg"
							>
								Available Days
							</Text>
							<Text>
								{provider?.operatingDays
									? provider.operatingDays.join(" - ")
									: ""}
							</Text>
						</View>
						<View className="space-y-1">
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg"
							>
								Available Time
							</Text>
							<Text>
								{time.am} - {time.pm}
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

export default Provider;

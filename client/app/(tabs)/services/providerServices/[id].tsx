import ServiceCard from "@/components/services/ServiceCard";
import Search from "@/components/shared/Search";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Service = () => {
	const { id } = useLocalSearchParams();
	const [provider, setProvider] = useState<any>({});
	const [services, setServices] = useState<any>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`service/provider/${id}`)
			.then((res) => {
				setProvider(res.data);
			})
			.catch((err) => console.log(err));

		axios
			.get(`/service/services/${id}`)
			.then((res) => {
				setServices(res.data);
			})
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<ScrollView className="flex-1 bg-off-white">
			<Spinner visible={loading} />
			<View className="flex-1 px-6">
				<View className="h-[125px] py-5 px-5 rounded-3xl bg-white flex-row items-center space-x-4 shadow-xl mb-6">
					<View>
						<Image
							source={{ uri: provider.image_url }}
							className="object-center object-cover w-[100px] h-[100px] rounded-2xl"
						/>
					</View>
					<View className="flex-1">
						<Text style={{ fontFamily: "Poppins_400Regular" }} className="text-base">Welcome to</Text>
						<Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-2xl">{provider.companyName}</Text>
					</View>
				</View>

				<Search />
				<View className="mt-6 space-y-2">
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
						className="text-base"
					>
						Our Services
					</Text>

					<View className="flex flex-row flex-wrap justify-between gap-2">
						{services.length > 0 &&
							services.map((service: any) => (
								<ServiceCard
									key={service.serviceName}
									image_url={service.image_url}
									serviceName={service.serviceName}
									typeOfService={service.typeOfService
										.split("_")
										.join(" ")}
									href={`/`}
								/>
							))}
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default Service;

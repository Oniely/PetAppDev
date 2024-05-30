import axios from "axios";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ScrollView,
	Alert,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const ViewPet = () => {
	const { id } = useLocalSearchParams();
	const [loading, setLoading] = useState(false);
	const [pet, setPet] = useState<any>({});

	useEffect(() => {
		setLoading(true);

		axios
			.get(`/pet/${id}`)
			.then((res) => setPet(res.data))
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, []);

	const showAlert = () =>
		Alert.alert(
			"Are you sure?",
			"Please confirm you action to remove your pet",
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel",
				},
				{ text: "Confirm", onPress: () => removePet(id) },
			]
		);

	const removePet = (petId: string | string[]) => {
		axios.delete(`/pet/${petId}`).then(res => {
			if (res.data.success) {
				router.push('/profile/pets/');
			}
		})
	}

	return (
		<ScrollView className="flex-1 bg-off-white">
			<Spinner visible={loading} />
			<View className="flex-1 bg-main-orange">
				<View className="h-[220px] items-center justify-center space-y-3 px-6 relative">
					<Image
						source={
							pet.species === "Dog"
								? require("@/assets/images/dog.png")
								: require("@/assets/images/cat.png")
						}
						alt="Profile Photo"
						className="w-52 h-52 object-cover absolute bg-white rounded-lg"
					/>
				</View>
				<View className="bg-off-white h-full rounded-t-3xl py-6 px-6">
					<View className="items-start mb-5">
						<Text
							style={{ fontFamily: "Poppins_600SemiBold" }}
							className="text-2xl capitalize"
						>
							{pet.petName}
						</Text>
						<Text
							style={{ fontFamily: "Poppins_400Regular" }}
							className="text-low-gray capitalize"
						>
							{pet.species}
						</Text>
					</View>
					<View className="flex-row items-center space-x-5 mb-5">
						<View className="bg-white/80 shadow-xl items-start w-[45%] p-3 rounded-lg">
							<Text style={{ fontFamily: "Poppins_500Medium" }}>
								Breed
							</Text>
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg text-main-orange"
							>
								{pet.breed}
							</Text>
						</View>
						<View className="bg-white/80 shadow-xl items-start w-[45%] p-3 rounded-lg">
							<Text style={{ fontFamily: "Poppins_500Medium" }}>
								Age
							</Text>
							<Text
								style={{ fontFamily: "Poppins_600SemiBold" }}
								className="text-lg text-main-orange"
							>
								{`${pet.age} ${
									pet.age > 1 ? "years old" : "year old"
								}`}
							</Text>
						</View>
					</View>
					<View className="w-full">
						<Link href={`/profile/pets/edit/${id}`} asChild>
							<TouchableOpacity className="py-3 px-3 bg-main-orange rounded-lg mt-44 mb-4">
								<Text
									style={{
										fontFamily: "Poppins_600SemiBold",
									}}
									className="text-off-white text-center"
								>
									Edit Pet
								</Text>
							</TouchableOpacity>
						</Link>
					</View>
					<View className="w-full">
						<TouchableOpacity
							onPress={showAlert}
							className="py-3 px-3 bg-red-500 rounded-lg"
						>
							<Text
								style={{
									fontFamily: "Poppins_600SemiBold",
								}}
								className="text-off-white text-center"
							>
								Remove Pet
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default ViewPet;

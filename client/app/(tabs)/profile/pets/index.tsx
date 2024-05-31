import PetCard from "@/components/profile/PetCard";
import { useAuth } from "@clerk/clerk-expo";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Pets = () => {
	const [pets, setPets] = useState<any>([]);
	const [loading, setLoading] = useState(false);
	const { userId } = useAuth();

	useEffect(() => {
		setLoading(true);
		
		axios
			.get("/pet/all", { params: { userId } })
			.then((res) => {
				setPets(res.data);
			})
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<ScrollView className="flex-1 bg-white">
			<Spinner visible={loading} />
			<View className="flex-row flex-wrap justify-between flex-1 px-6 py-5">
				{pets.length > 0 &&
					pets.map((pet: any) => (
						<PetCard
							key={pet._id}
							name={pet.petName}
							species={pet.species}
							href={`/profile/pets/${pet._id}`}
						/>
					))}

				{/* ----------------- */}

				<Link href="/profile/pets/add_pet" asChild>
					<TouchableOpacity className="w-[170px] h-[190px] bg-[#e3edfb]  rounded-2xl relative shadow-xl overflow-hidden">
						<View className="w-full h-[140px] items-center justify-center">
							<View className="items-center justify-center rounded-full bg-main-orange w-14 h-14">
								<Feather name="plus" size={30} color="white" />
							</View>
						</View>
						<View className="w-full h-[50px] items-center justify-center bg-slate-100">
							<Text
								style={{ fontFamily: "Poppins_500Medium" }}
								className="text-base"
							>
								Add Pet
							</Text>
						</View>
					</TouchableOpacity>
				</Link>
			</View>
		</ScrollView>
	);
};

export default Pets;

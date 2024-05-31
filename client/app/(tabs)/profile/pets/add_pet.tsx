import { useAuth } from "@clerk/clerk-expo";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const AddPet = () => {
	const [name, setName] = useState("");
	const [species, setSpecies] = useState("Dog");
	const [breed, setBreed] = useState("");
	const [age, setAge] = useState(0);
	const [loading, setLoading] = useState(false);
	const { userId } = useAuth();

	function onPress() {
        setLoading(true);

		if (!name || !species || !breed || !age) {
			console.log([name, species, breed, age]);
            setLoading(false);
			return;
		}

		axios
			.post("/pet/add", { name, species, breed, age: Number(age), userId })
			.then((res) => {
                if (res.data.success) {
                    router.back();
                }
            })
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}

	function ageOnChange(text: any) {
		setAge(text.replace(/[^0-9]/g, ""));
	}

	return (
		<ScrollView className="flex-1 bg-white">
			<Spinner visible={loading} />
			<View className="flex-1 px-6 py-5 space-y-6">
				<View className="pt-4 space-y-1">
					<Text
						style={{ fontFamily: "Montserrat_600SemiBold" }}
						className="text-4xl text-gray-800"
					>
						Add a New Pet
					</Text>
					<Text
						style={{ fontFamily: "Montserrat_500Medium" }}
						className="text-lg text-gray-600"
					>
						Fill in information
					</Text>
				</View>
				<View className="space-y-2">
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
						className="text-base"
					>
						Pet Name:
					</Text>
					<TextInput
						placeholder="Your pet name"
						className="p-3 border rounded-xl"
						style={{ fontFamily: "Poppins_400Regular" }}
						value={name}
						onChangeText={(text) => setName(text)}
					/>
				</View>
				<View className="space-y-2">
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
						className="text-base"
					>
						Species:
					</Text>
					<View className="border rounded-xl">
						<Picker
							placeholder="Select one..."
							className="p-3"
							style={{ fontFamily: "Poppins_400Regular" }}
							selectedValue={species}
							onValueChange={(value, idx) => setSpecies(value)}
						>
							<Picker.Item label="Dog" value="Dog" />
							<Picker.Item label="Cat" value="Cat" />
						</Picker>
					</View>
				</View>
				<View className="space-y-2">
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
						className="text-base"
					>
						Breed:
					</Text>
					<TextInput
						placeholder="Your pet breed"
						className="p-3 border rounded-xl"
						style={{ fontFamily: "Poppins_400Regular" }}
						value={breed}
						onChangeText={(text) => setBreed(text)}
					/>
				</View>
				<View className="space-y-2">
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
						className="text-base"
					>
						Age:
					</Text>
					<TextInput
						placeholder="Your pet breed"
						keyboardType="numeric"
						className="p-3 border rounded-xl"
						style={{ fontFamily: "Poppins_400Regular" }}
						value={age.toString()}
						onChangeText={(text) => ageOnChange(text)}
						maxLength={2}
					/>
				</View>
				<View>
					<TouchableOpacity
						onPress={onPress}
						className="py-4 bg-main-orange rounded-xl"
					>
						<Text
							style={{ fontFamily: "Poppins_500Medium" }}
							className="text-base text-center text-off-white"
						>
							Add Pet
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default AddPet;

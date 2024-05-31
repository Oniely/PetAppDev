import { useAuth } from "@clerk/clerk-expo";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
	View,
	Text,
	ScrollView,
	TextInput,
	Pressable,
	Platform,
	TouchableOpacity,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Appointment = () => {
	const { id } = useLocalSearchParams();
	const [appointmentDate, setAppointmentDate] = useState("");
	const [appointmentTime, setAppointmentTime] = useState("");

	const [date, setDate] = useState(new Date());
	const [showPicker, setShowPicker] = useState(false);

	const [time, setTime] = useState(new Date());
	const [showTimePicker, setShowTimePicker] = useState(false);

	const [selectedPet, setSelectedPet] = useState("");
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

	const toggleDatePicker = () => {
		setShowPicker(!showPicker);
	};
	const toggleTimePicker = () => {
		setShowTimePicker(!showTimePicker);
	};

	const formatDate = (rawDate: Date) => {
		let date = new Date(rawDate);

		let year = date.getFullYear();
		let month: any = date.getMonth() + 1;
		let day: any = date.getDate();

		month = month < 10 ? `0${month}` : month;
		day = day < 10 ? `0${day}` : day;

		return `${month}/${day}/${year}`;
	};

	const formatTime = (rawTime: string) => {
		const time = rawTime.split(" ")[0];

		return time;
	}

	const onChange = ({ type }: any, selectedDate: any) => {
		if (type == "set") {
			const currentDate = selectedDate;
			setDate(currentDate);

			if (Platform.OS === "android") {
				toggleDatePicker();
				setAppointmentDate(formatDate(currentDate));
			}
		} else {
			toggleDatePicker();
		}
	};

	const timeOnChange = ({ type }: any, selectedTime: any) => {
		if (type == "set") {
			const currentTime = selectedTime;
			setTime(currentTime);

			if (Platform.OS === "android") {
				toggleTimePicker();
				setAppointmentTime(formatTime(currentTime.toTimeString()));
			}
		} else {
			toggleTimePicker();
		}
	};

	const setAppointment = () => {
		setLoading(true);

		axios
			.post("/appointment/set", {
				pet: selectedPet,
				owner: pets[0].owner,
				service: id,
				date: appointmentDate,
				time: appointmentTime,
			})
			.then((res) => {
				if (res.data.success) {
					router.replace('/services/appointment/waiting');
				} else {
					router.back();
				}
			})
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	};

	return (
		<ScrollView className="flex-1 bg-white">
			<Spinner visible={loading} />
			<View className="flex-1 min-h-[870px]">
				<View className="flex-1 px-6 py-8">
					<View className="space-y-2">
						<Text
							style={{ fontFamily: "Poppins_600SemiBold" }}
							className="text-3xl"
						>
							Appointment
						</Text>
						<Text
							style={{ fontFamily: "Poppins_400Regular" }}
							className="text-base"
						>
							Please fill in the information
						</Text>
					</View>
					<View className="flex-1 pt-10 space-y-6">
						<View>
							<Text
								style={{ fontFamily: "Poppins_400Regular" }}
								className="mb-1 text-base"
							>
								Select your pet
							</Text>
							<View className="border rounded-xl">
								<Picker
									placeholder="Select one..."
									className="p-3"
									style={{ fontFamily: "Poppins_400Regular" }}
									selectedValue={selectedPet}
									onValueChange={(value, idx) =>
										setSelectedPet(value)
									}
								>
									{pets.length > 0 &&
										pets.map((item: any) => (
											<Picker.Item
												key={item._id}
												label={item.petName}
												value={item._id}
											/>
										))}
								</Picker>
							</View>
						</View>
						<View>
							<Text
								style={{ fontFamily: "Poppins_400Regular" }}
								className="mb-1 text-base"
							>
								Date of Appointment
							</Text>
							{showPicker && (
								<DateTimePicker
									mode="date"
									display="spinner"
									value={date}
									onChange={onChange}
									minimumDate={new Date()}
									maximumDate={
										new Date(
											new Date().getFullYear(),
											12,
											31
										)
									}
									timeZoneName="Asia/Manila"
								/>
							)}
							{!showPicker && (
								<Pressable onPress={toggleDatePicker}>
									<TextInput
										placeholder="Date"
										className="border py-3 px-3 rounded-xl"
										editable={false}
										value={appointmentDate}
										onChangeText={setAppointmentDate}
									/>
								</Pressable>
							)}
						</View>
						<View>
							<Text
								style={{ fontFamily: "Poppins_400Regular" }}
								className="mb-1 text-base"
							>
								Time of Appointment
							</Text>
							{showTimePicker && (
								<DateTimePicker
									mode="time"
									display="spinner"
									value={time}
									onChange={timeOnChange}
									timeZoneName="Asia/Manila"
								/>
							)}
							{!showTimePicker && (
								<Pressable onPress={toggleTimePicker}>
									<TextInput
										placeholder="Time"
										className="border py-3 px-3 rounded-xl"
										editable={false}
										value={appointmentTime}
										onChangeText={setAppointmentTime}
									/>
								</Pressable>
							)}
						</View>
					</View>
				</View>
				<View className="flex-1 px-6">
					<TouchableOpacity
						onPress={setAppointment}
						className="items-center justify-center bg-main-orange py-3 rounded-lg"
					>
						<Text
							style={{ fontFamily: "Poppins_600SemiBold" }}
							className="text-white"
						>
							Set Appointment
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default Appointment;

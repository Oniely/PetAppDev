import { View, Text, TouchableOpacity } from "react-native";
import ProfileMenuItem from "./ProfileMenuItem";
import Colors from "@/constants/Colors";
import { useAuth } from "@clerk/clerk-expo";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";

const ProfileMenu = () => {
	const { signOut } = useAuth();

	return (
		<View className="flex-1 w-full px-6 py-6 bg-white rounded-t-3xl">
			<ProfileMenuItem
				link="/notification"
				title="Notification"
				icon={
					<Feather
						name="bell"
						size={20}
						color={Colors["dark-gray"]}
					/>
				}
			/>
			<ProfileMenuItem
				link="/pets"
				title="Your Pets"
				icon={<MaterialIcons name="catching-pokemon" size={20} color={Colors["dark-gray"]} />}
			/>
			<ProfileMenuItem
				link="/appointments"
				title="Appointment History"
				icon={<Feather name="clock" size={20} color={Colors["dark-gray"]} />}
			/>

			{/* LOGOUT  */}
			<TouchableOpacity
				onPress={async () => {
					signOut();
					await axios.post('/auth/logout');
				}}
				className="flex-row items-center py-3"
			>
				<View className="flex-row items-center flex-1 gap-4">
					<View className="items-center justify-center w-12 h-12 rounded-full bg-light-orange/60">
						<Feather
							name="log-out"
							size={20}
							color={Colors["dark-gray"]}
						/>
					</View>
					<Text
						style={{ fontFamily: "Poppins_500Medium" }}
						className="text-[16px] capitalize text-red-500"
					>
						Logout
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default ProfileMenu;

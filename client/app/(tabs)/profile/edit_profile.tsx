import { useUser } from "@clerk/clerk-expo";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { manipulateAsync } from "expo-image-manipulator";
import { router } from "expo-router";
import axios from "axios";

const EditProfile = () => {
	const { user } = useUser();
	const [firstName, setFirstName] = useState(user?.firstName);
	const [lastName, setLastName] = useState(user?.lastName);
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [image, setImage] = useState("");
	const [loading, setLoading] = useState(false);

	const onUpdatePress = async () => {
		setLoading(true);

		try {
			if (firstName !== user?.firstName || lastName !== user?.lastName) {
				await user?.update({
					firstName: firstName!,
					lastName: lastName!,
				});
			}

			if (currentPassword || newPassword) {
				await user?.updatePassword({
					currentPassword,
					newPassword,
				});
			}

			if (image) {
				const res = await manipulateAsync(image, [], { base64: true });
				await user?.setProfileImage({
					file: `data:image/png;base64,${res.base64}`,
				});
			}

			const { data } = await axios.post("/profile/update_user", {
				userId: user?.id,
				fname: firstName,
				lname: lastName,
				image_url: image,
			});
			if (data.message) {
				alert(data.message);
			}

			user?.reload();
			router.replace("/profile/");
		} catch (error: any) {
			console.log(error);
			alert(error.errors[0].message);
		} finally {
			setLoading(false);
		}
	};

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<ScrollView className="flex-1">
			<SafeAreaView className="flex-1 pb-3">
				<Spinner visible={loading} />
				<View className="h-[220px] items-center justify-center space-y-3">
					<View className="relative">
						<Image
							source={{
								uri: image || user?.imageUrl,
							}}
							alt="Profile Photo"
							className="rounded-full w-60 h-44"
						/>
						<TouchableOpacity
							onPress={pickImage}
							className="absolute p-1 rounded-full right-5 bottom-3 bg-light-orange"
						>
							<Feather name="edit-3" size={20} />
						</TouchableOpacity>
					</View>
				</View>
				<View className="px-4 space-y-3">
					<View className="gap-1">
						<Text>First Name</Text>
						<TextInput
							placeholder="Your First Name"
							className="px-3 py-3 border rounded-xl"
							value={firstName!}
							onChangeText={(text) => setFirstName(text)}
						/>
					</View>
					<View className="gap-1">
						<Text>Last Name</Text>
						<TextInput
							placeholder="Your Last Name"
							className="px-3 py-3 border rounded-xl"
							value={lastName!}
							onChangeText={(text) => setLastName(text)}
						/>
					</View>
					<View className="gap-1">
						<Text>Current Password</Text>
						<TextInput
							placeholder="Your Current Password"
							className="px-3 py-3 border rounded-xl"
							autoCapitalize="none"
							secureTextEntry={true}
							value={currentPassword}
							onChangeText={(text) => setCurrentPassword(text)}
						/>
					</View>
					<View className="gap-1">
						<Text>New Password</Text>
						<TextInput
							placeholder="Your New Password"
							className="px-3 py-3 border rounded-xl"
							autoCapitalize="none"
							secureTextEntry={true}
							value={newPassword}
							onChangeText={(text) => setNewPassword(text)}
						/>
					</View>
					<View className="gap-1">
						<TouchableOpacity
							onPress={onUpdatePress}
							className="py-4 bg-main-orange rounded-xl"
						>
							<Text
								style={{ fontFamily: "Poppins_500Medium" }}
								className="text-base text-center text-off-white"
							>
								Update
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

export default EditProfile;

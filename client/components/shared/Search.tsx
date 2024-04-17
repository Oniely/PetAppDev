import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity } from "react-native";

const Search = () => {
	return (
		<View className="border border-dark-gray/50 flex-row items-center pl-4 pr-1 py-1 rounded-2xl">
			<TextInput
				placeholder="Search..."
				className="flex-1 text-sm text-dark-gray"
			/>
			<TouchableOpacity className="bg-main-orange p-2 rounded-xl">
				<Feather
					name="search"
					size={24}
					color={Colors["orange-white"]}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default Search;

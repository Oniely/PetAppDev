import { View, Text, ScrollView } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {

	return (
		<SafeAreaView className="flex-1">
			<ScrollView className="flex-1">
        <Spinner visible={loading} />
      </ScrollView>
		</SafeAreaView>
	);
};

export default Onboarding;

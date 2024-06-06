import {
	View,
	Text,
	Image,
	ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Category from "@/components/home/Category";
import NavCard from "@/components/home/NavCard";
import Header from "@/components/home/Header";
import Search from "@/components/shared/Search";

const Home = () => {

	return (
		<SafeAreaView className="flex-1 bg-off-white">
			<ScrollView className="flex-1 space-y-[24px] px-5 pt-6">
				<Header />
				<Search />

				<View className="h-[125px] py-5 px-5 rounded-3xl bg-white flex-row items-center space-x-4 shadow-xl mb-6">
					<View className="flex-1 space-y-1">
						<Text
							style={{ fontFamily: "Poppins_600SemiBold" }}
							className="text-dark-gray text-xl"
						>
							In Love With Pets?
						</Text>
						<Text
							style={{ fontFamily: "Poppins_500Medium" }}
							numberOfLines={1}
							className="text-main-orange text-sm"
						>
							Get all what you need for them
						</Text>
					</View>
					<View>
						<Image
							source={require("@/assets/images/dogo_care.jpg")}
							className="object-center object-cover w-[100px] h-[100px] rounded-2xl"
						/>
					</View>
				</View>

				<Category />

				<View className="flex-1">
					<NavCard
						title="Services"
						cardTitle="Discover essential services for your furry friend!"
						imageUrl="https://www.nyvetclinic.com/wp-content/uploads/2018/08/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%AA%D8%AC%D9%85%D9%8A%D9%84-%D9%88%D8%B1%D8%B9%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86-%D8%A7%D9%84%D8%A3%D9%84%D9%8A%D9%81-772x515.jpg"
						gotoLink="../services"
					/>
					<NavCard
						title="Community"
						cardTitle="Connect and share with communities!"
						imageUrl="https://ontopoftheworldcommunities.com/wp-content/uploads/2020/07/on-top-of-the-world-dog-parks.jpg"
						gotoLink="../moments"
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

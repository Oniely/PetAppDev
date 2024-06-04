import NotificationCard from "@/components/notification/NotificationCard";
import { formatDateAndTime } from "@/constants/DateFormat";
import { useAuth } from "@clerk/clerk-expo";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Notifications = () => {
	const { userId } = useAuth();
	const [loading, setLoading] = useState(false);
	const [notifs, setNotifs] = useState<any>([]);
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 1500);
	}, []);

	useEffect(() => {
		setLoading(true);

		axios
			.get("/profile", { params: { userId } })
			.then((respo) => {
				if (!respo.data) {
					return;
				}

				axios
					.get("/notification", { params: { id: respo.data._id } })
					.then((res) => {
						const data = res.data;

						if (data.success) {
							setNotifs(data.notifications);
						}
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<View className="flex-1 bg-white">
			<Spinner visible={loading} />
			<ScrollView
				className="flex-1 px-4 py-4"
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			> 
				{notifs.length > 0 &&
					notifs.map((notif: any) => {
            const { formattedDate, formattedTime } = formatDateAndTime(notif?.updatedAt);

						return (
							<NotificationCard
								key={notif?._id}
								image_url={notif?.appointment.provider.image_url}
								name={notif?.appointment.provider.companyName}
								message={notif?.ownerMessage}
								status={notif.status}
								date={`${formattedDate}`}
								time={`${formattedTime}`}
								serviceName={
									notif?.appointment.service.serviceName
								}
								href={`/services/provider/${notif?.appointment.provider._id}`}
							/>
						);
					})}
			</ScrollView>
		</View>
	);
};

export default Notifications;

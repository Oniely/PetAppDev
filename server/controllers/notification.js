const Notification = require("../models/Notification");
const { StatusCodes } = require("http-status-codes");

const fetchNotifications = async (req, res) => {
	try {
		const { id } = req.query;

		console.log(`Fetching notification for: ${id}`);

		const notifications = await Notification.find({
			notifier: id,
			notifierModel: "PetOwner",
		})
			.populate("recipient")
			.populate({
                path: "appointment",
                populate: [
                    {
                        path: "service",
                        model: "Service",
                    },
                    {
                        path: "provider",
                        model: "Provider",
                    },
                ]
            });
            
		if (!notifications) {
			res.status(StatusCodes.BAD_REQUEST).json({
				success: false,
			});
		}

		console.log(notifications);

		res.status(StatusCodes.OK).json({
			success: true,
			notifications,
		});
	} catch (error) {
		throw new Error(
			`Something went wrong while fetching notifications: ${error.message}`
		);
	}
};

module.exports = {
	fetchNotifications,
};

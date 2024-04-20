const { PetOwner } = require("../models/PetOwner");
const { StatusCodes } = require("http-status-codes");

const updateUserImage = async (req, res) => {
	const { userId, image_url } = req.body;

	if (!userId) {
		console.log("Error on userId")
		res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid userId" });
	}

	try {
		const user = await PetOwner.findOneAndUpdate(
			{ userId: userData.userId },
			{ image_url },
			{ upsert: true, new: true }
		);

		res.status(StatusCodes.OK).json(true);
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json({
			message: "Something went wrong when updating user profile photo",
		});
	}
};

module.exports = {
	updateUserImage,
};

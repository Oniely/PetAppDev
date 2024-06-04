const { PetOwner } = require("../models/PetOwner");
const { StatusCodes } = require("http-status-codes");

const getProfileInfo = async (req, res) => {
	const { userId } = req.query;

	try {
		const petOwner = await PetOwner.findOne({ userId: userId });

		res.status(StatusCodes.OK).json(petOwner);
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json({
			message: "Something went wrong when updating user profile photo",
		});
	}
}

const updateUser = async (req, res) => {
	const { userId, fname, lname, phoneNumber, image_url } = req.body;

	console.log("Updating user profile: ", userId);

	let updateObject = {
		fname,
		lname,
		phoneNumber
	};

	if (userId.startsWith("user_")) {
		console.log(`Updating Profile Photo of: ${userId}`);
	} else {
		res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid userId" });
	}

	if (image_url !== "") {
		updateObject.image_url = image_url;
	}

	try {
		await PetOwner.findOneAndUpdate(
			{ userId },
			{ $set: updateObject },
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
	updateUser,
	getProfileInfo
};

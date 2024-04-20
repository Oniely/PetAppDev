const { PetOwner } = require("../models/PetOwner");
const { StatusCodes } = require("http-status-codes");

/* const signIn = async (req, res) => {
	const { userId } = req.body;

	console.log(`Sign In with: ${userId}`);

	try {
		const user = await PetOwner.findOne({ userId });

		if (user) {
			const token = createToken(user);
			res.cookie("token", token, { httpOnly: true })
				.status(StatusCodes.OK)
				.json(true);
		} else {
			res.status(StatusCodes.BAD_REQUEST).json({
				message: "No user found!",
			});
		}
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json({
			message: "Something went wrong...",
		});
	}
}; */

/* function createToken(user) {
	return jwt.sign(
		{ id: user._id, userId: user.userId },
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_EXPIRATION_TIME }
	);
} */

const signUp = async (req, res) => {
	const { userId, image_url } = req.body;

	if (!userId) {
		res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid userId" });
	}

	if (userId.startsWith("user_")) {
		console.log(`SignedIn with: ${userId}`);
	} else {
		res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid userId" });
	}

	try {
		const user = await PetOwner.findOneAndUpdate(
			{ userId },
			{ userId, image_url },
			{ upsert: true, new: true }
		);

		if (user) {
			res.status(StatusCodes.CREATED).json(true);
		} else {
			res.status(StatusCodes.BAD_REQUEST).json({
				message: "User not found",
			});	
		}
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json({
			message: "Registering went wrong",
			error,
		});
	}
};

module.exports = {
	signUp,
};

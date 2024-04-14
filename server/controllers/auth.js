const { PetOwner } = require("../models/PetOwner");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

function createToken(user) {
	return jwt.sign(
		{ id: user._id, userId: user.userId },
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_EXPIRATION_TIME }
	);
}

const signIn = async (req, res) => {
	const { userId } = req.body;

	console.log(`Sign In with: ${userId}`);

	try {
		const user = await PetOwner.find({ userId });

		if (user) {
			const token = createToken(user);
			res.cookie("token", token, { httpOnly: true })
				.status(StatusCodes.OK)
				.json({ onboarded: user.onboarded });
		}
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json({
			message: "Something went wrong...",
		});
	}
};

const signUp = async (req, res) => {
	const { userId } = req.body;

	console.log(`Sign Up with: ${userId}`);

	try {
		const user = await PetOwner.findOneAndUpdate(
			{ userId },
			{ userId },
			{ upsert: true, new: true }
		);

		if (user) {
			const token = createToken(user);
			res.cookie("token", token, { httpOnly: true })
				.status(StatusCodes.CREATED)
				.json({ onboarded: user.onboarded });
		}
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json(error);
	}
};

const logout = async (req, res) => {
	console.log(`Logging out!`);
	res.cookie("token", "", { httpOnly: true })
		.status(StatusCodes.OK)
		.json(true);
};

module.exports = {
	signIn,
	signUp,
	logout,
};

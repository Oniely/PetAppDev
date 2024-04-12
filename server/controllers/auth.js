const User = require("../models/User");
const jwt = require('jsonwebtoken');
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

	try {
		const user = await User.find({ userId });

		if (user) {
			const token = createToken(user);
			res.cookie("token", token, { httpOnly: true }).status(StatusCodes.OK).json(user);
		}
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json({ message: "Something went wrong..." });
	}
}

const signUp = async (req, res) => {
	const { userId } = req.body;
	
	try {
		const user = new User({ userId: userId });
		await user.save();

		if (user) {
			const token = createToken(user);
			res.cookie("token", token, { httpOnly: true }).status(StatusCodes.CREATED).json(user);
		}
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json(error);
	}
};

const logout = async (req, res) => {
	res.cookie("token", "", { httpOnly: true }).status(StatusCodes.OK).json(true);
}

module.exports = {
	signIn,
	signUp,
	logout
};

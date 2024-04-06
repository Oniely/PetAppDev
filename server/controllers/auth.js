const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

function getUserDataFromToken(token) {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_SECRET, {}, async (err, userData) => {
			if (err) reject(err);

			resolve(userData);
		});
	});
}

function createToken(user) {
	return jwt.sign(
		{ id: user._id, email: user.email, name: user.name },
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_EXPIRATION_TIME }
	);
}

function authErrorHandler(err) {
	let errors = { name: "", email: "", password: "" };

	// duplicate error
	if (err.code === 11000) {
		errors.email = "Email is already in use";
		return errors;
	}

	// validation errors
	if (err.message.includes("User validation failed")) {
		// console.log(Object.values(err.errors))
		Object.values(err.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
	}

	return errors;
}

const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (!user || !user.comparePassword(password)) {
			res.status(StatusCodes.UNAUTHORIZED).json({
				message: "Invalid user or password",
			});
		}

		const token = createToken(user);
		res.cookie("token", token, { httpOnly: true, maxAge: process.env.JWT_EXPIRATION_TIME * 1000 }).status(StatusCodes.OK).json(user._id);
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json(error.message);
	}
};

const signUp = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const user = await User.create({ name, email, password });

		if (user) {
			const token = createToken(user);
			res.cookie("token", token, { httpOnly: true, maxAge: process.env.JWT_EXPIRATION_TIME * 1000 }).status(StatusCodes.CREATED).json(user._id);
		}
	} catch (error) {
		const errors = authErrorHandler(error);
		res.status(StatusCodes.BAD_REQUEST).json({ errors });
	}
};

module.exports = {
	signIn,
	signUp,
};

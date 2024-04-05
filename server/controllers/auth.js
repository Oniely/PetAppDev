const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

function getUserDataFromToken(token) {
  return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_SECRET, {}, async (err, userData) => {
			if (err) reject(err);

			resolve(userData);
		});
	});
}

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
		const user = await User.findOne({ email });

		if (!user || !user.comparePassword(password)) {
			res.status(StatusCodes.UNAUTHORIZED).json({ message: "Invalid user or password" });
		}

		jwt.sign(
			{ id: user._id, email: user.email, name: user.name },
			process.env.JWT_SECRET,
			{ expiresIn: process.env.JWT_EXPIRATION_TIME },
			(err, token) => {
				if (err) throw err;
				res.cookie("token", token).json(user);
			}
		);
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json(error);
	}
}

const signUp = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const user = await User.create({ name, email, password });
		res.status(StatusCodes.CREATED).json(user);
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json(error);
	}
}

module.exports = {
	signIn,
	signUp
}
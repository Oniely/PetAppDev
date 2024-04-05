const User = require("./models/user.js");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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

		if (user) {
			const comparePassword = await bcrypt.compare(
				password,
				user.password
			);

			if (comparePassword) {
				jwt.sign(
					{ id: user._id, email: user.email, name: user.name },
					process.env.JWT_SECRET,
					{},
					(err, token) => {
						if (err) throw err;
						res.cookie("token", token).json(user);
					}
				);
			} else {
				res.status(StatusCodes.UNAUTHORIZED).json({
					msg: "Invalid Credentials",
				});
			}
		} else {
			res.status(StatusCodes.NOT_FOUND).json({
				msg: "Email does not exist",
			});
		}
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json(error);
	}
}


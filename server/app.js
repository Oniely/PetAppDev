const express = require("express");
const User = require("./models/user.js");
const app = express();

require("dotenv").config();
require("./db/db.js");

app.use(express.json());
// DIFFERENTIATE FILES for routers and controllers

app.get("/", (req, res) => {
	res.send("Success");
});

const email = "sd@gmail.com";

app.post("/sign-up", async (req, res) => {
	const isNewUser = User.isThisEmailInUse(email);

	if (!isNewUser) {
		return res.json({
			success: false,
			message: "Email is already in use.",
		});
	}

	const user = await User({
		fullname: "John Doe",
		email: email,
		password: "1234",
	});
	await user.save();
	res.json(user);
});

app.listen(4000, () => {
	console.log(`Listening on port 4000...`);
});

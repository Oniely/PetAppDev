const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
	userId: {
		type: String,
		required: true,
		unique: true,
	},
	userType: {
		type: String,
		enum: ["PetOwner", "ServiceProvider"],
    default: "PetOwner",
		required: true,
	},
	image_url: String,
	phoneNumber: String,
	address: String
});

module.exports = model("User", UserSchema);

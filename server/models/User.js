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
	address: {
		lat: {
			type: Number,
			default: 0
		},
		long: {
			type: Number,
			default: 0
		}
	},
	onboarded: {
		type: Boolean,
		default: false
	}
});

module.exports = model("User", UserSchema);

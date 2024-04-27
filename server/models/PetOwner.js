const { Schema, model } = require("mongoose");

const PetOwnerSchema = new Schema({
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
			default: 0,
		},
		long: {
			type: Number,
			default: 0,
		},
	},

	fname: String,
	lname: String,
	pets: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
});

const PetSchema = new Schema({
	petName: {
		type: String,
		required: true,
	},
	species: {
		type: String,
		enum: ["Dog", "Cat"],
		required: true,
	},
	breed: String,
	age: String,
	owner: {
		type: Schema.Types.ObjectId,
		ref: "PetOwner",
	},
});

const PetOwner = model("PetOwner", PetOwnerSchema);
const Pet = model("Pet", PetSchema);

module.exports = { PetOwner, Pet };

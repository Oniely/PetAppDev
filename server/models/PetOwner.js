const { Schema, model } = require("mongoose");
const User = require("./User");

const PetOwnerSchema = new Schema({
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

const PetOwner = User.discriminator("PetOwner", PetOwnerSchema);
const Pet = model("Pet", PetSchema);

module.exports = { PetOwner, Pet };

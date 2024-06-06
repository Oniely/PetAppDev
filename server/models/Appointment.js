const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
	pet: { type: mongoose.Schema.Types.ObjectId, ref: "Pet" },
	petOwner: { type: mongoose.Schema.Types.ObjectId, ref: "PetOwner" },
	service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
	provider: { type: mongoose.Schema.Types.ObjectId, ref: "Provider" },
	date: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
		default: "Pending",
	},
	price: {
		type: Number,
		required: true,
		default: 0
	}
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;

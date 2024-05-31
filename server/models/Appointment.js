const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
	pet: { type: mongoose.Schema.Types.ObjectId, ref: "Pet" },
	petOwner: { type: mongoose.Schema.Types.ObjectId, ref: "PetOwner" },
	service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
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
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;

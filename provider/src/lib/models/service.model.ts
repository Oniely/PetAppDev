import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
	provider: { type: mongoose.Schema.Types.ObjectId, ref: "Provider" },
	image_url: {
		type: String,
		require: true,
	},
	serviceName: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	duration: {
		type: Number,
		require: true,
		min: 1, // in minutes
	},
	price: { type: Number, require: true },
});

export const Service = mongoose.models?.Service || mongoose.model("Service", ServiceSchema);

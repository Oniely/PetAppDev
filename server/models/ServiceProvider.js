const { Schema, model } = require("mongoose");
const User = require("./User");

const ServiceProviderSchema = new Schema({
	companyName: {
		type: String,
		required: true,
	},
	description: String,
	experienceYears: Number,
	hourlyRate: {
		type: Number,
		required: true,
	},
	servicesOffered: [{ type: Schema.Types.ObjectId, ref: "Service" }],
	ratings: [{ rating: Number, comment: String }],
});

const ServiceSchema = new Schema({
	provider: { type: Schema.Types.ObjectId, ref: "ServiceProvider" },
	serviceName: {
		type: String,
		required: true,
	},
	description: String,
	duration: {
		type: Number,
		require: true,
		min: 1, // in minutes
	},
	price: { type: Number, require: true },
});

const ServiceProvider = User.discriminator(
	"ServiceProvider",
	ServiceProviderSchema
);
const Service = model("Service", ServiceSchema);

module.exports = { ServiceProvider, Service };

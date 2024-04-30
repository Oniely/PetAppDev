import { Schema, model, models } from 'mongoose';

const ServiceProviderSchema = new Schema({
	userId: {
		type: String,
		required: true,
		unique: true,
	},
	userType: {
		type: String,
		enum: ["PetOwner", "ServiceProvider"],
		default: "ServiceProvider",
		required: true,
	},
	image_url: String,
	phoneNumber: String,
	companyName: {
		type: String,
		required: true,
	},
	typeOfProvider: {
		type: String,
		required: true
	},
	bio: String,
	experienceYears: Number,
	hourlyRate: {
		type: Number,
		required: true,
	},
	onboarded: {
		type: Boolean,
		default: false
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

export const Provider = models.Provider || model("Provider", ServiceProviderSchema);
export const Service = models.Service || model("Service", ServiceSchema);

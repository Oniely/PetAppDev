const mongoose = require("mongoose");

const timeFormat12Hour = /^(0[1-9]|1[0-2]):([0-5][0-9]) ?([AaPp][Mm])$/;
const operatingDaysEnum = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

const AvailabilitySchema = new mongoose.Schema(
	{
		startTime: {
			type: String,
			required: true,
			match: [
				timeFormat12Hour,
				"Start time must be in the format HH:mm AM/PM",
			],
		},
		endTime: {
			type: String,
			required: true,
			match: [
				timeFormat12Hour,
				"End time must be in the format HH:mm AM/PM",
			],
		},
	},
	{ _id: false }
);

const ServiceProviderSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
		unique: true,
	},
	image_url: {
		type: String,
		required: true,
	},
	phoneNumber: String,
	companyName: {
		type: String,
		required: true,
	},
	typeOfProvider: {
		type: String,
		required: true,
	},
	bio: String,
	experienceYears: Number,
	hourlyRate: {
		type: Number,
		required: true,
	},
	onboarded: {
		type: Boolean,
		default: false,
	},
	operatingDays: {
		type: [String],
		enum: operatingDaysEnum,
		required: true,
		validate: {
			validator: function (array) {
				return array.length > 0 && array.length <= 7;
			},
			message: "Operating days must be between 1 and 7 days",
		},
	},
	operatingHours: {
		type: AvailabilitySchema,
		required: true,
	},
	servicesOffered: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
	ratings: [{ rating: Number, comment: String }],
});

const Provider =
	mongoose.models.Provider ||
	mongoose.model("Provider", ServiceProviderSchema);

const ServiceTypes = {
	GROOMING: "GROOMING",
	VETERINARY: "VETERINARY",
	DAY_CARE: "DAY_CARE",
	PET_BREEDING: "PET_BREEDING",
	PET_CHECKUP: "PET_CHECKUP",
	PET_TRAINING: "PET_TRAINING",
	PET_BOARDING: "PET_BOARDING",
	PET_SITTING: "PET_SITTING",
	PET_WALKING: "PET_WALKING",
};

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
	typeOfService: {
		type: String,
		enum: ServiceTypes,
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
	status: {
		type: Boolean,
		default: true,
	},
	price: { type: Number, require: true },
});

const Service =
	mongoose.models.Service || mongoose.model("Service", ServiceSchema);

module.exports = {
	Provider,
	Service,
};

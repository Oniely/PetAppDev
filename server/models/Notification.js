const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
	notifier: { type: mongoose.Schema.Types.ObjectId, refPath: 'notifierModel' },
	recipient: { type: mongoose.Schema.Types.ObjectId, refPath: 'notifyeeModel' },
	notifierModel: { type: String, enum: ['Provider', 'PetOwner'] },
	recipientModel: { type: String, enum: ['PetOwner', 'Provider'] },
	appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
	status: {
		type: String,
		required: true
	},
	ownerMessage: {
		type: String,
		required: true
	},
	providerMessage: {
		type: String,
		required: true
	},
}, {
	timestamps: true
})

const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = Notification;
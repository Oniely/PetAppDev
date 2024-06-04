const Appointment = require("../models/Appointment");
const { StatusCodes } = require("http-status-codes");
const Notification = require("../models/Notification");

const setAppointment = async (req, res) => {
	try {
		const { pet, owner, service, provider,  date, time } = req.body;

		console.log(req.body);

		const appointment = new Appointment({
			pet,
			petOwner: owner,
			service,
			provider,
			date,
			time,
		});

		const newAppointment = await appointment.save();

		const apt = await Appointment.findById(newAppointment._id).populate('petOwner').populate('provider').exec();

		const notification = await Notification.create({
			notifier: apt.petOwner._id,
			recipient: apt.provider._id,
			notifierModel: "PetOwner",
			recipientModel: "Provider",
			appointment: apt._id,
			status: apt.status,
			message: `${apt.petOwner.fname} has requested an appointment for your service`
		})

		if (!newAppointment && !notification) {
			res.status(StatusCodes.BAD_REQUEST).json({
				success: false,
			});
			return;
		}

		res.status(StatusCodes.CREATED).json({
			success: true,
		});
	} catch (error) {
		throw new Error(
			`Something went wrong while setting an appointment: ${error.message}`
		);
	}
};

module.exports = {
	setAppointment,
};

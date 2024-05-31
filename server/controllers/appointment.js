const Appointment = require("../models/Appointment");
const { StatusCodes } = require("http-status-codes");

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

		if (!newAppointment) {
			res.status(StatusCodes.BAD_REQUEST).json({
				success: false,
			});
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

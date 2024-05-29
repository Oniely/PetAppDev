const { StatusCodes } = require("http-status-codes");
const { Provider, Service } = require("../models/ServiceProvider");

const fetchProviders = async (req, res) => {
	try {
		console.log(`fetchProviders`);
		const providers = await Provider.find({});

		res.status(StatusCodes.OK).json(providers);
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json({
			message: "Something went wrong while fetching for providers",
		});
		throw new Error(
			`Something went wrong while fetching for providers: ${error.message}`
		);
	}
};

const getProvider = async (req, res) => {
	try {
		const { id } = req.params;
		console.log(`getProvider: ${id}`);

		const provider = await Provider.findOne({ _id: id });

		if (!provider) {
			res.status(StatusCodes.NOT_FOUND).json({
				message: "Service Provider Not Found",
			});
		}

		res.status(StatusCodes.OK).json(provider);
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json({
			message: "Something went wrong while fetching for a provider",
		});
		throw new Error(
			`Something went wrong while fetching for providers: ${error.message}`
		);
	}
};

const fetchServices = async (req, res) => {
	try {
		const { id } = req.params;
		console.log(`fetchServices: ${id}`);

		const services = await Service.find({ provider: id });

		if (!services) {
			res.status(StatusCodes.BAD_REQUEST).json({
				message: "Services not available or does not exist. Please recheck."
			});
		}
		res.status(StatusCodes.OK).json(services);
	} catch (error) {
		throw new Error(
			`Something went wrong while fetching for services: ${error.message}`
		);
	}
};

const getService = async (req, res) => {
	try {
		const { id } = req.params;
		console.log(`getService: ${id}`);

		const service = await Service.findById(id);

		if (!service) {
			res.status(StatusCodes.NOT_FOUND).json({
				message: "Service is not available or does not exist. Please recheck."
			})
		}
		res.status(StatusCodes.OK).json(service);
	} catch (error) {
		throw new Error(
			`Something went wrong while fetching for service: ${error.message}`
		);
	}
};

module.exports = {
	fetchProviders,
	getProvider,
	fetchServices,
	getService
};

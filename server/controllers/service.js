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

module.exports = {
	fetchProviders,
	getProvider,
};

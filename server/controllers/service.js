const { StatusCodes } = require("http-status-codes");
const { Provider, Service } = require("../models/ServiceProvider");

const fetchProviders = async (req, res) => {
	try {
		const providers = await Provider.find({});
		res.status(StatusCodes.OK).json(providers);
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json({
			message: "Something went wrong while fetching for providers",
		});
		throw new Error(`Something went wrong while fetching for providers: ${error.message}`);
	}
} 

module.exports = {
	fetchProviders
}
const { ServiceProvider, Service } = require("../models/ServiceProvider");

function fetchServices(pageNumber = 1, pageSize = 10) {}

const getServiceProviders = async (req, res) => {
	const { pageNumber, pageSize } = req.body;

	if (!pageNumber || !pageSize) {
		res.status(StatusCodes.BAD_REQUEST).json({
			message: "pageNumber or pageSize is required",
		});
	}

	const skipAmount = (pageNumber - 1) * pageSize;

	try {
		const providersQuery = ServiceProvider.find({})
			.skip(skipAmount)
			.limit(pageSize);

        const totalProvidersCount = await ServiceProvider.countDocuments({});

        const providers = await providersQuery.exec();

        const isNext = totalProvidersCount > skipAmount + providers.length;

        res.status(StatusCodes.OK).json({ providers, isNext }) 
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json({
			message: "An error has occured when fetching services",
			error,
		});
	}
};

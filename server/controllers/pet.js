const { Pet, PetOwner } = require("../models/PetOwner");
const { StatusCodes } = require("http-status-codes");

const AddPet = async (req, res) => {
	try {
		const { name, breed, species, age, userId } = req.body;

		const owner = await PetOwner.findOne({ userId });

		console.log("Adding Pet: ", owner._id);

		const pet = new Pet({
			petName: name,
			species,
			breed,
			age,
			owner: owner._id,
		});

		const newPet = await pet.save();

		const updatedPetOwner = await PetOwner.findOneAndUpdate(
			{ _id: owner._id },
			{ $push: { pets: newPet._id } },
			{ new: true }
		);

		if (!updatedPetOwner) {
			res.status(StatusCodes.BAD_REQUEST).json({
				success: false,
				message: 'Pet owner not found or update has failed'
			});	
		}

		res.status(StatusCodes.CREATED).json({
			success: true,
		});
	} catch (error) {
		throw new Error(
			`Something went wrong while trying to add pet: ${error.message}`
		);
	}
};

const fetchPets = async (req, res) => {
	try {
		const { userId } = req.query;

		console.log('fetching pets: ', userId);

		const owner = await PetOwner.findOne({ userId });

		const pets = await Pet.find({ owner: owner._id });

		if (!pets) {
			res.status(StatusCodes.BAD_REQUEST).json({
				success: false,
				message: 'Pet owner not found or update has failed'
			});	
		}

		res.status(StatusCodes.OK).json(pets);
	} catch (error) {
		throw new Error(
			`Something went wrong while trying to fetch pets: ${error.message}`
		);
	}
};

module.exports = {
	AddPet,
	fetchPets
};

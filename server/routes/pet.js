const express = require("express");
const {
	AddPet,
	fetchPets,
	getPet,
	updatePet,
	removePet,
} = require("../controllers/pet");
const router = express.Router();

router.route("/add").post(AddPet);
router.route("/all").get(fetchPets);
router.route("/:id").get(getPet).put(updatePet).delete(removePet);

module.exports = router;

const express = require("express");
const { AddPet, fetchPets } = require("../controllers/pet");
const router = express.Router();

router.route("/add").post(AddPet);
router.route("/all").get(fetchPets);

module.exports = router;

const express = require("express");
const {
	fetchProviders,
	getProvider,
	getServices,
} = require("../controllers/service");
const router = express.Router();

router.route("/all").get(fetchProviders);
router.route("/provider/:id").get(getProvider);
router.route("/services/:id").get(getServices);

module.exports = router;

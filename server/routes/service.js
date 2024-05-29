const express = require("express");
const {
	fetchProviders,
	getProvider,
	fetchServices,
	getService,
} = require("../controllers/service");
const router = express.Router();

router.route("/all").get(fetchProviders);
router.route("/provider/:id").get(getProvider);
router.route("/provider/services/:id").get(fetchServices);
router.route("/:id").get(getService);

module.exports = router;

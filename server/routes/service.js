const express = require("express");
const { fetchProviders, getProvider } = require("../controllers/service");
const router = express.Router();

router.route("/all").get(fetchProviders);
router.route("/provider/:id").get(getProvider);

module.exports = router;

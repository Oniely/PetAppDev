const express = require("express");
const { updateUserImage } = require("../controllers/profile");
const router = express.Router();

router.route("/update_photo").post(updateUserImage);

module.exports = router;

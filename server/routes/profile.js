const express = require("express");
const { updateUser, getProfileInfo } = require("../controllers/profile");
const router = express.Router();

router.route("/update_user").post(updateUser);
router.route("/").get(getProfileInfo);

module.exports = router;

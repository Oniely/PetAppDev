const express = require("express");
const { updateUser } = require("../controllers/profile");
const router = express.Router();

router.route("/update_user").post(updateUser);

module.exports = router;

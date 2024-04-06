const express = require('express');
const router = express.Router();
const User = require('../models/User');

async function test(req, res) {
  try {
    const users = await User.find({});

    if (!users) {
      res.status(400).json({ message: "NO USERS" });
    }

    res.status(200).json(users)
  } catch (error) {
    console.log(error);
  }
}

router.route('/test').get(test);
router.route('/gago').get(test);

module.exports = router;
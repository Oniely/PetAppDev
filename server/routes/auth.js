const express = require('express');
const router = express.Router();

const {
	signUp,
  logout
} = require('../controllers/auth');

router.route('/sign-up').post(signUp);
router.route('/logout').post(logout);

module.exports = router;
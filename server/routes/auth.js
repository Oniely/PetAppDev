const express = require('express');
const router = express.Router();

const {
	signUp,
} = require('../controllers/auth');

router.route('/sign-up').post(signUp);

module.exports = router;
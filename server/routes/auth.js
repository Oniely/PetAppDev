const express = require('express');
const router = express.Router();

const {
  signIn,
	signUp,
  logout
} = require('../controllers/auth');

router.route('/sign-in').post(signIn);
router.route('/sign-up').post(signUp);
router.route('/logout').post(logout);

module.exports = router;
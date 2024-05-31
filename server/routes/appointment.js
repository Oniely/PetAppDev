const express = require('express');
const { setAppointment } = require('../controllers/appointment');
const router = express.Router();

router.route('/set').post(setAppointment);

module.exports = router;
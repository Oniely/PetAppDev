const express = require('express');
const { fetchNotifications } = require('../controllers/notification');
const router = express.Router();

router.route('/').get(fetchNotifications);

module.exports = router;
const express = require('express');
const { fetchProviders } = require('../controllers/service');
const router = express.Router();

router.route('/all').get(fetchProviders);

module.exports = router;
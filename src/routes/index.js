const express = require('express');
const clubs = require('./clubs.route');
const router = express.Router();
router.use('/clubs', clubs)

module.exports = router;
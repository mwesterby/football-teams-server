const express = require('express');

const club = require('./club.route');
const clubs = require('./clubs.route');

const router = express.Router();

router.use('/club', club)
router.use('/clubs', clubs)

module.exports = router;
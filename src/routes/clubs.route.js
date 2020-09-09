const express = require('express');

const clubsController = require('../controllers/clubs.controller');

const router = express.Router();

router
    .route('/')
    .get(clubsController.getClubs);

router
    .route('/:id')
    .put(clubsController.putClub);

module.exports = router;
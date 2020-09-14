const express = require('express');

const clubController = require('../controllers/club.controller');

const router = express.Router();

router
    .route('/:id')
    .get(clubController.getClub)
    .put(clubController.putClub)
    .delete(clubController.deleteClub);

module.exports = router;
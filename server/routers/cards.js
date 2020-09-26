const express = require('express');

const router = express.Router();
const { getCards } = require('../controllers/cardController');

router.get('/cards', getCards);

module.exports = router;

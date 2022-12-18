const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

router.get('/', calculatorController.getCalculator);
router.post('/saveRecipe', calculatorController.saveRecipe);

module.exports = router;
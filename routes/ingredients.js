const router = require('express').Router();
const ingredientsController = require('../controllers/ingredientsController');
const { ensureAuth, eunsureGuest } = require("../middleware/auth");

router.get('/:id', ensureAuth, ingredientsController.getIngredients);

router.post('/addIngredient', ingredientsController.addIngredient);

router.delete('/deleteIngredient', ingredientsController.deleteIngredient);

module.exports = router;
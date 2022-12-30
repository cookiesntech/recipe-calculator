const router = require('express').Router();
const recipeBookController = require('../controllers/bookController');
const { ensureAuth, eunsureGuest } = require("../middleware/auth");

router.get('/', ensureAuth, recipeBookController.getRecipes);

//router.post('/addIngredient', ingredientsController.addIngredient);

//router.delete('/deleteIngredient', ingredientsController.deleteIngredient);

module.exports = router;
const router = require('express').Router();
const ingredientsController = require('../controllers/ingredientsController');

router.get('/', ingredientsController.getIngredients);

router.post('/addIngredient', ingredientsController.addIngredient);

router.delete('/deleteIngredient', ingredientsController.deleteIngredient);

module.exports = router;
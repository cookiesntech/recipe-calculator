const Ingredients = require('../models/ingredientModel');
const Recipe = require('../models/recipeModel')

module.exports = {
    getCalculator: async (req, res) => {
        try {
        const selected  = req.query.selectedIngredients.split(',');
        const selection = await Ingredients.find({_id:{$in:selected}}).lean();
        res.render('calculator.ejs', {selection: selection});
        } catch (err) {
            console.error(err);
        }
        
    },
    saveRecipe: async (req, res) => {
        const recipe = req.body.recipe;
        
        console.log(recipe);
        try {
            await Recipe.create({
                ingredients: recipe
            });
            console.log("Saved recipe");
            res.json("Saved recipe");
        } catch(err) {
            console.error(err);
        }
    }
}
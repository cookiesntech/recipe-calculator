const Ingredients = require('../models/ingredientModel');
const Recipe = require('../models/recipeModel')
const Calculator = require("../models/calculatorModel")

module.exports = {
    getCalculator: async (req, res) => {
        try {
        const selected  = req.query.selectedIngredients.split(',');
        const selection = await Ingredients.find({_id:{$in:selected}}).lean();
        //console.log(selection)
        await Calculator.create({ingredients: selection, user: req.user.id});
        const calculator = await Calculator.findOne({user: req.user.id});
        const calculated = calculator.calculateIngredients();
        const totals = calculator.calculateTotals();
        console.log(totals)
        res.render('calculator.ejs', {calculated: calculated, totals: totals});
        } catch (err) {
            console.error(err);
        }
        
    },
    saveRecipe: async (req, res) => {
        const recipe = req.body.recipe;
        
        console.log(recipe);
        try {
            await Recipe.create({
                ingredients: recipe,
                user: req.user.id
            });
            await Calculator.deleteMany()
            console.log("Saved recipe");
            res.json("Saved recipe");
        } catch(err) {
            console.error(err);
        }
    }
}
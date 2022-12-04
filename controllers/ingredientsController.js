const Ingredients = require('../models/ingredientModel');

module.exports = {
    getIngredients: async (req, res) => {
        try {
            const ingredients = await Ingredients.find();
            res.render('ingredients.ejs', {ingredients: ingredients});
        } catch(err) {
            console.error(err);
        }
    },
    addIngredient: async (req, res) => {
        try {
            await Ingredients.create({
                ingredient: req.body.ingredient,
                //category: req.body.category,
                amount: req.body.amount,
                water: req.body.water,
                sugar: req.body.sugar,
                fat: req.body.fat,
                cocoaButter: req.body.cocoa
            });
            console.log("Ingredient added");
            res.redirect('/ingredients');
        } catch(err) {
            console.error(err);
        }
    },
    deleteIngredient: async (req, res) => {
        console.log(` Ingredient ID: ${req.body.ingredientIdFromJSFile}`);
        try {
            await Ingredients.findOneAndDelete({_id:req.body.ingredientIdFromJSFile});
            console.log("Ingredient deleted");
            res.json("Deleted");
        } catch(err) {
            console.error(err);
        }
    },
    selectIngredients: async (req, res) => {
        try {
            const selected  = req.body.selectedFromJSFile;
            console.log(typeof selected);
            const selection = await Ingredients.find({_id:{$in:selected}});
            console.log(selection);
            res.json("Selected");
        } catch(err) {
        console.error(err);
        }
        
    }
}
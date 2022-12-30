const Ingredients = require('../models/ingredientModel');

module.exports = {
    //Display all ingredients
    getIngredients: async (req, res) => {
        try {
            const ingredients = await Ingredients.find({user: req.user.id});
            res.render('ingredients.ejs', {ingredients: ingredients, user: req.user});
        } catch(err) {
            console.error(err);
        }
    },
    //Add ingredient to db
    addIngredient: async (req, res) => {
        try {
            await Ingredients.create({
                ingredient: req.body.ingredient,
                ratio: req.body.ratio,
                amount: req.body.amount,
                water: req.body.water,
                sugar: req.body.sugar,
                fat: req.body.fat,
                cocoaButter: req.body.cocoa,
                user: req.user.id
            });
            console.log("Ingredient added");
            res.redirect('/ingredients');
        } catch(err) {
            console.error(err);
        }
    },
    //Delete ingredient from db
    deleteIngredient: async (req, res) => {
        console.log(` Ingredient ID: ${req.body.ingredientIdFromJSFile}`);
        try {
            await Ingredients.findOneAndDelete({_id:req.body.ingredientIdFromJSFile});
            console.log("Ingredient deleted");
            res.json("Deleted");
        } catch(err) {
            console.error(err);
        }
    }
    
}
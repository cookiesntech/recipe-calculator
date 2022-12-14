const Recipes = require('../models/recipeModel');

module.exports = {
    //Display all ingredients
    getRecipes: async (req, res) => {
        try {
            const recipes = await Recipes.find({user: req.user.id});
            res.render('recipeBook.ejs', {recipes: recipes, user: req.user});
        } catch(err) {
            console.error(err);
        }
    }
}
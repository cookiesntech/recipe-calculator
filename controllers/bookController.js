const Recipes = require('../models/recipeModel');

module.exports = {
    //Display all ingredients
    getRecipes: async (req, res) => {
        try {
            const recipes = await Recipes.find({user: req.user.id});
            console.log(Object.keys(recipes[0].ingredients))
            res.render('recipeBook.ejs', {recipes: recipes, user: req.user});
        } catch(err) {
            console.error(err);
        }
    }
}
const Recipe = require('../models/recipeModel')

module.exports = {
    getMenu: async (req, res) => {
        try {
        const selected  = req.query.selectedRecipes.split(',');
        const selection = await Recipe.find({_id:{$in:selected}}).lean();
        console.log(selected);
        res.render('menu.ejs', {selection: selection});
        } catch (err) {
            console.error(err);
        }
        
    }
}
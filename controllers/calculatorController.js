const Ingredients = require('../models/ingredientModel');

module.exports = {
    getCalculator: async (req, res) => {
        try {
        const selected  = req.query.selectedIngredients.split(',');
        const selection = await Ingredients.find({_id:{$in:selected}}).lean();
        res.render('calculator.ejs', {selection: selection});
        } catch (err) {
            console.error(err);
        }
        
    }
}
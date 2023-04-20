const mongoose = require('mongoose');

const CalculatorSchema = new mongoose.Schema({
    ingredients: { 
        type: mongoose.Schema.Types.Mixed,
        ref: "Ingredients"
   },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
});
//define a method on the model to calculate the initial ingredient amounts for base recipe of 250g
CalculatorSchema.methods.calculateIngredients = function() {
    const calculatedIngredients = [...this.ingredients]
    this.ingredients.forEach((ingredient, index) => {
        let base = ingredient.ratio / 100;
        calculatedIngredients[index].amount = base * 250;
        calculatedIngredients[index].water = (base * ingredient.water).toFixed(2)
        calculatedIngredients[index].fat = (base * ingredient.fat).toFixed(2)
        calculatedIngredients[index].sugar = (base * ingredient.sugar).toFixed(2)
        calculatedIngredients[index].cocoaButter = (base * ingredient.cocoaButter).toFixed(2)
    });
    return calculatedIngredients;
}

//define a method to calculate total amounts of water, fat, sugar and cocoa butter
CalculatorSchema.methods.calculateTotals = function() {
    const totals = {
        ratio: 0,
        tableTerm: "Totals",
        amount: 0,
        water: 0,
        fat: 0,
        sugar: 0,
        cocoaButter: 0
    }
    totals.ratio = this.ingredients.map(ingr => ingr.ratio).reduce((total, current) => total + current, 0)
    totals.amount = this.ingredients.map(ingr => ingr.amount).reduce((total, current) => total + current, 0);
    totals.water = this.ingredients.map(ingr => +ingr.water).reduce((total, current) => total + current, 0)
    totals.fat = this.ingredients.map(ingr => +ingr.fat).reduce((total, current) => total + current, 0);
    totals.sugar = this.ingredients.map(ingr => +ingr.sugar).reduce((total, current) => total + current, 0);
    totals.cocoaButter = this.ingredients.map(ingr => +ingr.cocoaButter).reduce((total, current) => total + current, 0)
    return totals;
}

module.exports = mongoose.model('Calculator', CalculatorSchema);

// totals.water = this.ingredients.map(ingr => ingr.ratio / 100 * ingr.water).reduce((total, current) => total + current, 0))
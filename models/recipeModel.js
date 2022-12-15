const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: [{
        ingr: String,
        qty: Number,
    }],
    notes: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
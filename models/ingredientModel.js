const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    ingredient: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    ratio: {
        type: Number,
        required: true,
    },
    water: {
        type: Number,
        required: false,
    },
    sugar: {
        type: Number,
        required: false,
    },
    fat: {
        type: Number,
        required: false,
    },
    cocoaButter: {
        type: Number,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
});

module.exports = mongoose.model('Ingredients', IngredientSchema);
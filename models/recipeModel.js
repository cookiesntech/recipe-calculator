const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    ingredients: { 
        type: mongoose.Schema.Types.Mixed,
   },
    notes: {
        type: String,
        required: false,
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //   }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
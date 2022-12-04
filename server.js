const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main');
const ingredientRoutes = require('./routes/ingredients');
const calculatorRoutes = require('./routes/calculator');
//const bookRoutes = require('./routes/recipeBook');
//const menuRoutes = require('./routes/menu');

require('dotenv').config({path: './config/.env'});

connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainRoutes);
app.use('/ingredients', ingredientRoutes);
app.use('/calculator', calculatorRoutes);
//app.use('/recipeBook', bookRoutes);
//app.use('/menu', menuRoutes);

app.listen(process.env.PORT, () => {
    console.log("Runniiiiiiing");
});
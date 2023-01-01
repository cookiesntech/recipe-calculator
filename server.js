const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require("passport");
const session = require('express-session');
const MongoStore = require("connect-mongo");
const logger = require("morgan");
const flash = require("express-flash");
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main');
const ingredientRoutes = require('./routes/ingredients');
const calculatorRoutes = require('./routes/calculator');
const bookRoutes = require('./routes/recipeBook');
const menuRoutes = require('./routes/menu');

require('dotenv').config({path: './config/.env'});
require("./config/passport")(passport);
const PORT = process.env.PORT;
connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongoUrl: process.env.DB_STRING }),
    })
  );

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use('/', mainRoutes);
app.use('/ingredients', ingredientRoutes);
app.use('/calculator', calculatorRoutes);
app.use('/recipeBook', bookRoutes);
app.use('/menu', menuRoutes);

app.listen(PORT, () => {
    console.log(`Runniiiiiiing at ${PORT}`);
});
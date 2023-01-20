# recipe-calculator
Inspired by my trusty [excel sheet](https://docs.google.com/spreadsheets/d/1Ry8QNG-YIC2sWV-MULdL3IX2G5YZTfctBNR8MQJmBZw/edit#gid=1311874974), this recipe calculator allows users (professional pastry chefs and chocolatiers) to create balanced chocolate ganache recipes with ingredients from their inventory. 

## Whiteboard
[Miro](https://miro.com/app/board/uXjVP7ESojk=/?share_link_id=70780059162)

## Tech Stack

This is a full-stack application built with MVC architecture and authentication.
* Node 
* Express 
* MongoDB 
* EJS

Soon to come:
* React
* CSS

## How it works (so far):
After creating an account, the user can log in and fill their inventory with ingredients. For each ingredient, they have to input an amount in stock and have the option to specify a recipe ratio for that ingredient, along with its relevant metrics - water, sugar, fat and cocoa butter content.
The user can then select ingredients from their inventory to calculate a recipe with. As of now, the calculator does all the math for a base recipe of 250g (smallest possible amount to physically work with; ideal for recipe testing and scaling). The recipe can then be saved in the user's Recipe Book.
From the recipe book, specific recipes can be selected to create a Menu for production day.


https://user-images.githubusercontent.com/97986457/213702261-f98e41d7-17c1-4637-b122-63a0b925761d.mov

## What I'm working on next:
- enable editing of ingredients' amounts in the recipe calculator to allow custom building of recipes;
- add "recipe name", "notes" and "image" fields on the calculator page, so the user can save all that information to their recipe book along with the recipe itself;
- implement optional batch size adjustments when selecting recipes for production - e.g. Batch x4 would put a recipe for 1kg of ganache as opposed to the base 250g;
- adjust inventory ingredients' amounts after a recipe from the menu gets marked as "Done" by the amounts used for that recipe;
- build an aesthetically pleasing frontend, implementing React - which will involve moving a couple of my existing functionalities to React components. Should be fun :D

Check out the Miro board to see more of the ideas I have for the future of my app!

const deleteBtn = document.querySelectorAll(".delete-ingredient");
const createRecipeBtn = document.getElementById("create-recipe");
const saveRecipeBtn = document.getElementById("save-recipe");
const createMenuBtn = document.getElementById("create-menu");


//Event listeners
Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteIngredient);
})

if (createRecipeBtn) {
    createRecipeBtn.addEventListener('click', createRecipe);
}
if (createMenuBtn) {
    createMenuBtn.addEventListener('click', createMenu);
}
saveRecipeBtn.addEventListener('click', saveRecipe);

//Delete ingredient by data id
async function deleteIngredient() {
    const ingrId = this.parentNode.parentNode.dataset.id;
    
    try {
        const response = await fetch('ingredients/deleteIngredient', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'ingredientIdFromJSFile': ingrId
            })
        });
        const data = await response.json();
        console.log(data);
        location.reload();
    } catch(err) {
        alert("You tried to do something.");
        console.error(err);
    }
}

//Pass selected ingredients' IDs to the URL in order to display selection on calculator page
async function createRecipe() {
    const selectedIngredientsIds = checkBoxes();
    document.location.href = `/calculator?selectedIngredients=${selectedIngredientsIds}`;
}

async function createMenu() {
    const selectedRecipeIds = checkBoxes();
    document.location.href = `/menu?selectedRecipes=${selectedRecipeIds}`;
    console.log("Checkbox IDs" + selectedRecipeIds)
}

//Get data ids of selected ingredients
function checkBoxes() {
    const checkedBoxes = document.querySelectorAll('input[name=checkbox]:checked');
    const selectedIds = [];
    checkedBoxes.forEach(box => {
        const boxId = box.parentElement.parentElement.dataset.id;
        selectedIds.push(boxId);
    })
    return selectedIds;
}

async function saveRecipe() {
    const namesElements = document.getElementsByClassName("ingredient-name");
    const amountsElements = document.getElementsByClassName("ingredient-amount");
    const ingredientNames = [];
    const ingredientAmounts = [];

    for (let i = 0; i < namesElements.length; i++) {
        let name = namesElements.item(i).innerHTML.trim();
        ingredientNames.push(name);
    }
    for (let i = 0; i < amountsElements.length; i++) {
        let amount = amountsElements.item(i).innerHTML.trim();
        ingredientAmounts.push(amount);
    }
    
    const recipe = Object.assign(...ingredientNames.map((key, index) => {
        return ({[key]: ingredientAmounts[index]});
    }));
    
    try {
        const response = await fetch('calculator/saveRecipe', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({'recipe': recipe})
        });
        const data = await response.json();
        console.log(data);
        document.location.href = "/recipeBook";
    } catch(err) {
        alert("You tried to do something.");
        console.error(err);
    }
}

// function toObject(arr1, arr2) {
    
//     return newObject;
// }
//Test function 
// async function testResponse() {
//     try {
//         alert("You tried to do something.");
//     } catch(err) {
//         console.error(err);
//     }
// }
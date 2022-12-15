const deleteBtn = document.querySelectorAll(".delete-ingredient");
const createRecipeBtn = document.getElementById("create-recipe");


//Event listeners
Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteIngredient);
})

createRecipeBtn.addEventListener('click', createRecipe);

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

//Get data ids of selected ingredients
function checkBoxes() {
    const checkedBoxes = document.querySelectorAll('input[name=checkbox]:checked');
    const selectedIds = [];
    checkedBoxes.forEach(box => {
        const ingrId = box.parentElement.parentElement.dataset.id;
        selectedIds.push(ingrId);
    })
    return selectedIds;
}

//Test function 
// async function testResponse() {
//     try {
//         alert("You tried to do something.");
//     } catch(err) {
//         console.error(err);
//     }
// }
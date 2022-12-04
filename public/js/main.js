const deleteBtn = document.querySelectorAll(".delete-ingredient");
const createRecipeBtn = document.getElementById("create-recipe");

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteIngredient);
})

createRecipeBtn.addEventListener('click', createRecipe);

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

async function createRecipe() {
    const selectedIngredientsIds = checkBoxes();
    console.log(selectedIngredientsIds);
    try {
        const response = await fetch('ingredients/selectIngredients', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'selectedFromJSFile': selectedIngredientsIds
            })
        });
        const data = await response.json();
        console.log(data);
    } catch(err) {
        alert("You tried to do something.");
        console.error(err);
    }
}

function checkBoxes() {
    const checkedBoxes = document.querySelectorAll('input[name=checkbox]:checked');
    const selectedIds = [];
    checkedBoxes.forEach(box => {
        const ingrId = box.parentElement.parentElement.dataset.id;
        selectedIds.push(ingrId);
    })
    return selectedIds;
}


// async function testResponse() {
//     try {
//         alert("You tried to do something.");
//     } catch(err) {
//         console.error(err);
//     }
// }
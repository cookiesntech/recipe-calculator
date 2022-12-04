const toBeDeleted = document.querySelectorAll(".delete-ingredient");
//const createRecipe = document.querySelector("#create-recipe");

Array.from(toBeDeleted).forEach((el) => {
    el.addEventListener('click', deleteIngredient);
})

// async function testResponse() {
//     try {
//         alert("You tried to do something.")
//     } catch(err) {
//         console.error(err);
//     }
// }

async function deleteIngredient() {
    const ingrId = this.parentNode.parentNode.dataset.id;
    console.log(`Checking for ${ingrId}`);
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
        alert("You tried to do something.")
        console.error(err);
    }
}

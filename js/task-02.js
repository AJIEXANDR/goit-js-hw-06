const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const listOfIngredientsEl = document.querySelector('#ingredients');

const makeListOfIngredients = ingredients.map(ingredient => {
    const menuItem = document.createElement('li');
    menuItem.textContent = ingredient;
    menuItem.classList.add('item');
    return menuItem;
});

listOfIngredientsEl.append(...makeListOfIngredients);

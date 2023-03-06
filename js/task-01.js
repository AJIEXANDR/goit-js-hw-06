const listItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItemEl.length}`);

const countMenuElements = items =>
    items.forEach(item => {
        console.log(`Category: ${item.firstElementChild.textContent}`);
        console.log(`Elements: ${item.lastElementChild.children.length}`);
        console.log('');
    });

countMenuElements(listItemEl);

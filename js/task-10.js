const refs = {
    inputEl: document.querySelector('input'),
    createBtn: document.querySelector('[data-create]'),
    destroyBtn: document.querySelector('[data-destroy]'),
    boxesEl: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    refs.boxesEl.innerHTML = '';
}

function onCreateBtnClick() {
    const arrayOfBoxesElements = createBoxes(refs.inputEl.value);
    refs.boxesEl.innerHTML = '';
    refs.boxesEl.append(...arrayOfBoxesElements);
}

function createBoxes(elements) {
    const arrayOfBoxes = [];
    for (let i = 0; i < elements; i += 1) {
        const newBox = document.createElement('div');
        newBox.style.width = `${30 + 10 * i}px`;
        newBox.style.height = `${30 + 10 * i}px`;
        newBox.style.backgroundColor = `${getRandomHexColor()}`;
        newBox.style.display = 'inline-block';
        arrayOfBoxes.push(newBox);
    }
    return arrayOfBoxes;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

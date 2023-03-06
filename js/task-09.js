const refs = {
    colorName: document.querySelector('.color'),
    changeBtn: document.querySelector('.change-color'),
};

// console.log(refs);
refs.changeBtn.addEventListener('click', onChangeBtnClick);

function onChangeBtnClick() {
    const colorHexId = getRandomHexColor();
    document.body.style.backgroundColor = colorHexId;
    refs.colorName.textContent = colorHexId;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

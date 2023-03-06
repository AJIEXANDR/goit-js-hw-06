const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value !== '') {
        refs.spanEl.textContent = event.currentTarget.value;
    } else {
        refs.spanEl.textContent = 'Anonymous';
    }
}

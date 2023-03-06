const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const dataLength = Number(event.currentTarget.dataset.length);
    const currentValueLength = event.currentTarget.value.length;

    if (currentValueLength === dataLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else if (currentValueLength === 0) {
        inputEl.classList.remove('invalid');
        inputEl.classList.remove('valid');
    } else {
        inputEl.classList.add('invalid');
    }
}

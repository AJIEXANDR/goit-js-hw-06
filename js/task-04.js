const refs = {
    decButtonEl: document.querySelector('button[data-action="decrement"]'),
    incButtonEl: document.querySelector('button[data-action="increment"]'),
    counterValueEl: document.querySelector('#value'),
};

let counterValue = 0;

refs.decButtonEl.addEventListener('click', onDecButtonClick);
refs.incButtonEl.addEventListener('click', onIncButtonClick);

refs.decButtonEl.addEventListener('mousedown', onDecButtonMouseDown);
refs.decButtonEl.addEventListener('mouseup', defaultColor);

refs.incButtonEl.addEventListener('mousedown', onIncButtonMouseDown);
refs.incButtonEl.addEventListener('mouseup', defaultColor);

function onDecButtonClick() {
    counterValue -= 1;
    return (refs.counterValueEl.textContent = counterValue);
}

function onIncButtonClick() {
    counterValue += 1;
    return (refs.counterValueEl.textContent = counterValue);
}

function onDecButtonMouseDown() {
    refs.decButtonEl.classList.add('counter-dec-btn');
}

function onIncButtonMouseDown() {
    refs.incButtonEl.classList.add('counter-inc-btn');
}

function defaultColor() {
    refs.decButtonEl.classList.remove('counter-dec-btn');
    refs.incButtonEl.classList.remove('counter-inc-btn');
}

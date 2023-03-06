const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert('Please fill all form fields!');
        return;
    }
    const formDataObj = {
        email: email.value,
        password: password.value,
    };
    console.log(formDataObj);
    event.currentTarget.reset();
}

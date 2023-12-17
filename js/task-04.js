const form = document.querySelector('.login-form');
const buttom = document.querySelector('button');

form.addEventListener('submit', evn => {
    evn.preventDefault();
    const info = {
        email: evn.target.email.value,
        password: evn.target.password.value,
    }
    console.log(info);
    if (evn.target.email.value === '' || evn.target.password.value === '') {
        alert('All form fields must be filled in');
    }
    form.reset()
})

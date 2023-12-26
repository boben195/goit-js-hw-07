const form = document.querySelector('.login-form');
const buttom = document.querySelector('button');

form.addEventListener('submit', evn => {
    evn.preventDefault();
    const info = {
        email: evn.target.email.value.trim(),
        password: evn.target.password.value.trim(),
    }
    
    if (evn.target.email.value === '' || evn.target.password.value === '') {
        return alert('All form fields must be filled in');
    }
    console.log(info);
    form.reset();
})

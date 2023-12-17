const insert = document.querySelector('#name-input');
const title = document.querySelector('text');
const outset = document.querySelector('#name-output');

insert.addEventListener('input', evt => {
    evt.preventDefault();
    const insertForm = evt.target.value.trim();
    if (insertForm === '') {
        console.log(title.textContent);
    } else {
        outset.textContent = `${insertForm}`;
        console.log(outset);
    }
})
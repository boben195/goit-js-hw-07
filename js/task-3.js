const insert = document.querySelector('#name-input');
const outset = document.querySelector('#name-output');

insert.addEventListener('input', evt => {
    outset.textContent = evt.currentTarget.value.trim() ? evt.currentTarget.value : 'Anonymous'; 
       
    });



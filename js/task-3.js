const insert = document.querySelector('#name-input');
const outset = document.querySelector('#name-output');

insert.addEventListener('input', evt => {
    if (outset.textContent = evt.currentTarget.value.trim()) {
         return evt.currentTarget.value;
    } else {
        return outset.textContent = 'Anonymous';
    };
       
});



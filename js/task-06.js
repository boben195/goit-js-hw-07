function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const form = document.querySelector('input');
const buttonCr = document.querySelector('[data-create]');
const buttonDes = document.querySelector('[data-destroy]');
const div = document.querySelector('#boxes');


function destroyBoxes() {
  div.textContent = '';
}


function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    let boxe = 30 + 10 * i;
    const divBox = document.createElement('div');
    divBox.style.cssText = `width: ${boxe}px; height: ${boxe}px; background-color: ${getRandomHexColor()}`
    div.insertAdjacentElement('beforeend', divBox)
  }
  form.value = ''
}


buttonCr.addEventListener('click', () => {
  if (1 <= form.value || form.value <= 100) {
    createBoxes(form.value)
  }
})


buttonDes.addEventListener('click', destroyBoxes)
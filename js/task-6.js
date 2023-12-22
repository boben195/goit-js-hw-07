function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const form = document.querySelector('input');
const buttonCr = document.querySelector('[data-create]');
const buttonDes = document.querySelector('[data-destroy]');
const div = document.querySelector('#boxes');

const magikNumberA = 30;
const magikNumberB = 10;

function destroyBoxes() {
  div.textContent = '';
}


function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    
    let boxe = magikNumberA + magikNumberB * i;
    const divBox = document.createElement('div');
    divBox.style.cssText = `width: ${boxe}px; height: ${boxe}px; background-color: ${getRandomHexColor()}`
    div.insertAdjacentElement('beforeend', divBox)
  }
  form.value = ''
}


buttonCr.addEventListener('click', () => {
  const toNumber = Number(form.value)
  if (1 <= form.value && form.value <= 100) {
    createBoxes(toNumber)
  }
})


buttonDes.addEventListener('click', destroyBoxes)
const item = document.querySelectorAll('.item')
console.log(`Number of categories ${item.length}`);

const getItem = item.forEach(el => {
    const elItem = el.firstElementChild.textContent;
    const elNumbers = el.lastElementChild.children.length;
    console.log(`Category ${elItem}`);
    console.log(`Elements ${elNumbers}`);
})
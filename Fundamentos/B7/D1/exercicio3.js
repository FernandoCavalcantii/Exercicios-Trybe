const btn = document.getElementById('btn');
const h1 = document.getElementById('count');
let counter = 0;
btn.addEventListener('click', () => {
    counter += 1;
    h1.innerText = counter;
});

console.log()
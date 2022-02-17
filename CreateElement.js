const h1 = document.querySelector('#heading');
console.dir(h1)



//1. document.createElement()

const h2 = document.createElement('h2');

h2.innerText = 'hello guys'

console.log(h2)


document.body.appendChild(h2)
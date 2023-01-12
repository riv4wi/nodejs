const fs = require('fs');

const first = fs.readFileSync('./data/first.txt', 'utf-8')
const second = fs.readFileSync('./data/second.txt')

console.log(first);
console.log(second.toString())

const title = 'Este es un tercer archivo!'
fs.writeFileSync('./data/third.txt', title)

const title2 = 'Este es un cuarto archivo pero agregando contenido!\n\r'
fs.writeFileSync('./data/fourth.txt', title2, {
    flag: 'a'
})
console.log('Hello world');

let username = 'Luis'

let age = 30

let hobbies = false

let points = [10, 20, 30]

let names = ['Luis', 'Albany', 'Yulibeth']

let user = {
    name: 'Albany',
    lastname: 'Rivas',
    age: 15
}

const PI = 3.1415

console.log(username)
console.log(age)
console.log(hobbies)
console.log(points)
console.log(user);
console.log(PI);

names.forEach(name => {
    console.log('Hola', name);
});


function showUserInfo(userName, userAge) {
    return `The user name is ${userName} and her age is ${age}`
}

/* Funciones flecha */
const showUserInfo2 = (userName, userAge) => { return `The user name is ${userName} and her age is ${age}` }

console.log(showUserInfo(user.name, user.age));
console.log(showUserInfo2('Laika', 3));

/* console.log('__dirname:', __dirname)
console.log('__filename:', __filename) */

// setInterval(() => { console.log('hello world'); }, 1000)

setTimeout(() => {
    console.log('hello world')
}, 5000)

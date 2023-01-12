function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}


// Forma vieja
module.exports = {
    add,
    substract,
    multiply,
    divide
}

/*
Para la forma nueva es6 tengo que en el package.json, agregar una propiedad "type": "module"
*/
/* export default {
    add,
    substract,
    multiply,
    divide
} */
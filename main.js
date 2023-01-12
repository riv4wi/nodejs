const user = require('./userModule/user')
const {description, price} = require('./productModule/product')
const math = require('./mathModule/index')
const os = require('os')

console.log(user)
console.log(`product: ${description}`)
console.log(`price: ${price}`)

console.log(`add: ${math.add(2,5)}`);
console.log(`substraction: ${math.substract(2,5)}`);
console.log(`multiply: ${math.multiply(2,5)}`);
console.log(`divide: ${math.divide(2,5)}`);

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
}); 
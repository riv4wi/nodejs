const { readFile } = require('fs')
const pathFile = './data/first.txt'

// 1. Proceso asincrono de leer un archivo
// readFile(pathFile, 'utf-8', (error, data) => {
//     if (error) {
//         console.log(error)
//     }

//     console.log(data)
// })


// 2. Se mete el proceso asincrono (1) entro de esta estructura
// const getText = function getText(pathFile) {
//     return new Promise(function (resolve, reject) {

//     })
// }


// 3. Se llama a la función creada getText asi:
// getText('./data/second.txt')
    // .then(result => console.log(result))
//     .catch(error => console.log(error))


// La sintaxis de promesas es mucho mas entendible y mantenible que la lógica de callbacks
// async y aawit son una mejor forma de escribir promesas (sintaxis mas simple y mas moderna)

// // Y esto es mucho mejor que la sintaxis de arriba
// async function read() {
//     try {
//         /* Para disparar un error
//         throw new Error('Esto es un error no esperado') */
//         const result = await getText('./data/first.txt')
//         const result2 = await getText('./data/second.txt')
//         console.log(result);
//         console.log(result2);
//     } catch (error) {
//         console.log(error);
//     }
// }

// read()

// Bien para no hacer todo lo anterior manualmente node tiene un módulo llamado promisify
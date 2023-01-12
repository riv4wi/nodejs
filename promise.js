const { readFile } = require('fs')

const getText = function getText(pathFile) {
    return new Promise(function (resolve, reject) {
        readFile(pathFile, 'utf-8', (error, data) => {
            if (error) {
                reject(error)
            }

            resolve(data)
        })
    })
}

// Vieja forma de hacer promesa
// getText('./data/second.txt')
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

// La sintaxis de promesas es mucho mas entendible y mantenible que la lógica de callbacks
// async y await son una mejor forma de escribir promesas (sintaxis mas simple y mas moderna)
// Y esto es mucho mejor que la sintaxis de arriba

async function read() {
    try {
        /* Para disparar un error */
        throw new Error('Esto es un error no esperado') 
        const result = await getText('./data/first.txt')
        const result2 = await getText('./data/second.txt')
        console.log(result);
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
}

read()
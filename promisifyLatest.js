const { readFile } = require('fs/promises')

async function read() {
    try {
        /* Para disparar un error
        throw new Error('Esto es un error no esperado') */
        const result = await read('./data/first.txt', 'utf-8')
        const result2 = await read('./data/second.txt', 'utf-8')
        console.log(result);
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
}

read()
const { writeFile } = require('fs/promises')

const createBigFile = async () => {
    await writeFile('./data/bigFile.txt', 'hello world'.repeat(100000))
}

createBigFile()

const { createReadStream } = require('fs')

const stream = createReadStream(
    './data/bigFile.txt',
    { encoding: 'utf-8' }
)

stream.on('data', (chunk) => {
    console.log(chunk);
})

stream.on('end', () => {
    console.log('Ya terminé de procesar el archivo');
})

stream.on('error', (error) => {
    console.log(error);
})
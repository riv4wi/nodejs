const http = require('http')

const { createReadStream } = require('fs')
const { create } = require('domain')

const server = http.createServer((request, response) => {
    const fileStream = createReadStream(
        './data/bigFile.txt', 
        {encoding: 'utf-8'}
    )

    fileStream.on('data', (chunk)=> {
        fileStream.pipe(response)
    })

    fileStream.on('error', error => {
        console.log(error);
    })

    fileStream.on('end', () => {
        console.log('Ya terminé de enviar el archivo');
    })
})

server.listen(3000)
console.log(`Server on port ${3000}`);
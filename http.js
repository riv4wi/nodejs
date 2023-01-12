const colors = require('colors')

const http = require('http')

http.createServer(function (request, response) {
    console.log(request.url)

    if (request.url === '/'){
        response.write('Welcome to server')
        return response.end()
    }

    if (request.url === '/about'){
        response.write('Acerca de')
        return response.end()
    }

    response.write('Not found')
    response.end()
}).listen(3000)

console.log('Servidor escuchando en el puerto 3000...'.magenta);
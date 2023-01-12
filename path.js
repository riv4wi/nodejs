const path = require ('path')

// console.log(path);

const filePath = path.join('/public', 'dist', '/styles', 'main.css')

console.log('filePath:', filePath)
console.log('path.basename(filePath):', path.basename(filePath))
console.log('path.dirname(filePath):', path.dirname(filePath))
console.log('path.resolve(dist):', path.resolve('dist'))
console.log('path.parse(filePath):', path.parse(filePath))



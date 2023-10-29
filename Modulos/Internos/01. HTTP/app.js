// Importar el módulo interno (módulos que son nativos de NodeJS) HTTP
const http = require('http')

// Creación del servidor con createServer
// req (request) -> solicitud
// res (response) -> respuesta
const server = http.createServer((req, res) => {
    // El método .end define una respuesta final dada del servidor al cliente
    res.end('Hola, este es mi primer servidor :)')
})
// Se define el puerto de salida del servidor
const puerto = 3000;
//Se inicia un servidor local
server.listen(puerto, ()=>{
    console.log(`El servidor se esta ejecutando por: http://localhost:${puerto}`)
})
// Para cerrar un servidor local se hace uso de Ctrl + C en la terminal
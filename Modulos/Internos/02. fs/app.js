// Se importa el módulo interno fs (que viene de file system) permite gestionar archivos
const fs = require("fs");

fs.readFile("prueba.txt", "utf-8", (error, data) => {
  // Si existe un error se captura para que este se imprima en la consola
  if (error) {
    console.log(error);
  }
  console.log(data);
});
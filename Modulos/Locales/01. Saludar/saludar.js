//Se crea la función que se desea exportar
const saludo = function (nombre) {
  return `Buenas noches ${nombre}! Este es mi primer modulo con funciones`;
};

const despedir = function (nombre) {
  return `Adios ${nombre}. Gracias por usar la app`;
};

//Para exportar la función se utiliza el comando module.exports = {loQueSeDeseaExportar}
module.exports = {
  saludo: saludo,
  despedir: despedir,
};

// Siempre que esté creada se puede exportar las funciones tanto como se desee

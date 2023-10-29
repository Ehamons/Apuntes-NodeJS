//Importando
const clases = require("./personas");
const liliana = new clases.Persona(
  "Liliana",
  "Herrera",
  "Bucaramanga",
  32,
  {
    correo: "liliana@devmail.com",
    telefono: 3216549870,
  },
  ["Pintar", "Programar", "Dormir"]
);

const john = new clases.Persona(
  "John",
  "Doe",
  "Miami",
  "26",
  {
    correo: "jdoe@mymail.com",
    telefono: 3154268790,
  },
  ["Comer", "Jugar", "Dormir"]
);

console.log(liliana);
console.log(liliana.saludar());

console.log(john);
console.log(john.saludar());

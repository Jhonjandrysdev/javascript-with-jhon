console.log(Object({}));
console.log(Array([]));
console.log(String());
console.log(Number());

Object.prototype;
Array.prototype.at = function (len) {
  console.log("Tu longitud es: ", len);
};

[].at(10);

// Por que usar prototipos?

const pet = ["aaa"];

console.log(pet.at(10));

// Bind, call, apply

// this

function greet() {
  console.log(`Hola soy ${this.nombre}`);
}

// Bind
const persona = { nombre: "Juan" };

const saludar = greet.bind(persona);

const c = {
  nombre: "Juan",
  greet() {
    this.nombre;
  },
};

// Call
const cx = Object.prototype.hasOwnProperty.call(persona, 'nombre')


// Apply
const cxa = Object.prototype.hasOwnProperty.apply(persona, ['nombre'])
console.log({cxa, cx});

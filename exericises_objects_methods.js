// 1. Crea un objeto persona y crea dos metodos que sea saludas y cumplir años

const person = {
  nombre: "Guadalupe",
  edad: 10,
  ciudad: "Valledupar",
};

let { nombre, edad, ciudad } = person;

function saludar() {
  console.log(`Hola ${nombre}`);
}

saludar();

let anio = 2024;
function cumplirAnios(aum) {
  if (anio + aum) {
    console.log(`${nombre} tiene ${edad + aum} años, en el año ${anio + aum}`);
  } else {
    console.log("No se han alterado los valores");
  }
}
cumplirAnios(1);

const carro = {
  marca: "Chevrolet",
  modelo: "Colorado",
  año: 2024,
  color: "Negro",
};

const fruits = ["Manzana", "Fresa", "Pera"];
const myList = document.createElement("ul");
document.body.appendChild(myList);
console.log(myList);

fruits.forEach((fruit) => {
  const listFruit = document.createElement("li");
  listFruit.textContent = fruit;
  myList.appendChild(listFruit);
});

const container = document.createElement("div");
document.body.appendChild(container);
console.log(container);

fruits.forEach((fruit) => {
  const p = document.createElement("p");
  p.className = fruit;
  container.appendChild(p);
  p.textContent = "Hola";
});

// 1. Tienes una lista de nombres: [‘Juan’, ‘Carlos’, ‘Joji’, ‘Maria’, ’Sofia’, ‘Angela’, ‘Ruben’] muestra todos los nombres en mayúsculas en una Lista desordenada

const names = ["Juan", "Carlos", "Joji", "Maria", "Sofia", "Angela", "Ruben"];

const ulList = document.createElement("ul");

names.forEach((name) => {
  const elementList = document.createElement("li");
  elementList.textContent = name.toLocaleUpperCase();
  ulList.appendChild(elementList);
  document.body.appendChild(ulList);
});

// 2. Filtrar solo los usuaurios menores a 30 y mostrar en una lista desordenada
const personas = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 35 },
  { nombre: "Sofía", edad: 28 },
];

function filtrar(persons) {
  const value = persons.filter((person) => person.edad < 30);

  value.forEach((name) => {
    const list = document.createElement("ul");
    const el = document.createElement("li");
    list.appendChild(el);
    document.body.appendChild(list);
    el.textContent = name.nombre;
  });
}
filtrar(personas);

// 3.  Usándo el mismo array anterior en otra Lista desordenada mostrar en color azul a la persona que se llama Juan importante: (es el único elemento que debe tener una clase)


const otherNames = ["Juan", "Carlos", "Joji", "Maria", "Sofia", "Angela", "Ruben"];

otherNames.forEach(nombre => {
    const secondList = document.createElement('ul')
    const itemList = document.createElement('li')
    secondList.appendChild(itemList)
    itemList.textContent = nombre
    document.body.appendChild(secondList)

    if (nombre === "Juan") {
        itemList.className = "nombre"
    }
});



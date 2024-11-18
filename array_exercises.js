//Filtrar un array de números: Crea un array de números aleatorios y filtra aquellos que sean mayores a 5.

const numbers = [2,43,423,12121,1242,4234,4232423,4232554,5,23231,12]

function filterNumbers(numbers){
  return numbers.filter((num) => num > 5)
}

console.log(filterNumbers(numbers))

//Mapear un array: Crea un array de nombres y mapéalos a un nuevo array donde cada elemento sea el nombre en mayúsculas.

const nombres = ["juan", "pedro", "ismael", "lucas", "gabriela"]

function UppercaseName(names){
  const namesUpperCase = names.map((name) => {
      return name.toUpperCase()
  }
  )
  return namesUpperCase
}

console.log(UppercaseName(nombres))

//Reducir un array: Calcula la suma total de los elementos de un array de números.

function sumNumbers(num){
    const totalValue =  num.reduce((acc, currentValue) => {

        return acc += currentValue
    }, 0)

    return totalValue
}

console.log(sumNumbers(numbers))


// TIENES UN ARRAY CON DISTINTOS TIPOS DE ELEMENTOS QUE VA A TENER UN ARRAY Y SE DEBE CREAR UN ARRAY QUE SOLO TENGA SOLO DATOS DE STRINGS

const elements = ["Hola", 1, "Mundo", 3];

function getString(arr){
    return arr.filter((word) => typeof word === "string" );
}

console.log(getString(elements))


//SUMAR UN ARRAY SIN UTILIZAR NINGUN TIPO DE FUNCION DE ARRAY

const sum = [1,323,432,5454]
function sumar(arr){
    return arr.reduce((acc, currentVal) => {
        return acc + currentVal
    }, 0)

}
console.log(sumar(sum))

//EXISTE UN ARRAY DE STRING Y SE DEBE CONTAR LA LONGITUD DE CADA PALABRA SIN UTILIZAR METODO DE ARRAY Y DEBE RETORNAR EL VALOR DE LA LONGITUD DE CADA PALABRA

const words = ["fundamentos", "de", "javascript"]

function wordsLength(words){
  const arrayLength = []

  for(let index = 0; index < words.length; index++){
        const myIndex = words[index].length
        arrayLength.push(myIndex)
    }
    return arrayLength
}

console.log(wordsLength(words))
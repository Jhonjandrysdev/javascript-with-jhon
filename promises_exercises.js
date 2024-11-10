/*CREAR UNA FUNCION QUE RETORNE UNA PROMESA Y RECIBA UN PARAMETRO QUE INDIQUE SI LA PETICIÓN FUE EXITOSA O NO (UTILIZAR TRUE O FALSE) Y LO DEVUELVA EN DOS SEGUNDOS*/

//PARA CREAR PROMESAS
function getPromises(param){
    const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(param){
            return resolve("PETICION/PROMESA RESUELTA")
        }
        reject("PETICION/PROMESA NO RESUELTA")
    }, 2000)   
})
  return myPromise
}

//PARA OBTENER Y MOSTRAR EL RESULTADO
async function resultPromise(){
    try {
        const myValue = await getPromises(true);
        console.log(myValue)
    } catch (error) {
        console.log(error)
    }
}

resultPromise()

//AGREGAR PRODUCTO A UN CARRITO SI ESTE TIENE UN VALOR - CREAR PROMESA SI EL MONTO ES MAYOR A 0 DEVUELVE LA PROMESA INDICANDO QUE LA PROMESA ESTA DISPONIBLE
const producto = {name: 'Product 1', amount: 1, price: 1000}

function getProduct(product){
    const promiseProduct = new Promise((resolve, reject) => {
        if(product.amount > 0){
            return resolve("PRODUCTO DISPONIBLE EN TIENDA")
        }
        reject("PRODUCTO NO DISPONIBLE EN TIENDA")
    })

    return promiseProduct
}

function resultPromiseProduct(){
    const myresult =  getProduct(producto)
    myresult.then((valor) => {
        console.log(valor)
    }).catch((err) => {
        console.error(err)
    })
}

resultPromiseProduct()

/*CREAR PROMESAS UNA QUE SE EJECUTE EN 1000 MILISEGUNDOS Y OTRA EN 1500 MILISEGUNDOS
EN EL PRIMER THEN SE MANEJARA LA SEGUNDA PROMESA Y EN BASE A ESE RESULTADO SE VA A MOSTRAR ESE RESULTADO Y SE RETORNARA LA SEGUNDA PROMESA EN OTRO THEN. */


function myThirdPromise(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("PROMESA RESUELTA")
        })
    }, 1000)
    return promise
}

const myValuePromise = myThirdPromise()
function getResultThirdPromise(){
    const secondPromise =  new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("PRIMERA PROMESA RESUELTA")
        }, 1500)
    })
    return secondPromise
}

myValuePromise.then((valor) =>{
    console.log(valor)
    const secondPromise = getResultThirdPromise()
    return secondPromise;
}).then((newValue) => {
    console.log(newValue)
}).catch((err) => {
    console.error(err)
})





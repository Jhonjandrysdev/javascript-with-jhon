let button = document.querySelector('.myButton')

let image = document.createElement('img')

button.addEventListener('click', () => {
    image.setAttribute('src', 'https://s1.significados.com/foto/paisaje-og.jpg')
    document.body.appendChild(image);
})

let buttonDelete = document.querySelector('.deleteButton')

buttonDelete.addEventListener('click', () => {
    document.body.removeChild(image)
})

let buttonSum = document.querySelector('.sumar');
let buttonRes = document.querySelector('.restar')
let buttonReset = document.querySelector('.reset')
let buttonMulti = document.querySelector('.multix2')
let numText = 0;
let value = document.querySelector('.value');

buttonSum.addEventListener('click', () => {

    numText++ 

    value.textContent = numText
    
})

buttonRes.addEventListener('click', () => {
    numText--
    value.textContent = numText
})

buttonReset.addEventListener('click', () => {
    numText = 0;
    value.textContent = numText
})

buttonMulti.addEventListener('click', () => {
    numText*=2;

    value.textContent = numText;
})

//CREAR UN INPUT Y EL NUMERO QUE SE ESCRIBA DEL 1 A 10, QUE ESCRIBA TABLA DE MULTIPLICAR CON ESE NUMERO EN UNA UL.

let button2 = document.querySelector('.tabla')

button2.addEventListener('click', () => {
    let numberDate = document.querySelector('.number').value
    console.log(numberDate)
   
    parseInt(numberDate);
    
    
    for (let index = 1; index <= numberDate; index++) {
        console.log(`${numberDate} x ${index} = ${numberDate * index}`)

        let list = document.createElement('ul')
        let eList = document.createElement('li')

        //list.appendChild(eList)
        list.textContent = `${numberDate} x ${index} = ${numberDate * index}`
        document.body.appendChild(list)
    }
})







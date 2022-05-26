'use strict'

// document.dispatchEvent(new CustomEvent('loading'), { message: "Loading..."})

const button = document.getElementById('button')
const div = document.getElementById('root')
const div2 = document.getElementById('root2')
const form = document.getElementById('form')
const divForm = document.getElementById('form-div')
const pForm = document.getElementById('form-p')

button.addEventListener('click', () => {
    console.log('Click');
})

div.onclick = (event) => {
    console.log(event)
    alert('Presionaste el div')
}

div2.onclick = (event) => {
    // event.stopImmediatePropagation() //Detiene el bubbling
    console.log(event)
    alert('Presionaste el div2')
    event.stopPropagation()
    // setTimeout(() => {
    //     event.target.dispatchEvent(event) //Ejecuta la prog+pagacion cada intervalo de tiempo
    // }, 5000)

    // return 
}

form.addEventListener('click', (event) => {
    alert(`Capturing... ${event.tagName}`)
}, true) // El tercer parametro es el capture, si es true el handler se define en la fase de capturing

// document.addEventListener('loading')
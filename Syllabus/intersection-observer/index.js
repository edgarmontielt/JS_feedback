'use strict'

let documentHeight = document.documentElement.offsetHeight // -> tamaño que se tiene del contenido
let viewportHeight = window.innerHeight // -> el espacio de la pantalla
const btn = document.getElementById('scroll')

// setTimeout(() => {
//     scrollTo(0, documentHeight - viewportHeight)
// }, 100)

let cardsNumber = documentHeight / viewportHeight
let card = 1

const interval = setInterval(() => {
    scrollBy({
        left: 0,
        top: viewportHeight,
        behavior: "smooth",
    })

    if (card === parseInt(cardsNumber.toString())) clearInterval(interval)
    card ++
}, 3000)

btn.onclick = () => {
    scrollTo({
        left: 0,
        top: 1,
        behavior: 'smooth',
    })
}
'use strict'

let documentHeight = document.documentElement.offsetHeight // -> tamaño que se tiene del contenido
let viewportHeight = window.innerHeight // -> el espacio de la pantalla
const btn = document.getElementById('scroll')
const card3 = document.getElementById('card-3')

// setTimeout(() => {
//     scrollTo(0, documentHeight - viewportHeight)
// }, 100)

let cardsNumber = documentHeight / viewportHeight
let card = 1

// if (window.IntersectionObserver) { 
//     alert('Available')
// }

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

const onIntersection = (changes) => {
    console.log(changes);
    changes.forEach(change => {
        if (change.isIntersecting) {
            btn.style.display = 'block'
        } else {
            btn.style.display = 'none'
        }
    });
}

const observer = new IntersectionObserver(onIntersection, {
    // root, // -> elemento usado como viewport(área de scroll) para la visibilidad del target
    // rootMargin, // -> si no se agraga todos los margenes serían 0
    threshold : [1, 1], // que porcentaje de visibilidad del target, cuando se sobrepase el tamaño se ejecuta
    // trackVisibility, 
    // delay
})

observer.observe(card3)
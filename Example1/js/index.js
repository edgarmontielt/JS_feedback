'use strict'

const welcome = document.getElementById('welcome')
// const text = document.getElementsByClassName('text') // Devuelve un HTMLCollection
const texts = document.querySelectorAll('.text')

welcome.onclick = () => {
     alert('Ya diste click')
}

/* Cuando se tiene HTMLCollection no funciona */
texts.forEach(element => {
     element.onclick = () => {
          alert('Hola')
     }
})


/*
 * * No se puede usar forEach, filter, map cuando se aplica getElementsByClassName
 */

// for (let i = 0; i < texts.length; i++) {
//      const element = texts[i]
//      if (i === 2) {
//           element.className = 'otherClass'
//      }
//      element.onclick = () => {
//           alert('Hola')
//      }
// }

// console.log(texts);

// Obteniendo elementos con querySelector: 

const sentences = document.querySelectorAll('p') // => Obtecion de parrafos por el elemento 'p'
const sentencesText = document.querySelectorAll('p.text') 
console.log(sentencesText);


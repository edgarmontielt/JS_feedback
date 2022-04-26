'use strict'

const dropzones = [1, 2, 3, 4, 5]
const elements = [1, 2, 3, 4, 5]
const container = document.getElementById('app')

const dragEnter = (element) => {
     element.ondragenter = () => {
          element.style.border = '3px solid yellowgreen'
          console.log('Hola');
     }
}

const dragLeave = (element) => {
     element.ondragleave = () => {
          element.style.border = ''
     }
}

const dragOver = (element) => {
     element.ondragover = (event) => {
          event.preventDefault()
     }
}

const onDrop = (dropzone, element) => {
     dropzone.ondrop = (event) => {
          event.preventDefault();
          dropzone.appendChild(element)
          dropzone.style.border = ''
     }
}

dropzones.forEach(dropzone => {
     const div = document.createElement('div')
     div.className = 'dropzone'
     container.appendChild(div)
     dragEnter(div)
     dragLeave(div)
     dragOver(div)
     const p = document.querySelector('.element')
     console.log(p);
})

elements.forEach(element => {
     const firstDiv = container.firstChild
     const p = document.createElement('p')
     p.innerText = element
     p.className = 'element'
     firstDiv.appendChild(p)
     p.draggable = true

     p.ondrag = () => {
          p.style.opacity = '0'
     }

     p.ondragend = () => {
          p.style.opacity = '1'
     }
})
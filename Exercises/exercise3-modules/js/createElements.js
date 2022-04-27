import { dragEnter, dragLeave, dragOver, onDrop } from "./dragAndDrop.js"

const createDropzones = (dropzones, container) => {
     dropzones.forEach(() => {
          const div = document.createElement('div')
          div.className = 'dropzone'
          container.appendChild(div)
          dragEnter(div)
          dragLeave(div)
          dragOver(div)
          onDrop(div)
     })
}

const createElements = (elements, container) => {
     elements.forEach(element => {
          const firstDiv = container.firstChild
          const p = document.createElement('p')
          p.innerText = element
          p.className = 'element'
          p.id = `item${element}`
          firstDiv.appendChild(p)
          p.draggable = true

          p.ondrag = () => {
               p.style.opacity = '0'
          }
          p.ondragstart = (event) => {
               event.dataTransfer.setData('item', event.target.id)
          }
          p.ondragend = () => {
               p.style.opacity = '1'
          }
     })
}

export { createDropzones, createElements }
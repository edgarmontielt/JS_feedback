'use strict'

const dropzones = [1, 2, 3, 4, 5]
const elements = [1, 2, 3, 4, 5]
const container = document.getElementById('app')

const dragEnter = (element) => {
     element.ondragenter = () => {
          element.style.border = '4px solid #16aa4a'
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

const onDrop = (dropzone) => {
     dropzone.ondrop = (event) => {
          event.preventDefault()
          const item = event.dataTransfer.getData('item')
          console.log(document.getElementById(item));
          dropzone.appendChild(document.getElementById(item))
          dropzone.style.border = ''
     }
}

dropzones.forEach(() => {
     const div = document.createElement('div')
     div.className = 'dropzone'
     container.appendChild(div)
     dragEnter(div)
     dragLeave(div)
     dragOver(div)
     onDrop(div)
})

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
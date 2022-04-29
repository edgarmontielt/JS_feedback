'use strict'

let parent;
let dragSrcElement;

const addEventsToDropzone = (element) => {
     element.ondragenter = (event) => {
          element.style.border = '4px solid #16aa4a'
     }
     element.ondragleave = () => {
          element.style = null
     }
     element.ondragover = (event) => {
          event.preventDefault()
     }
     element.ondrop = (event) => {
          event.preventDefault()
          const item = event.dataTransfer.getData('item')
          if (event.target.id !== parent.id) {
               element.appendChild(document.getElementById(item))
          }
          element.style.border = ''
     }
}

const addEventsToElement = (element) => {
     element.draggable = true

     element.ondragstart = (event) => {
          event.dataTransfer.setData('item', event.target.id)
          parent = element.parentNode
          dragSrcElement = element
     }
     element.ondrag = () => {
          element.style.opacity = '0'
     }
     element.ondragover = (event) => {
          event.preventDefault()
     }
     element.ondragend = () => {
          element.style.opacity = '1'
          element.style.position = ''
     }

     element.ondrop = (e) => {
          e.stopPropagation(); 
          console.log(element, dragSrcElement);
          const temp = element.innerHTML
          element.innerHTML = dragSrcElement.innerHTML
          dragSrcElement.innerHTML = temp
     }
}

export { addEventsToDropzone, addEventsToElement }
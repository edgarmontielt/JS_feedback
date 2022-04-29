'use strict'

let parent;

const addEventsToDropzone = (element) => {
     element.ondragenter = (event) => {
          element.style.border = '4px solid #16aa4a'
          // console.log(event);
          // console.log(element.id);
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
          if (event.target.id !== parent) {
               element.appendChild(document.getElementById(item))
          }
          element.style.border = ''
     }
}

const addEventsToElement = (element) => {
     element.draggable = true

     element.ondragstart = (event) => {
          event.dataTransfer.setData('item', event.target.id)
          parent = element.parentNode.id
     }
     element.ondrag = () => {
          element.style.opacity = '0'
     }
     element.ondragend = () => {
          element.style.opacity = '1'
     }
}

export { addEventsToDropzone, addEventsToElement }
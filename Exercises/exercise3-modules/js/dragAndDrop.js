const addEventsToDropzone = (element) => {
     element.ondragenter = () => {
          element.style.border = '4px solid #16aa4a'
     }
     element.ondragleave = () => {
          element.style.border = ''
     }
     element.ondragover = (event) => {
          event.preventDefault()
     }
     element.ondrop = (event) => {
          event.preventDefault()
          const item = event.dataTransfer.getData('item')
          element.appendChild(document.getElementById(item))
          element.style.border = ''
     }
}


const addEventsToElement = (element) => {
     element.draggable = true

     element.ondragstart = (event) => {
          event.dataTransfer.setData('item', event.target.id)
     }
     element.ondrag = () => {
          element.style.opacity = '0'
     }
     element.ondragend = () => {
          element.style.opacity = '1'
     }
}

export { addEventsToDropzone, addEventsToElement }
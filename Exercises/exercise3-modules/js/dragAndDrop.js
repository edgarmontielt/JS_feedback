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
          dropzone.appendChild(document.getElementById(item))
          dropzone.style.border = ''
     }
}

export {dragEnter, dragLeave, dragOver, onDrop}
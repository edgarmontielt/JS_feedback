'use strict'

const dropzone1 = document.getElementById('dropzone')
const dropzone2 = document.getElementById('dropzone2')
const text = document.getElementById('text')


text.ontouchmove = (event) => {
     const touchLocation = event.targetTouches[0]
     text.style.position = 'absolute'
     text.style.left = touchLocation.pageX + 'px'
     text.style.top = touchLocation.pageY + 'px'
}

const onDragEnter = (element) => {
     element.ondragenter = () => {
          element.style.border = '3px solid yellowgreen'
     }
}

const onDragLeave = (element) => {
     element.ondragleave = () => {
          element.style.border = ''
     }
}

const dragOver = (element) => {
     element.ondragover = (event) => {
          event.preventDefault()
     }
}

const onDrop = (element) => {
     element.ondrop = (event) => {
          event.preventDefault();
          element.appendChild(text)
          element.style.border = ''
     }
}

onDragEnter(dropzone1)
onDragLeave(dropzone1)
onDragEnter(dropzone2)
onDragLeave(dropzone2)
dragOver(dropzone1)
dragOver(dropzone2)
onDrop(dropzone1)
onDrop(dropzone2)

text.ondrag = () => {
     text.style.opacity = '0'
}

text.ondragend = () => {
     text.style.opacity = '1'
}
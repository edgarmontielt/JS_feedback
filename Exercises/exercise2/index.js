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

dropzone1.ondragenter = () => {
     dropzone1.style.border = '3px solid yellowgreen'
}

dropzone1.ondragleave = () => {
     dropzone1.style.border = ''
}

dropzone2.ondragenter = () => {
     dropzone2.style.border = '3px solid yellowgreen'
}

dropzone2.ondragleave = () => {
     dropzone2.style.border = ""
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
          element.style.border = ""
     }
}

dragOver(dropzone1)
dragOver(dropzone2)

onDrop(dropzone1)
onDrop(dropzone2)


// dropzone1.ondragover = (event) => {
//      event.preventDefault()
// }

// dropzone2.ondragover = (event) => {
//      event.preventDefault()
// }

// dropzone1.ondrop = (event) => {
//      event.preventDefault();
//      dropzone1.appendChild(text)
// }

// dropzone2.ondrop = (event) => {
//      event.preventDefault()
//      dropzone2.appendChild(text)
// }


text.ondrag = () => {
     text.style.opacity = "0"
}

text.ondragend = () => {
     text.style.opacity = "1"
}
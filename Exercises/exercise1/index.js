'use strict'

const root = document.getElementById('root')

for (let index = 0; index < 25; index++) {
     const button = document.createElement('div')
     button.className = "button hover"
     root.appendChild(button)

     button.onclick = () => {
          button.classList.toggle('active')
          button.classList.toggle("hover")

          // if (button.classList.contains('active')) {
          //      button.classList.remove('hover')
          // } else {
          //      button.classList.add('hover')
          // }
     }
}

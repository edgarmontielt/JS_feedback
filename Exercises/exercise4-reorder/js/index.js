'use strict'

const list = document.getElementById('list')
const items = list.querySelectorAll('li')
const itemsArray = [...items]

let dragging
let draggedOver

items.forEach((element, index) => {
     element.draggable = true
     element.id = 'item' + index

     element.ondrag = () => {
          dragging = element
     }
     element.ondragover = (event) => {
          event.preventDefault()
          draggedOver = event.target
     }
     element.ondrop = () => {
          const index1 = itemsArray.findIndex(element => element==dragging)
          const index2 = itemsArray.findIndex(element => element==draggedOver)

          itemsArray[index1] = itemsArray[index2]
          itemsArray[index2] = dragging

          console.log(index1, index2);

          for (let item of itemsArray) {
               list.appendChild(item)
          }
     }
})


const reorderAtoZ = () => {
     const sortedArray = itemsArray.sort((itemA, itemB) => {
          const [contentA, contentB] = [itemA.innerText, itemB.innerText]
          return contentA < contentB ? -1 : 1
     })
     sortedArray.forEach((element) => {
          list.appendChild(element)
     })
}


const reorderZtoA = () => {
     const sortedArray = itemsArray.sort((itemA, itemB) => {
          const [contentA, contentB] = [itemA.innerText, itemB.innerText]
          return contentA < contentB ? 1 : -1
     })
     sortedArray.forEach((element) => {
          list.appendChild(element)
     })
}

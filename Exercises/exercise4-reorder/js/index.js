'use strict'

const list = document.getElementById('list')
const items = list.querySelectorAll('li')
const itemsArray = [...items]

let dragging
let draggingIndex
let draggedOver
let draggedOverIndex

items.forEach((element, index) => {
     element.draggable = true
     element.id = 'item'+index

     element.ondrag = () => {
          dragging = element
     }
     element.ondragover = (event) => {    
          event.preventDefault()
          draggedOver = event.target
          draggedOverIndex = index
     }
     element.ondrop = () => {
          
          
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

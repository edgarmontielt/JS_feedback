'use strict'

import { addEventsToDropzone, addEventsToElement } from "./dragAndDrop.js"

const createDropzones = (dropzones, container) => {
     dropzones.forEach((dropzone) => {
          const div = document.createElement('div')
          div.className = 'dropzone'
          div.id = `zone${dropzone}`
          container.appendChild(div)
          addEventsToDropzone(div)
     })
}

const createElements = (elements, container) => {
     elements.forEach(element => {
          const firstDiv = container.firstChild
          const p = document.createElement('p')
          p.innerText = element
          p.className = 'element'
          p.id = `item${element}`
          firstDiv.appendChild(p)
          addEventsToElement(p)
     })
}

export { createDropzones, createElements }
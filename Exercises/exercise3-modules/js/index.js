'use strict'

import { createDropzones, createElements } from "./createElements.js"

const dropzones = [1, 2, 3, 4, 5]
const elements = [1, 2, 3, 4, 5]
const container = document.getElementById('app')

createDropzones(dropzones, container)
createElements(elements, container)
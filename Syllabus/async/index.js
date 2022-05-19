'use strict'

const root = document.getElementById('root')

let characters = []

fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

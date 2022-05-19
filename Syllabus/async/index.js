'use strict'

const root = document.getElementById('root')

let characters = []

function renderCharacters(data) {
    data.forEach(item => {
        const div = document.createElement('article')
        const p = document.createElement('p')
        const img = document.createElement('img')
        p.innerText = item.name
        img.src = item.image
        div.appendChild(p)
        div.appendChild(img)
        root.appendChild(div)
    });
}

fetch('https://rickandmortyapi.com/api/character') //Fetch no lanza excepciones para getionarlas con catch()
    .then(res => res.json())
    .then(data => {
        renderCharacters(data.results)
    })
    .catch(error => console.log(error))

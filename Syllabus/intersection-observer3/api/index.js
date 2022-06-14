'use strict'


let url = 'https://rickandmortyapi.com/api/character'

let characters = []
const root = document.getElementById('root')

const articles = document.getElementsByTagName('article')

function observerCallback(entries) {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
            setTimeout(() => {
                fetchData()
            }, 2000)
        }
    })
}

const lastElementOserver = new IntersectionObserver(observerCallback, {
    threshold: [1]
})

function createElements(character) {
    const article = document.createElement('article')
    const p = document.createElement('p')
    const img = document.createElement('img')

    p.innerText = character.name
    img.src = character.image

    article.appendChild(p)
    article.appendChild(img)

    return article
}

function render() {
    characters.forEach(character => {
        const element = createElements(character)
        root.appendChild(element)
    })
}

export async function fetchData() {
    try {
        const res = await fetch(url)
        const data = await res.json()
        url = data.info.next
        characters = [...characters, ...data.results]
        render()
        const lastArticle = articles[articles.length - 1]
        lastElementOserver.observe(lastArticle)
    } catch (error) {
        console.log(error);
    }
}

'use strict'

document.dispatchEvent(new CustomEvent('loading'), { message: "Loading..."})

const button = document.getElementById('button')

button.addEventListener('click', () => {
    console.log('Click');
})

document.addEventListener('loading')
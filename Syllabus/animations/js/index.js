const notification = document.querySelector('#subscribe')
const btn = document.querySelector('#subscribe button')

btn.addEventListener('click', () => {
    notification.classList.toggle('transparent')
})

btn.addEventListener('animationstart', () => {
    console.log('Animation Started');
})

btn.addEventListener('animationiteration', () => {
    console.log('Animation iteration');
})

btn.addEventListener('animationend', () => {
    console.log('Animation Ended');
})


notification.addEventListener('transitionend', () => {
    notification.style.display = 'none'
})
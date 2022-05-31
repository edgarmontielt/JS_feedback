const notification = document.querySelector('#subscribe')
const btn = document.querySelector('#subscribe button')

btn.addEventListener('click', () => {
    notification.classList.toggle('transparent')
})

notification.addEventListener('transitionend', () => {
    notification.style.display = 'none'
})
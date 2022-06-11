const lazyLoadingCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src
            lazyLoadingObserver.unobserve(entry.target)
        }
    })
}

const showImageCallback = (entries) => {
    entries.forEach(entry => {
        if( entry.isIntersecting ) {
            entry.target.previousElementSibling.style.opacity = 0
        } else {
            entry.target.previousElementSibling.style.opacity = 0.9
        }
    })
}

let controlObserver = new IntersectionObserver(showImageCallback, {
    threshold: [.75]
})

let lazyLoadingObserver = new IntersectionObserver(lazyLoadingCallback, {
    rootMargin: '0px 0px -500px 0px'   // -> a partir de cierto margen que comience a ejecutar el evt       
})

const images = document.querySelectorAll('img') 

images.forEach(image => {
    lazyLoadingObserver.observe(image)
    controlObserver.observe(image)
    image.onclick = () => {
        image.style.opacity = .8
    }
})
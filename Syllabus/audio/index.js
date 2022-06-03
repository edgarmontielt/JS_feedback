'use strict'

const $ = item => document.querySelector(item)
const video = $('#video')

video.removeAttribute('controls')

// video.addEventListener('playing', () => {
//     alert('Playing')
// })

// video.addEventListener('pause', () => {
//     $('#play-video').innerHTML = "<i class='bx bx-play' style='color:#ffffff' ></i>"
// })

$('#play-video').onclick = () => {
    if (video.paused) {
        video.play()
        $('#play-video').innerHTML = "<i class='bx bx-pause' style='color:#ffffff'></i>"
    } else {
        video.pause()
        $('#play-video').innerHTML = "<i class='bx bx-play' style='color:#ffffff' ></i>"
    }
}

$('#control').onchange = (event) => {
    console.log(event.target.value);
}


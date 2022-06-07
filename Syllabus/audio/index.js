'use strict'

const $ = item => document.querySelector(item)
const video = $('#video')
let duration

video.removeAttribute('controls')

// video.addEventListener('playing', () => {
//     alert('Playing')
// })

// video.addEventListener('pause', () => {
//     $('#play-video').innerHTML = "<i class='bx bx-play' style='color:#ffffff' ></i>"
// })

video.addEventListener('loadeddata', (event) => {
    duration = event.target.duration
})

video.addEventListener('timeupdate', (event) => {
    const percent = (event.target.currentTime / event.target.duration) * 100
    $('#control').value = percent
})


$('#play-video').onclick = () => {
    if (video.paused) {
        video.play()
        $('#play-video').innerHTML = "<i class='bx bx-pause bx-md' style='color:#ffffff'></i>"
    } else {
        video.pause()
        $('#play-video').innerHTML = "<i class='bx bx-play bx-md' style='color:#ffffff' ></i>"
    }
}

// oninput se activa en cada step del range
$('#control').oninput = (event) => {
    video.currentTime = (duration / 100) * event.target.value
}

$('#fullscreen').onclick = () => {
    video.requestFullscreen()
}

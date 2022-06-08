'use strict'
const $ = item => document.querySelector(item)

export default function video() {
    const video = $('#video')
    const containerVideo = $('.container-video')
    let duration

    video.removeAttribute('controls')

    video.addEventListener('loadeddata', event => {
        duration = event.target.duration
    })

    video.addEventListener('timeupdate', event => {
        const percent = (event.target.currentTime / event.target.duration) * 100
        $('#control').value = percent
    })

    $('#play-video').onclick = () => {
        if (video.paused) {
            video.play()
            $('#play-video').innerHTML = "<i class='bx bx-pause bx-sm' style='color:#ffffff'></i>"
        } else {
            video.pause()
            $('#play-video').innerHTML = "<i class='bx bx-play bx-sm' style='color:#ffffff' ></i>"
        }
    }

    // oninput se activa en cada step del range
    $('#control').oninput = event => {
        video.currentTime = (duration / 100) * event.target.value
    }

    $('#control').onmouseover = () => {
        console.log(video.currentTime)
    }

    $('#advance-video').onclick = () => {
        video.currentTime += 10
    }

    $('#back-video').onclick = () => {
        video.currentTime -= 10
    }

    $('#fullscreen').onclick = () => {
        if (!document.fullscreenElement) {
            containerVideo.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
    }
}
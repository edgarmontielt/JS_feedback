'use strict'
const $ = item => document.querySelector(item)

export default function audio() {
    const audio = $('#audio')
    let duration

    audio.removeAttribute('controls')

    audio.addEventListener('loadeddata', event => {
        duration = event.target.duration
    })

    audio.addEventListener('timeupdate', (event) => {
        const percent = (event.target.currentTime / event.target.duration) * 100
        $('#control-audio').value = percent
    })

    $('#play-audio').onclick = () => {
        if (audio.paused) {
            audio.play()
            $('#play-audio').innerHTML = "<i class='bx bx-pause bx-sm' style='color:#fff'></i>"
        } else {
            audio.pause()
            $('#play-audio').innerHTML = "<i class='bx bx-play bx-sm' style='color:#fff' ></i>"
        }
    }

    $('#control-audio').oninput = event => {
        audio.currentTime = (duration / 100) * event.target.value
    }

    $('#back-audio').onclick = () => {
        audio.currentTime -= 10
    }

    $('#advance-audio').onclick = () => {
        audio.currentTime += 10
    }
}
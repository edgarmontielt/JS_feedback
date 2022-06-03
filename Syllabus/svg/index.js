'use strict';

const $ = (item) => document.querySelector(item);

function updateClock() {
    let now = new Date();

    let sec = now.getSeconds();
    let min = now.getMinutes() + sec / 60;
    let hour = (now.getHours() % 12) + min / 60;

    let secondhand = 6 * sec;
    let minuteAngle = 6 * min;
    let hourAngle = 30 * hour;

    $('.minutehand').setAttribute('transform', `rotate(${minuteAngle}, 50, 50)`);
    $('.hourhand').setAttribute('transform', `rotate(${hourAngle}, 50, 50)`);
    $('.secondhand').setAttribute('transform', `rotate(${secondhand}, 50, 50)`);

    // console.log(now.getMinutes().toString().length);

    $('#digital-clock').textContent = `${now.getHours()}:${now.getMinutes().toString().length === 1
            ? '0' + now.getMinutes()
            : now.getMinutes()
        }:${now.getSeconds()}`;

    setTimeout(updateClock, 1000);
}

updateClock();

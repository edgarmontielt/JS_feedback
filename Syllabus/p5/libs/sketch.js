'use strict'

const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    background(234, 194, 227)
    rectMode(CENTER)
}

function draw(){
    const x = canvasWidth/2
    const y = canvasHeight/2

    const rectangle = (w, h) => rect(x, y, w, h)
    // background(200)
    // ellipse(50, 50, 80, 80) // -> (left, top, width, height)

    // if (mouseIsPressed) {
    //     ellipse(mouseX, mouseY, 10, 10)
    //     fill(0)
    // } else {
    //     fill(255)
    // }
    fill(0)
    rectangle(100, 100)
    fill(256)
    rectangle(80, 80)
    fill(0)
    rectangle(60, 60)
    fill(256)
    rectangle(40, 40)
}
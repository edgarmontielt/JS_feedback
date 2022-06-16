function setup() {
    createCanvas(500, 120)
}

function draw(){
    // background(200)
    // ellipse(50, 50, 80, 80) // -> (left, top, width, height)

    if (mouseIsPressed) {
        fill(0)
    } else {
        fill(255)
    }
    ellipse(mouseX, mouseY, 10, 10)
}
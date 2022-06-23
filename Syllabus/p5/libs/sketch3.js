function setup() {
    createCanvas(500, 500)
}

let x = 50
let y = 50
const size = 50

function draw() {
    clear()
    fill(241, 243, 23)
    noStroke()
    ellipse(x, y, size, size)

}

function keyPressed() {
    switch (keyCode) {
        case LEFT_ARROW:
            console.log('LEFT')
            x-=10
            break;
        case RIGHT_ARROW:
            console.log('RIGHT');
            x+=10
            break;
        case UP_ARROW:
            console.log('UP');
            y-=10
            break;
        case DOWN_ARROW:
            console.log('DOWN');
            y+=10
            break;
    }
}
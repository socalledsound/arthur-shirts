const imgSize = 250

let shirt1front, shirt1back
let theta = 0

function preload(){
  shirt1front = loadImage('shirt1-front.png');
  shirt1back = loadImage('shirt1-back.png');
}

function setup() {

  createCanvas(1000, 1000, WEBGL);  
}

function draw(){
  background(120)
  // rotateX(PI)
  rotateY(theta)
  drawBackgroundBox(imgSize, -250, -100)
  drawShirt(shirt1front, imgSize, -250, -100, 1)
  drawShirt(shirt1back, imgSize, -250, -100, -1)
  // replace the images below with new images
  drawBackgroundBox(imgSize, 250, -100)
  drawShirt(shirt1front, imgSize, 250, -100, 1)
  drawShirt(shirt1back, imgSize, 250, -100, -1)

  theta+=0.01
}

function drawBackgroundBox(size, xOff, yOff){
  push()
    translate(xOff,yOff,0)
    fill(130)
    box(size,size,1)
  pop()
}


function drawShirt(img, size, xOff, yOff, side){
  push()
    translate(-size/2 + xOff, -size/2 + yOff, side)
    texture(img)
    rect(0,0, size, size)
  pop()
}



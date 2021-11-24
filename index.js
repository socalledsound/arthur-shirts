const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const imgSize = 200
const numShirts = 5
const numRows = 5
const numCols = 5
let shirt1front, shirt1back
let thetaX = 0
let thetaY = 0
let mouseStart = {x: 0, y: 0}

function preload(){
  shirt1front = loadImage('shirt1-front.png');
  shirt1back = loadImage('shirt1-back.png');
}

function setup() {

  createCanvas(canvasWidth, canvasHeight, WEBGL);  
}

function draw(){
  background(120)
  // rotateX(PI)
 
  for(let i = 0; i< numCols; i++){
    for(let j = 0; j < numRows; j++){
      //drawBackgroundBox(imgSize, (i * imgSize) - canvasWidth/4, -100)

      drawShirt(shirt1front, imgSize, (i * imgSize) - canvasWidth/3, (j * imgSize) - canvasHeight/3, 2)
      drawShirt(shirt1back, imgSize,(i * imgSize) - canvasWidth/3,  (j * imgSize) - canvasHeight/3 , -2)
      //shirtCount++
    }

  }


  // // replace the images below with new images
  // drawBackgroundBox(imgSize, 250, -100)
  // drawShirt(shirt1front, imgSize, 250, -100, 1)
  // drawShirt(shirt1back, imgSize, 250, -100, -1)

  // theta+=0.01
}

function mousePressed(){
  mouseStart = {x: mouseX, y: mouseY}
}

function mouseDragged(){
    thetaY = map(Math.abs(mouseX - mouseStart.x), 0,  200, 0, TWO_PI)
    thetaX = map(Math.abs(mouseY - mouseStart.y), 0,  200, 0, TWO_PI)
    console.log(theta)
}

function drawBackgroundBox(size, xOff, yOff){
  push()
    translate(xOff,yOff,0)
    rotateY(thetaY)
    fill(130)
    box(size,size,1)
  pop()
}


function drawShirt(img, size, xOff, yOff, side){
  push()
    noStroke()
    translate(-size/2 + xOff, -size/2 + yOff, side)
    translate(size/2, size/2, -side)
    rotateY(thetaY)
    rotateX(thetaX)
    translate(-size/2, -size/2, side)
    
    texture(img)
    rect(0,0, size, size)
  pop()
}



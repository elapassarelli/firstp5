// so we are writing in p5.js idek what that means

function setup(){
    createCanvas(800,600);
    background(190);
    }

//variables in JS are created using the VAR keyword 
var position = 100
var speed = 4

// goal is to animate this tron bike leggoooooo
function draw(){
    clear()
    fill("pink")
    rect(position,100,150,60,20)
    fill(200,150,200)
    ellipse(position,150,75,75)
    fill("255")
    ellipse(position+150,150,75,75)
    fill(0)
    textSize(25)
    text("KWK", position+50,130)
    text(" byela", position-33, 155)
    text("<3", position-15+150, 158)
    position = position + speed
    
    
    if (position > 700) 
    { 
       speed*=-1
    }
    
    if (position < 100)
    {
        speed*=-1
    }
    fill(0)
    textSize(20)
    text("Position:" + position , 20, 20)
    text("Speed:" + speed, 20, 40)
    
}


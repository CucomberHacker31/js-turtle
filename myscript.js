// // function cloud(size)
// // {

// // }
var minX  = -getWidth()/2
var minY  =  -getHeight()/2
var maxY  =  getHeight()/2
var maxX  =  getWidth()/2


/*
    * BRICK BLOCK by Phil Bowman
    * The five functions below draw a square of bricks that can be tiled left to right
    * All of the five functions are necessary
    * The turtle starts at the bottom-left and ends in the same place
*/

function main()
{
    goto(minX,minY)
    colorBackground(getWidth())
    goto(-100,150)
    for (var i = 0; i < 4; i++)
    {
        wrap(false)
        circle(.75)
        left(90)
        half(0.75)
        right(90)
        forward(150)
        left(90)
       
    }
    bricksNumber = 100;    goto(minX,minY)    
    for(var i = 0; i < bricksNumber; i++)
    {
        /*
    *Below is my whole brick process.
    *I had to first make and define a rectangle. 
*Next I made the whole brick face and made sure the turtle ended up in the right spot every time to make another brick face.
* Coloring the brick was too complicated for me so I just colored the brick lines. 
*I also mixed up the 2 var. I meant to make height 10 and width 20 but it was too late when I realized this so I had to power throught backwards.
* Surprisingly my easiest part was creating the bricksNumber variable and making a prompt for that.  
        */
        colour(194,74,12,1)
    


        var height=20
        var width=10
        
        rectangle(20,10)
        forward(width)
        right(90)
        forward(height)
        right(90)
        forward(width)
        right(90)
        forward(height)
        right(180)
        forward(height)
        right(270)
        
        forward(width)
        right(270)
        forward(height/2)
        
        right(90)
        forward(width)
        right(270)
        forward(height)
        right(270)
        forward(width)
        
        right(180)
        forward(width)
        right(270)
        forward(height/2)
        right(180)
        forward(height*2)
        
        right(270)
        forward(width)
        right(270)
        forward(height)
        right(270)
        forward(width)
        right(270)
        forward(height)
        right(270)
        forward(width)
        right(270)
        forward(height*2)
        right(270)
        forward(width)
        right(270)
        forward(height*1.5)
        right(90)
        forward(width)
        right(270)
        forward(height/2)
        right(90)
        forward(width)
        right(180)
        }

    goto (200,-150)
    left(90)  
    forward(45)
    right(120)
    forward(45)
    right(120)
    forward(45)
    right(20)
    forward(10)
    right(90)
    forward(5)
    right(90)
    forward(10)
    left(80)
    forward(40)
    left(80)
    forward(10)
    left(90)
    forward(5)
    left(90)
    forward(10)
    hideTurtle()
    }

function brickBlock(sideLength)
{
    colorBackground(sideLength);
    brickRow(sideLength, 4);
    penup();
    forward(sideLength/3);
    pendown();
    brickRow(sideLength, 3);
    penup();
    forward(sideLength/3);
    pendown();
    brickRow(sideLength, 2);
    penup();
    left(180);
    forward(sideLength*2/3);
    left(180);
}

// color the background of the square
function colorBackground(sideLength)
{
    strafe(sideLength / 2);
    width(sideLength);
    colour(100,149,237,1);
    forward(sideLength);
    penup();
    left(180);
    forward(sideLength);
    left(180);
    strafe(-sideLength/2);
    width(2);
    colour(0,0,0,1);
}


// draws a row of bricks within the brick block
function brickRow(sideLength, numBricks)
{
    if (numBricks == 2)
    {
        rectangle(sideLength/3, sideLength/2);
        strafe(sideLength/2);
        rectangle(sideLength/3, sideLength/2);
        strafe(-sideLength/2);
    }

    if (numBricks == 3)
    {
        penup();
        forward(sideLength/3);
        pendown();
        right(90);
        forward(sideLength/4);
        right(90)
        forward(sideLength/3);
        right(90);
        forward(sideLength/4);
        right(90);
        strafe(sideLength/4);
        rectangle(sideLength/3, sideLength/2);
        strafe(sideLength/2);
        forward(sideLength/3);
        right(90);
        forward(sideLength/4);
        right(90)
        penup();
        forward(sideLength/3);
        pendown();
        right(90);
        forward(sideLength/4);
        right(90);
        strafe(-sideLength*3/4);
    }

}

// draws a rectangle
function rectangle(height, width) {
    for(var i = 0; i < 4; i++){
        if (i % 2 == 0)
        {
            forward(height);
        }
        else
        {
            forward(width);
        }
       right(90);
    }
 }

// move from left to right without drawing or changing angle
function strafe(distance)
{
    penup();
    if (distance < 0)
    {
        left(90);
        forward(Math.abs(distance));
        right(90);
    }
    else
    {
        right(90);
        forward(Math.abs(distance));
        left(90);
    }
    pendown();
}

function rectangle(height, width)
 {
    colour(194,74,12)
    forward(width)
    right(90)
    forward(height)
    right(90)
    forward(width)
    right(90)
    forward(height)
    right(180)
    forward(height)
    right(270)
 }
 // circle information
 function circle(size)
 {
     for (var i = 0; i < 180; i++)
     {
         width(2);
         forward(size);
         right(1);
     }
 }
 //half of half
 function half(size)
 {
     for (var i = 0; i < 90; i++)
     {
         width(2);
         forward(size);
         right(1);
     }
 }
/*
    END OF BRICK BLOCK FUNCTIONS
*/
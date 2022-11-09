
//The first thing that is going to start 
function main()
{
    //Tells your pen to do something 
    pendown();
// I don't know what this does. 
    var sideLength = 150;
// Var minX tells us to go to the far left 
//Var minY tells us to go to the far bottom
// Var maxX tells us to go to the far right
//Var maxY tells us to go to the far top
    var minX  = -getWidth()/2
    var minY  =  -getHeight()/2
    var maxY  =  getHeight()/2
    var maxX  =  getWidth()/2

//Tells the turtle to go to bottom left. In addition logs the turtle position and sideLength
    goto(minX,maxY);
    console.log(turtle.pos);
    console.log(sideLength);
    left(45);
    //Left(45) tells makes the turtle go 45 degrees(I think) diagonal 


    var a = getWidth()
    var b = getHeight()
    var abSquared = a*a+b*b
    var c = Math.sqrt(abSquared);
    forward(c);

    goto(maxX,minY);
    console.log(turtle.pos);
    console.log(sideLength);
    right(90);
    forward(c);

   
}



/*
The variables tell the location of the turtle on the invisable grid
*/
var minX  = -getWidth()/2
var minY  =  -getHeight()/2
var maxY  =  getHeight()/2
var maxX  =  getWidth()/2
    
function main()
{//tells the pen to go the the bottom left 
    pendown();
    goto(minX,minY);
    //Makes the popup with the question of how many steps
    var numStairs = prompt("side length:");
    //Makes the sideLength based on the numStairs wanted and the space it needs to be in 
    var sideLength = getWidth()/numStairs;

    //Makes the stairs 
    stairs(sideLength, numStairs)
//For the definition go to the stairs function 
    
wrap(false);

}

// Is the rules for the above.
function stairs(sideLength, numStairs)
{
        //The loop for stairs     
        for (var i = 0; i < numStairs; i++)
        {
            // Turn to the right 90 degrees 
            right(90); 
            forward(sideLength);
            // Turn to the right 270 degrees
            right(270);
            forward(sideLength);
        }
    // so it goes up not sie and so on 
    up(sideLength);
}
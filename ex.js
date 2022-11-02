var min = -getWidth(400)/2;
var max =  getHeight(400)/2;

console.log (turtle.pos);

function randomSquares(sideLength, numSquares){
    for(var i = 0; i < numSquares; i++)
    {
        var xCoord = random(min, max);
        var yCoord = random(min, max);
        goto(xCoord, yCoord);
        square(sideLength);
    }

}

    //raise num to the power of exp
    Math.pow(num, exp);
    //take the square root of num
    Math.sqrt(num)
    
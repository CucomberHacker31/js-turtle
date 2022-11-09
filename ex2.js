function main()
{
    var sideLength = 150;
    
    pendown();

    goto(-250,250);
    console.log(turtle.pos);
    console.log(sideLength);
    left(45);


    var a = getWidth()
    var b = getHeight()
    var abSquared = a*a+b*b
    var c = Math.sqrt(abSquared);
    forward(c);

    goto(-250,-250);
    console.log(turtle.pos);
    console.log(sideLength);
    right(90);
    forward(c);

   
}
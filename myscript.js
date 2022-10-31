function main()
{
    var sideLength =;
    
    pendown();
    var min = -getWidth()/2;
    var max = getWidth()/2;
    goto(random(min, max), random(min, max))
    square(sideLength);
    
}
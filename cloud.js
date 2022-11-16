function main()
{
    wrap(false)
circle(.75)
left(90)
half(0.75)
right(90)
forward(150)
left(90)
circle(.75)
left(90)
half(0.75)
right(90)
forward(150)
right(90)
goto(-250,-250)
}


function circle(size)
{
    for (var i = 0; i < 180; i++)
    {
        width(2);
        forward(size);
        right(1);
    }
}

function half(size)
{
    for (var i = 0; i < 90; i++)
    {
        width(2);
        forward(size);
        right(1);
    }
}

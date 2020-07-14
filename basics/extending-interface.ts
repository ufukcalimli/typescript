interface Shape{
    color: string;
}

interface PenStroke{
    penWidth: number;
}

interface Square extends Shape, PenStroke{
    sideLength: number
}

let square = {} as Square;
square.color = 'blue';
square.sideLength = 5;
square.penWidth = 10.0;
interface Coffee{
    type: string
}

function makeCoffee(coffee: Coffee){
    console.log(`Preparing ${coffee.type}...`)
}

const order = {
    type: 'Black'
}

makeCoffee(order)


// interface with optional properties
interface SquareConfig {
    color?: string; // by '?' properties can be optional otherwise compiler will scream at us
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});


// readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error! we can't reassign any value

// interface for a function
interface Addition{
    (x: number, y: number): number;
}

let add: Addition;
add = function (first: number, second: number){
    return first + second;
}
const total = add(2,3);
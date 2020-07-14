const isDone: boolean = true;
const myName: string = 'Ufuk';
const age: number = 25;
const money: number = 32.55;
const amIPoor: boolean = true;

const belongings: string[] = ['wine', 'bread', 'love'];
const costs: number[] = [5.00, 13,20];

enum Color {
    Blue = 1,
    Green = 2,
    Black = 3
}
const blue: Color = Color.Blue;
const colorName: string = Color[2]; // 'Green'

let whatItIs: any = 'presence of love?';
whatItIs = 5.00;
whatItIs = true;

function sayHello(): void {
    console.log('Hello')
}

function add(x: number, y: number): number{
    return x + y;
}

const human = {
    name: myName,
    age: age,
    isPoor: amIPoor
}

let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length; // On lines 37 and 38, we can assert a value that we can not sure 
let strLength: number = (someValue as string).length; 
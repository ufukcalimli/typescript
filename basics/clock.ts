interface IClockConstructor{
    new (hour: number, minute: number): IClock;
}

interface IClock{
    tick(): void;
}

function createClock(ctor: IClockConstructor, hour: number, minute: number){
    return new ctor(hour, minute)
}

class DigitalClock implements IClock{
    constructor(h: number, m: number){}
    tick(){
        console.log('beep beep')
    }
}

class AnalogClock implements IClock{
    constructor(h:number, m: number){}
    tick(){
        console.log('tick tock')
    }
}

const digital = createClock(DigitalClock, 4, 20);
const analog = createClock(AnalogClock, 5, 20);
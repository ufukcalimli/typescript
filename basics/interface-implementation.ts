interface IClock{
    current: Date;
    hour: number;
    minute: number
}

class Clock implements IClock{
    current: Date = new Date();
    hour: number;
    minute: number;
    constructor(hour: number, minute: number ){
        this.hour = hour;
        this.minute = minute;
    }
}


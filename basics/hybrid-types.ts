// In this example, we would like to have both object and function at once.

interface Counter{
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter{
    // By this line, we created object/function counter to be returned
    let counter = (function (start: number){ }) as Counter;
    counter.interval = 123;
    counter.reset = function() {};
    return counter;
}

let c = getCounter();
c(10);
c.interval = 234;
c.reset();
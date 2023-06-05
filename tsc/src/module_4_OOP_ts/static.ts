class Counter {
    static counter: number = 0;

    static incCounter() {
        Counter.counter++;
        console.log(Counter.counter);
    }

    static decCounter() {
        Counter.counter--;
        console.log(Counter.counter);
    }
}

Counter.incCounter();
Counter.incCounter();
Counter.incCounter();
Counter.decCounter();

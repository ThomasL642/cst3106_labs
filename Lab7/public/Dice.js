//can roll a dice object
class Roll {
    constructor(min = 1, max = 6) {
        this.min = min;
        this.max = max;
        this.result = this.roll();
    }

    roll() {
        this.result = Math.floor(Math.random() * this.max) + this.min;
        return this.result;
    }
}

//Roll history can add, gethistory and delete history
class RollHistory {
    constructor() {
        this.history = [];
    }

    addRoll(roll) {
        this.history.push(roll);
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        this.history = [];
    }
    
}


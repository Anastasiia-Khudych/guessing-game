class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }

    guess() {
        return Math.ceil((this.minNum + this.maxNum) / 2);
    }

    lower() {
        return this.maxNum = Math.ceil((this.minNum + this.maxNum) / 2);
    }

    greater() {
        return this.minNum = Math.ceil((this.minNum + this.maxNum) / 2);
    }
}

module.exports = GuessingGame;

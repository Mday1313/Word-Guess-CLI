// constructor
var Letter = function (input) {
    this.letter = input;
    this.hasBeenGuessed = false;

    this.toString = function () {
        // console.log("I WORK");
        if (this.letter === " ") {
            this.hasBeenGuessed = true;
            return " ";
        } else if (this.letter === "'") {
            this.hasBeenGuessed = true;
            return "'";
        } else if (this.hasBeenGuessed === false) {
            return "_";
        } else {
            return this.letter;
        }
    
    };
    
    this.determineInWord = function (userGuess) {
        if (userGuess === this.letter) {
            this.hasBeenGuessed = true;
        }
    };
}

// var input = "s";
// var test = new Letter("r")

// var result = test.determineInWord();
// console.log(result);

module.exports = Letter;
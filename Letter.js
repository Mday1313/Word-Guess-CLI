// constructor
var Letter = function (input) {
    this.letter = input;
    this.hasBeenGuessed = false;
    
    // current word will be fed in and converted to _ or space if has been guessed is true, if false display letter
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

module.exports = Letter;
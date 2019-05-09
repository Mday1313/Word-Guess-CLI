var Letter = require("./Letter.js");


var Word = function (answer) {
    this.gameWord = [];
    // Loop through each letter in current word  
    for (var i = 0; i < answer.length; i++) {
        var newLetter = new Letter(answer[i]);
        this.gameWord.push(newLetter);
    }

    this.displayWord = function () {
        var display = "";
        for (var i = 0; i < this.gameWord.length; i++) {
            display += this.gameWord[i] + " ";
        }
        console.log();
        console.log(display);
    };

    this.guessInput = function (input) {
        for (var i = 0; i < this.gameWord.length; i++) {
            this.gameWord[i].determineInWord(input);
        }
    };
}

module.exports = Word;
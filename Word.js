var Letter = require("./Letter.js");


var Word = function (answer) {
    this.gameWord = [];

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

    // this.guessWord = function (input) {
    //     for (var i = 0; i < this.gameWord.length; i++) {
    //         this.gameWord.determineInWord(input);
    //         console.log(input + " is in word.");
    //     }

    // };


}


module.exports = Word;

// let myWord = new Word("stars");
// var result = myWord.guessWord("s");



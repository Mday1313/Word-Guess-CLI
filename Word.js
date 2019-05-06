var letter = require("./Letter.js");
var input = "t";
var gameWord = "";
var Word = function(answer){
    this.wordArr = answer.split("");
    this.newLetter = new letter(input);
    this.letterArr = [];
    this.letterArr.push(this.newLetter.letter);

    this.displayWord = function() {
    this.wordArr.forEach(element => {
        gameWord = myWord.toString(element)
        console.log(gameWord);
        
    });
}
    // this.printWord = function(){
    //     this.wordArr.forEach(element => {
           
    //     });
    // }
    
  
}


let myWord = new Word("stars");
var result = myWord.toString();

console.log(gameWord);
console.log(result);
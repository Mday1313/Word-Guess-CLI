// Dependency for inquirer npm package
var inquirer = require("inquirer");
// link Word constructor
var Word = require("./Word");
// To make it pretty!
var chalk = require('chalk');
// Words to play from, COUNTRY NAMES
var wordBank = ["afghanistan", "albania", "algeria", "andorra", "angola", "antigua and barbuda", "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "bosnia and herzegovina", "botswana", "brazil", "bulgaria", "burkina faso", "burundi", "cabo verde", "cambodia", "cameroon", "canada", "central african republic", "chad", "chile", "china", "colombia", "congo", "costa Rica", "cote d'ivoire", "croatia", "cuba", "cyprus", "czech Republic", "denmark", "djibouti", "dominica", "dominican republic", "east timor", "ecuador", "egypt", "el salvador", "equatorial guinea", "eritrea", "estonia", "ethiopia", "fiji", "finland", "france", "gabon", "the gambia", "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guyana", "haiti", "honduras", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy", "jamaica", "japan", "jordan", "kenya", "north korea", "south korea", "kosovo", "kuwait", "laos", "latvia", "lebanon", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "madagascar", "malawi", "malaysia", "maldives", "mali", "mexico", "micronesia", "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique", "myanmar", "namibia", "nepal", "netherlands", "new zealand", "nicaragua", "niger", "nigeria", "north macedonia", "norway", "oman", "pakistan", "palau", "panama", "papua new guinea", "paraguay", "Ppru", "philippines", "poland", "portugal", "qatar", "romania", "russia", "rwanda", "saint lucia", "samoa", "saudi arabia", "senegal", "serbia", "seychelles", "sierra leone", "singapore", "slovakia", "slovenia", "solomon islands", "somalia", "south africa", "spain", "sri lanka", "sudan", "sweden", "switzerland", "syria", "taiwan", "tanzania", "thailand", "togo", "tonga", "turkey", "uganda", "ukraine", "united arab emirates", "united kingdom", "united states", "uruguay", "vatican city", "venezuela", "vietnam", "zambia", "zimbabwe"];

// Allow for condition to pick new word if true
var requireNewWord = false;

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Guesses left
var guessesLeft = 10;
// WINS/Losses count
var wins = 0;
var losses = 0;

var beginGame = function () {
  //Instructions to be displayed in beginning
  console.log("\n" + chalk.bold.green(" *** ") +chalk.bold.red(" *** ") +chalk.bold.blue(" *** ") +chalk.bold.yellow(" *** ") +chalk.bold.green("WORD GUESS GAME") + chalk.bold.yellow(" *** ") +chalk.bold.blue(" *** ") +chalk.bold.red(" *** ") +chalk.bold.green(" *** ")+"\n");
  var text = chalk.magenta("How well do you know the world? \nGuess the letters to fill in the word.  \nAll words are names of countries.  \nYou will be allowed 8 wrong guesses per word.  \nGood luck!!")
  console.log(text + "\n");
  // Use inqurirer to confirm begin game
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'startGame',
      message: 'Would you like to play the game?'
    }
  ]).then(answers => {
    if (answers) {
      // call main function that runs game
      getUserInput();
    } else {
      return;
    }
  });
}

var pickWord = function () {
  // generate random number between 0 and the length of wordBank array
  var pickNum = Math.floor(Math.random() * wordBank.length);
  //  Set random num as the index number of array, store as word in use 
  wordInUse = wordBank[pickNum];

  return wordInUse;
}

// Call function to generate new word
pickWord();

var myWord = new Word(wordInUse);

function getUserInput() {
  // Generates new word in function if true
  if (requireNewWord) {
    //  Call function to pick new word
    pickWord();

    // Passes random word through the Word constructor
    myWord = new Word(wordInUse);
// reset condition for picking new word
    requireNewWord = false;
  }

  // check if a letter guessed is correct
  var wordComplete = [];
  myWord.gameWord.forEach(completeCheck);

  // letters remaining to be guessed
  if (wordComplete.includes(false)) {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'userinput',
          message: "Guess a Letter!",
          validate: function (value) {
            var pass = value.match(/[a-z]/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid letter';
          }
        }
      ])
      .then(function (input) {
        var userGuess = input.userinput
        
        if (
          // reject duplicate guesses and have user guess again
          incorrectLetters.includes(userGuess) ||
          correctLetters.includes(userGuess) ||
          userGuess === ""
        ) {
          console.log("\nLetter has been guessed already. Please try again!\n");
          getUserInput();
        } else {
          // Determines if guessed letter is in word
          var wordCheckArray = [];

          myWord.guessInput(userGuess);

          // Checks if guess is correct
          myWord.gameWord.forEach(wordCheck);
          if (wordCheckArray.join("") === wordComplete.join("")) {
            console.log(chalk.red("\nWrong Guess!\n"));

            incorrectLetters.push(userGuess);
            guessesLeft--;
          } else {
            console.log(chalk.yellow.bold("\nCorrect!\n"));

            correctLetters.push(userGuess);
          }

          myWord.displayWord();

          // Print guesses left
          console.log(chalk.blue("\nGuesses Left: " + guessesLeft + "\n"));

          // Print letters guessed already
          console.log(chalk.magenta(
            "Incorrect Letters Guessed: " + incorrectLetters.join(" ") + "\n"
          ));

          // Guesses left
          if (guessesLeft > 0) {
            // Call function
            getUserInput();
          } else {
            console.log(chalk.red.bold("GAME OVER! You have run out of guesses!\n"));
            console.log(chalk.magenta("\n The answer was " + wordInUse.toUpperCase())+"\n");
            losses++;
            playAgain();
          }

          function wordCheck(key) {
            wordCheckArray.push(key.hasBeenGuessed);
          }
        }
        // }
      });
  } else {
    // Declare winner
    console.log(chalk.green.underline.bold("Y")+chalk.magenta.underline.bold("O")+chalk.yellow.underline.bold("U ")+chalk.blue.underline.bold(" W")+chalk.red.underline.bold("I")+chalk.green.underline.bold("N!\n"));
    
    wins++;
    playAgain();
  }

  function completeCheck(key) {
    wordComplete.push(key.hasBeenGuessed);
  }
}

function playAgain() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to:",
        choices: ["Play Again", "Exit"],
        name: "restart"
      }
    ])
    .then(function (input) {
      if (input.restart === "Play Again") {
        requireNewWord = true;
        incorrectLetters = [];
        correctLetters = [];
        guessesLeft = 10;
        getUserInput();
      } else {
        console.log(chalk.blue.bold("\n    Wins: " + wins + "\n    Losses: " + losses))
        return;
      }
    });
}

beginGame();
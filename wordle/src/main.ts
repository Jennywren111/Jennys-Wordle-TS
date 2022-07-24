import './assets/scss/main.scss';
import { Alphabet, Letters } from './alphabet/alphabet';
import { words } from './words/words';

export {};
    
  const alpha = Alphabet.create(); // This is called a factory method - creates a new thing from class. 

  let chosenWord = words[Math.floor(Math.random() * words.length)];
  let guessNumber = 0;

    // HOMEWORK! Move the below variable and method into a module. Pass it the arrow function. 
  let inputField = <HTMLInputElement>document.querySelector(".textfield");

  inputField.addEventListener('keyup', (e) => {
 
      processGuess(inputField.value, e, chosenWord);
  });

  function processGuess(guess: string, e: KeyboardEvent, word: string): void {
      let displayLetters = document.querySelectorAll<HTMLElement>(`letter-block-${guessNumber} > letter-input`); 
      let guessArray = guess.toUpperCase().split(""); // Deal with this as part of the above homework

      if (e.key === 'Enter' && guess.length === 5) {
          matchLetters(guess, word, displayLetters);
      }

      displayLetters.forEach(function(box, index) {
          if (guessArray[index]) {
              box.innerHTML = guessArray[index];
          }
          else {
              box.innerHTML = " ";
          }
      });
      
  }

// HOMEWORK! Do this first. Create a class 'guessProcessor' or something logical, and add those functions to it. 

  function matchLetters(guess: string, word: string, boxes: NodeListOf<HTMLElement>) {
       

      console.log(word);

      if (guessNumber >= 6) {
          inputField.setAttribute("readonly", "");
          inputField.value = "No more guesses!";
      }
      

      else {

          let guessArray = guess.toUpperCase().split("");
          let wordArray = word.toUpperCase().split("");

          markCorrectMatches(guessArray, wordArray, boxes);

          markSemicorrectMatches(guessArray, wordArray, boxes);

          alpha.updateAlphabetDisplay();
          inputField.value = "";
          guessNumber++;
      }

  }

  function markCorrectMatches(guess: string[], word: string[], boxes: NodeListOf<HTMLElement> ) {
      guess.forEach(function (letter, index, guess) {
          if (letter === word[index]) {
                alpha.setCorrect(<Letters>letter);
              boxes[index].classList.add("correct"); 
              word[index] = "_";
              guess[index] = ".";
          }
      });
  }

  function markSemicorrectMatches(guess: string[], word: string[], boxes: NodeListOf<HTMLElement>) {
      guess.forEach(function (letter, index, guess) {
          if (word.indexOf(letter) !== -1) {
                alpha.setSemiCorrect(<Letters>letter); // Casting using <Letters> - this only helps at compile time! Is gone by the time the code is run. This is why casting is bad!
              boxes[index].classList.add("halfcorrect");
              word[word.indexOf(letter.toUpperCase())] = "_";
              guess[index] = ".";
          }
          else if (letter !== ".") {
                alpha.setIncorrect(<Letters>letter);
              boxes[index].classList.add("incorrect");
          }
      });
  }


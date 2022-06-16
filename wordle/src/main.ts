
export {};
  let words = ["daisy", "henge", "roots", "bathe", "shoes", "fluff", "dirty", "clean", "roads", "kitty", "tiger", "grass", "bench", "range", "acres", "blank", "walls", "viola", "words", "hives", "hover", "mouse", "honey", "scarf", "trees", "hares", "books", "tease", "zebra", "lolly"];
  
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const alphabetIndex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let chosenWord = words[Math.floor(Math.random() * words.length)];
  let guessNumber = 0;

  let alphabetString = alphabet.join('');
  let alphabetDiv = <HTMLElement>document.querySelector("#alphabet");
  alphabetDiv.innerHTML = alphabetString;

  let inputField = <HTMLInputElement>document.querySelector(".textfield");

  inputField.addEventListener('keyup', (e) => {
 
      updateDisplay(inputField.value, e, chosenWord);
  });

  function updateDisplay(guess: string, e: KeyboardEvent, word: string): void {

      let displayLetters = document.querySelectorAll<HTMLElement>(`letter-block-${guessNumber} > letter-input`); 
      let guessArray = guess.toUpperCase().split(""); 

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

          alphabetString = alphabet.join('');
          alphabetDiv.innerHTML = alphabetString;

          inputField.value = "";
          guessNumber++;

      }

  }

  function markCorrectMatches(guess: string[], word: string[], boxes: NodeListOf<HTMLElement>) {
      guess.forEach(function (letter, index, guess) {
          if (letter === word[index]) {
              alphabet[alphabetIndex.indexOf(letter.toUpperCase())] = `<span class=\"correct\">${letter}</span>`;
              boxes[index].classList.add("correct");
              word[index] = "_";
              guess[index] = ".";
          }
      });
  }

  function markSemicorrectMatches(guess: string[], word: string[], boxes: NodeListOf<HTMLElement>) {
      guess.forEach(function (letter, index, guess) {
          if (word.indexOf(letter) !== -1) {
              alphabet[alphabet.indexOf(letter.toUpperCase())] = `<span class=\"halfcorrect\">${letter}</span>`;
              boxes[index].classList.add("halfcorrect");
              word[word.indexOf(letter.toUpperCase())] = "_";
              guess[index] = ".";
          }
          else if (letter !== ".") {
              boxes[index].classList.add("incorrect");
              alphabet[alphabet.indexOf(letter.toUpperCase())] = `<span class=\"incorrect\">${letter}</span>`;
          }
      });
  }


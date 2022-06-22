export class Alphabet {

    // state saves the important info - previous version just stores how alphabet looks!
  state = { 
    a: "U", 
    b: "U",
    // U - unknown, Y - correct, N - incorrect, P - partially correct
    // HOMEWORK - make this complete
   };

  constructor() {

  }
  
  processWord(guess: string): void {
    console.log(guess);
  }

  setCorrect(letter: string): void {
    console.log(letter);
    // HOMEWORK - make this work. It needs to update state to mark correct letters.
  }
  // marks letter as correct

  debug() {
    console.log(this.state); // logs the state of the object created from the class
    // HOMEWORK - make this log the state correctly - with the correct / incorrect letters marked. 
  }
}
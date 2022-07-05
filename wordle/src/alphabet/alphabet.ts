
export type Letters = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z";

export class Alphabet {

    // state saves the important info - JS version just stores how alphabet looks!
  state = { 
    A: "U", 
    B: "U",
    C: "U", 
    D: "U",
    E: "U", 
    F: "U",
    G: "U", 
    H: "U",
    I: "U", 
    J: "U",
    K: "U", 
    L: "U",
    M: "U", 
    N: "U",
    O: "U", 
    P: "U",
    Q: "U", 
    R: "U",
    S: "U", 
    T: "U",
    U: "U", 
    V: "U",
    W: "U", 
    X: "U",
    Y: "U", 
    Z: "U",
    // U - unknown, Y - correct, N - incorrect, P - partially correct
   };

  constructor() {

  }
  
  processWord(guess: string): void {
    console.log(guess);
  }

  setCorrect(letter: Letters): void {
    console.log(letter);
    this.state[letter] = "Y";
  }
  // marks letter as correct

  setSemiCorrect(letter: Letters): void {
    console.log(letter);
    this.state[letter] = "P"; 
  }
  // marks letter as partially correct - ***note to self - check this is not overriding correct if someone inadvertantly moves their correct letter in their next guess***

  setIncorrect(letter: Letters): void {
    console.log(letter);
    this.state[letter] = "N"; 
  }
  // marks letter as incorrect

  updateAlphabetDisplay(): void {
    // Loop through keys in state. If value is Y, find <letter> with id letter-${key}, add class correct. 
    let stateObject = Object.entries(this.state);
    console.log(stateObject);
    stateObject.forEach(item => {
      if (item[1] === "Y") {
        document.getElementById(`${item[0].toLowerCase()}`)?.classList.add("correct");
      }
      else if (item[1] === "P") {
        document.getElementById(`${item[0].toLowerCase()}`)?.classList.add("halfcorrect");
      }
      else if (item[1] === "N") {
        document.getElementById(`${item[0].toLowerCase()}`)?.classList.add("incorrect");
      }
      // ***Note to self - classList.add is piling classes up in the letters, not swapping them! CHANGE THIS CODE***
    });
  }
}


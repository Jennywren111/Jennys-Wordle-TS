
export type Letters = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z";
let instance: Alphabet;
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
  
  // this function can be run off the class as it's 'static'. (most methods aren't accessible off the class itself, only an instance.) Can add console logs and things to log when it's called, or only return if a certain condition is met.
  static create(): Alphabet {
    if (!instance) {
      instance = new Alphabet();
    }
    return instance;
  }
  
  processWord(guess: string): void {
    console.log(guess);
  }

  setCorrect(letter: Letters): void {
    this.state[letter] = "Y";
  }

  setSemiCorrect(letter: Letters): void {
    if (this.state[letter] !== "Y") {
      this.state[letter] = "P"; 
    }
  }

  setIncorrect(letter: Letters): void {
    this.state[letter] = "N"; 
  }

  updateAlphabetDisplay(): void {
    // Loop through keys in state. If value is Y, find <letter> with id letter-${key}, add class correct. 
    let stateObject = Object.entries(this.state);
    console.log(stateObject);
    
    stateObject.forEach(item => {

      let currentClass = "unknown";
      let letterElement = document.getElementById(`${item[0].toLowerCase()}`);

      if (item[1] === "Y") {
        currentClass = "correct";
      }
      else if (item[1] === "P") {
        currentClass = "halfcorrect";
      }
      else if (item[1] === "N") {
        currentClass = "incorrect";
      }

      letterElement!.className = "";
      letterElement!.classList.add(currentClass);
      // console.log(document.getElementById(`${item[0].toLowerCase()}`));
    });
  }
}


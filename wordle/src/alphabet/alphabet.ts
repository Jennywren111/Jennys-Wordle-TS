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

  setCorrect(letter: string): void {
    console.log(letter);
    this.state[letter] = "Y"; // Why is TypeScript grumbling here?! Is it because letter is a string, but the keys are not technically strings? How do I get around this? Type: any?
  }
  // marks letter as correct

  setSemiCorrect(letter: string): void {
    console.log(letter);
    this.state[letter] = "P"; 
  }
  // marks letter as partially correct

  setIncorrect(letter: string): void {
    console.log(letter);
    this.state[letter] = "N"; 
  }
  // marks letter as partially correct

  debug() {
    console.log(this.state); // logs the state of the object created from the class
    // HOMEWORK - make this log the state correctly - with the correct / incorrect letters marked. 
  }
}
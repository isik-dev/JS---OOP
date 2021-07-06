// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed.
// 3. Create two instances of it and print both to the console

const Hangman = function (word, guesses) {
    this.word = word
    this.guesses = guesses
}

const instance1 = new Hangman('Mercury', 5)
console.log(instance1);

const instance2 = new Hangman('Neptune', 2)
console.log(instance2);
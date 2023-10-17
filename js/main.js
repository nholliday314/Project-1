  /*----- constants -----*/
// Lists of random words (stretch include dictionary with categories)
const randWordList = [
  'apple', 'banana', 'cherry', 'grape', 'lemon', 'melon', 'orange', 'peach', 'pear', 'plum',
  'table', 'chair', 'desk', 'lamp', 'clock', 'shoes', 'socks', 'shirt', 'jeans', 'shorts',
  'mouse', 'keyboard', 'screen', 'phone', 'watch', 'radio', 'book', 'pen', 'pencil', 'paper',
  'music', 'movie', 'dance', 'speak', 'write', 'paint', 'jump', 'swim', 'sleep', 'dream',
  'green', 'yellow', 'blue', 'red', 'black', 'white', 'brown', 'pink', 'purple', 'gray'
];

// Displaying word to be guessed
const wordDisplay = document.querySelector(".word-display");
const keyboardDiv = document.querySelector(".keyboard");
const guessText = document.querySelector(".incorrect-guesses-counter b");
const guessLetterText = document.querySelector(".incorrect-guesses b");
const popUp = document.querySelector(".pop-up");

// let word = 'asd';
const lettersChosen = [];
const correctLettersChosen = [];
const incorrectLettersChosen = [];
const maxGuesses = 5;
let countIncorrectGuess = 0;
const initGame = (button, clickedButton) => {
  console.print(button, clickedButton);    
}

// setting up keyboard with event listeners
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  button.setAttribute('letter', button.innerText)
  button.addEventListener('click', clickedLetter)
  keyboardDiv.appendChild(button);
}

  /*----- functions -----*/

// Select word randomly from randomWordList
const getRandomWord = () => {
  word = randWordList[Math.floor(Math.random() * randWordList.length)];
  // console.log(word);
  wordDisplay.innerHTML = word.split("").map(() => '<li class="letter"></li>').join("");
}

getRandomWord();

function clickedLetter() {
  let theClickedLetter = this.getAttribute('letter')
  console.log("clicked letter", theClickedLetter)
  lettersChosen.push(theClickedLetter)
  // console.log(lettersChosen)
  // console.log(incorrectLettersChosen)
  // console.log(countIncorrectGuess)
  if (word.includes(theClickedLetter)) {
    [...word].forEach((letter, index) => {
      if(letter === theClickedLetter) {
        correctLettersChosen.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        // console.log(correctLettersChosen)
    }
    });
  } else {
    incorrectLettersChosen.push(theClickedLetter.toUpperCase())
    countIncorrectGuess ++;
    // console.log(incorrectLettersChosen)
    // console.log(countIncorrectGuess)
  }
  // updating htlm content for incorrect guesses counter and letters
  guessText.innerText = `${countIncorrectGuess} / ${maxGuesses}`;
  guessLetterText.innerText = incorrectLettersChosen;

  // popup declaring if player has won or lost
  if(countIncorrectGuess === maxGuesses) {
    window.alert(`${"GAME OVER! You've been abducted. The word was: "} ${word}`)
  }; 
  if(correctLettersChosen.length === word.length) {
    window.alert(`${"YOU WIN! You've successfully escaped abduction. The word was: "} ${word}`)
  }; 
}







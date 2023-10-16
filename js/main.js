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

// let word = 'asd';
const lettersChosen = [];
const correctLettersChosen = [];
const incorrectLettersChosen = [];

const initGame = (button, clickedButton) => {
  console.print(button, clickedButton);    
}

for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  button.setAttribute('letter', button.innerText)
  button.addEventListener('click', clickedLetter)
  keyboardDiv.appendChild(button);
  // button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}


  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/

// Event listener for letter clicked
// button.addEventListener("click", function() {
//   document.getElementById("demo").innerHTML = "Hello World";
//   });

  /*----- functions -----*/

// Select word randomly from randomWordList
const getRandomWord = () => {
  word = randWordList[Math.floor(Math.random() * randWordList.length)];
  console.log(word);
  wordDisplay.innerHTML = word.split("").map(() => '<li class="letter"></li>').join("");
}
getRandomWord();

function clickedLetter() {
  let theClickedLetter = this.getAttribute('letter')
  console.log("clicked letter", theClickedLetter)
  lettersChosen.push(theClickedLetter)
  console.log(lettersChosen)
  if (word.includes(theClickedLetter)) {
    [...word].forEach((letter, index) => {
      if(letter === theClickedLetter) {
        correctLettersChosen.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
    }
    });
  } else {
    incorrectLettersChosen.push(theClickedLetter)
    console.log(incorrectLettersChosen)
    // wordDisplay.querySelectorAll("b").add("incorrectLettersChosen");
    
    function updateContent() {
      // Get the element by its ID
      const element = document.getElementsByClassName("b");

      // Update the content
      element.innerHTML = incorrectLettersChosen;
    }
    updateContent()


  }
}






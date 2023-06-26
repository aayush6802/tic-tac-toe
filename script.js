let startBtn = document.querySelector("#start")
let turnX = document.querySelector("#turnX")
let turnO = document.querySelector("#turnO")
let resetBtn = document.querySelector("#reset")
let gameBox = document.querySelectorAll(".box")
let turnslider = document.querySelectorAll(".TurnBox")
let gifBox = document.querySelector(".gifBox")

let gameMusic = new Audio("audio/music.mp3")
let StartAudio = new Audio("audio/start_audio.mp3")
let turnSound = new Audio("audio/ting.mp3")
let gameover = new Audio("audio/gameover.mp3")
let VictorySong = new Audio("audio/victory_audio1.mp3")

let isGameOver = false

let turn = "X"

// Function to change the current turn
const changeTurn = () => {
  if (turn === 'X') {
    turn = 'O';
    turnO.style.backgroundColor = "rgb(47 57 211 / 70%)";
    turnX.style.backgroundColor = "white";
  } else {
    turn = 'X';
    turnO.style.backgroundColor = "white";
    turnX.style.backgroundColor = "rgb(47 57 211 / 70%)";
  }
}

// Function to check if a player has won the game
const checkWin = () => {
  // Array of winning combinations
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  // Iterating over each winning combination
  wins.forEach(e => {
    // Checking if the three cells of the combination have the same non-empty symbol
    if ((gameBox[e[0]].innerHTML !== "") &&
      (gameBox[e[0]].innerHTML === gameBox[e[1]].innerHTML) &&
      (gameBox[e[1]].innerHTML === gameBox[e[2]].innerHTML)
    ) {
      // Displaying the winning symbol in the result element
      document.querySelector("#result").innerHTML = gameBox[e[0]].innerText + " WIN !"

      // Updating game over state
      isGameOver = true
      turnX.style.background = "white"
      turnO.style.background = "white"
      VictorySong.play()
    }
  })

}

// Adding click event listeners to each game box
  Array.from(gameBox).forEach(e => {
  turnX.style.backgroundColor = "rgb(47 57 211 / 70%)"
  
    e.addEventListener('click', () => {
      if (e.innerHTML === "") {
        // Adding the current turn symbol to the clicked cell
        e.innerHTML = turn;
        turnSound.play();
        changeTurn();
        checkWin();
      }
    })

  })




// reset Btn
resetBtn.addEventListener("click", () => {
  Array.from(gameBox).forEach(element => {
    // Clearing the symbols from all game boxes
    element.innerText = ""
  })
  turn = "X"
  isGameOver = false
  // gameMusic.pause()
  gameover.play()
  turnX.style.background = "white"
  turnO.style.background = "white"
  document.querySelector("#result").innerHTML = " RESULT"
})

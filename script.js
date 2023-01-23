let score = 0;
let squares = ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8",
              "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7",
              "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6",
              "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5",
              "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4",
              "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3",
              "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2",
              "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"];
let randomSquare;
let scoreDisplay = document.getElementById("score");
let message = document.getElementById("message");
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", startGame);

function startGame(){
  randomSquare = squares[Math.floor(Math.random() * squares.length)];
  message.innerHTML = "Guess the square: " + randomSquare;
  for (let i = 0; i < squares.length; i++) {
    let square = document.getElementById(squares[i]);
    square.addEventListener("click", checkSquare);
  }
  setTimeout(function(){
    message.innerHTML = "Time's up!";
    for (let i = 0; i < squares.length; i++) {
      let square = document.getElementById(squares[i]);
      square.removeEventListener("click", checkSquare);
    }
  }, 5000);
}

function checkSquare(){
  if(this.id === randomSquare){
    score++;
    message.innerHTML = "Correct!";
    scoreDisplay.innerHTML = "Score: " + score;
  }else{
    score--;
    message.innerHTML = "Wrong!";
    scoreDisplay.innerHTML = "Score: " + score;
  }
  for (let i = 0; i < squares.length; i++) {
    let square = document.getElementById(squares[i]);
    square.removeEventListener("click", checkSquare);
  }
}

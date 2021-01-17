var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 5) + 2;
var randomNumber2;
randomNumber2 = Math.floor(Math.random() * 6) + 1;
var count = 1;
// while (count > 0) {
//   randomNumber2 = randomNumber2++;
//   randomNumber1 = randomNumber1--;
//   count--;
// }

if (randomNumber1 === 1) {
  document.querySelector(".img1").setAttribute("src", "/images/dice1.png");
} else if (randomNumber1 === 2) {
  document.querySelector(".img1").setAttribute("src", "/images/dice2.png");
} else if (randomNumber1 === 3) {
  document.querySelector(".img1").setAttribute("src", "/images/dice3.png");
} else if (randomNumber1 === 4) {
  document.querySelector(".img1").setAttribute("src", "/images/dice4.png");
} else if (randomNumber1 === 5) {
  document.querySelector(".img1").setAttribute("src", "/images/dice5.png");
} else {
  document.querySelector(".img1").setAttribute("src", "/images/dice6.png");
}

if (randomNumber2 === 1) {
  document.querySelector(".img2").setAttribute("src", "/images/dice1.png");
} else if (randomNumber2 === 2) {
  document.querySelector(".img2").setAttribute("src", "/images/dice2.png");
} else if (randomNumber2 === 3) {
  document.querySelector(".img2").setAttribute("src", "/images/dice3.png");
} else if (randomNumber2 === 4) {
  document.querySelector(".img2").setAttribute("src", "/images/dice4.png");
} else if (randomNumber2 === 5) {
  document.querySelector(".img2").setAttribute("src", "/images/dice5.png");
} else {
  document.querySelector(".img2").setAttribute("src", "/images/dice6.png");
}

var winner = document.querySelector("h1");
if (randomNumber2 > randomNumber1) {
  winner.innerHTML = "Player 2 Wins!🚩";
} else if (randomNumber2 < randomNumber1) {
  winner.innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 == randomNumber1) {
  winner.innerHTML = "Draw!";
}

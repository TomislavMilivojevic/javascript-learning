// Snake project Youtube https://www.youtube.com/watch?v=7Azlj0f9vas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

// snake position
let headX = 10;
let headY = 10;
const snakeParts = [];
let tailLength = 2;
//
let xVelocity = 0;
let yVelocity = 0;

let score = 0;

// Objects on screen

let appleX = 5;
let applyY = 5;

// game loop with setTimeOut
function drawGame() {
  changeSnakePosition();
  let result = isGameOver();
  if (result) {
    return;
  }
  clearScreen();

  checkAppleColosion();
  drawApple();
  drawSnake();
  drawScore();

  if (score > 2) {
    speed = 11;
  }
  if (score > 5) {
    speed = 15;
  }
  setTimeout(drawGame, 1000 / speed);
}

function isGameOver() {
  let gameOver = false;

  if (yVelocity === 0 && xVelocity === 0) {
    return false;
  }
  // walls
  if (headX < 0) {
    gameOver = true;
  } else if (headX === tileCount) {
    gameOver = true;
  } else if (headY < 0) {
    gameOver = true;
  } else if (headY === tileCount) {
    gameOver = true;
  }

  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    if (part.x === headX && part.y === headY) {
      gameOver = true;
      break;
    }
  }

  if (gameOver) {
    ctx.fillStyle = "white";
    ctx.font = "50px Verdana";

    ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
  }

  return gameOver;
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "10px Verdana";
  ctx.fillText("Score " + score, canvas.width - 50, 10);
}

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  ctx.fillStyle = "green";
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeParts.push(new SnakePart(headX, headY));
  if (snakeParts.length > tailLength) {
    snakeParts.shift(); // Remove the furthest item from the snake parts if we have more than our tail size
  }
  ctx.fillStyle = "orange";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function drawApple() {
  ctx.fillStyle = "red";
  ctx.fillRect(appleX * tileCount, applyY * tileCount, tileSize, tileSize);
}

function changeSnakePosition() {
  headX = headX + xVelocity;
  headY = headY + yVelocity;
}

function checkAppleColosion() {
  // Apple will change position / Collision detection
  if (appleX === headX && applyY === headY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
    score++;
  }
}

// Keyboard listeners

document.body.addEventListener("keydown", keyDown);

function keyDown(event) {
  // Up arrow keycode 38
  if (event.keyCode === 38) {
    if (yVelocity === 1) return;
    yVelocity = -1;
    xVelocity = 0;
  }
  // Down arrow
  if (event.keyCode === 40) {
    if (yVelocity === -1) return;
    yVelocity = 1;
    xVelocity = 0;
  }
  // right arrow
  if (event.keyCode === 39) {
    if (xVelocity === -1) return;
    yVelocity = 0;
    xVelocity = 1;
  }
  // left arrow
  if (event.keyCode === 37) {
    if (xVelocity === 1) return;
    yVelocity = 0;
    xVelocity = -1;
  }
}

drawGame();

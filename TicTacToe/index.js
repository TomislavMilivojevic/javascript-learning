window.addEventListener("DOMContentLoaded", () => {
  const titles = Array.from(document.querySelectorAll(".title"));
  const playerDisplay = document.querySelector(".display-player");
  const resetButton = document.querySelector("#reset");
  const announcer = document.querySelector(".announcer");

  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let isGameActive = true;

  const PLAYERX_WON = "PLAYERX_WON";
  const PLAYERO_WON = "PLAYERO_WON";
  const tie = "TIE";

  /*
    Indexes within the board
    [0][1][2]
    [3][4][5]
    [6][7][8]
  */
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
      isGameActive = false;
      return;
    }
    if (!board.includes("")) announce("TIE");
  }

  const announce = (type) => {
    switch (type) {
      case PLAYERO_WON:
        announce.innerHTML = 'Player <span class="playerO">O</span> Won';
        break;
      case PLAYERX_WON:
        announce.innerHTML = 'Player <span class="playerX">X</span> Won';
        break;
      case TIE:
        announce.innerHTML = "TIE";
    }
    announce.classList.remove("hide");
  };

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    announcer.classList.add("hide");

    if (currentPlayer === "O") {
      changePlayer();
    }
    titles.forEach((title) => {
      title.innerText = "";
      title.classList.remove("playerX");
      title.classList.remove("playerO");
    });
  };

  const isValidAction = (title) => {
    if (title.innerText === "X" || title.innerText === "O") {
      return false;
    }
  };

  const updateBoard = (index) => {
    board[index] = currentPlayer;
  };

  const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    // toggle between player turns condition
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerDisplay.classList.add(`player${currentPlayer}`);
  };

  const userAction = (title, index) => {
    if (isValidAction(title) && isGameActive) {
      title.innerText = currentPlayer;
      title.classList.add(`player${currentPlayer}`);
      updateBoard(index);
      handleResultValidation();
      changePlayer();
    }
  };

  titles.forEach((title, index) => {
    title.addEventListener("click", () => userAction(title, index));
  });
  resetButton.addEventListener("click", resetBoard);
});

const calcDisplay = document.getElementById("screen-one");
const calcDisplayTwo = document.getElementById("screen-two");
const digits = Array.from(document.querySelectorAll(".buttons"));
const backspace = document.getElementById("back");

const resetButton = document.getElementById("reset");
const operatorScreen = document.getElementById("operator-screen");

let operatieActiva = (operator, num1, num2) => {
  if (operator === "+") {
    return parseInt(num1) + parseInt(num2);
  } else if (operator === "-") {
    return parseInt(num1) - parseInt(num2);
  } else if (operator === "*") {
    return parseInt(num1) * parseInt(num2);
  } else if (operator === "/") {
    return parseInt(num1) / parseInt(num2);
  } else if (operator === "%") {
    return parseInt(num1) % parseInt(num2);
  }
};

operator = "";
let num1;
let num2;

const resetFunction = () => {
  calcDisplay.innerText = "";
  calcDisplayTwo.innerText = "";
  operatorScreen.innerText = "";
  num1 = "";
  num2 = "";
};

const handleBackspace = () => {
  calcDisplay.innerText = calcDisplay.innerText.slice(0, -1);
};

const handleClick = (e) => {
  calcDisplay.innerText += e.target.innerText;
  determineOperator(e);
  if (
    (calcDisplay.innerText.includes("+") ||
      calcDisplay.innerText.includes("-") ||
      calcDisplay.innerText.includes("*") ||
      calcDisplay.innerText.includes("/") ||
      calcDisplay.innerText.includes("%")) &&
    calcDisplayTwo.innerText !== ""
  ) {
    num1 = calcDisplayTwo.innerText;
    num2 = calcDisplay.innerText.slice(0, -1);
    calcDisplayTwo.innerText = "";
    let result = operatieActiva(operator, num1, num2);
    console.log(num1 + " " + num2);
    calcDisplayTwo.innerText = result;
    calcDisplay.innerText = "";
  } else if (
    calcDisplay.innerText.includes("+") ||
    calcDisplay.innerText.includes("-") ||
    calcDisplay.innerText.includes("*") ||
    calcDisplay.innerText.includes("/") ||
    calcDisplay.innerText.includes("%")
  ) {
    determineOperator(e);
    console.log(num1 + " " + num2);
    calcDisplayTwo.innerText = calcDisplay.innerText.slice(0, -1);
    num1 = calcDisplayTwo.innerText;

    calcDisplay.innerText = "";
  }
};

const determineOperator = (e) => {
  if (
    e.target.innerText === "+" ||
    e.target.innerText === "-" ||
    e.target.innerText === "*" ||
    e.target.innerText === "/" ||
    e.target.innerText === "%"
  )
    operator = e.target.innerText;
  operatorScreen.innerText = operator;
  console.log(operator);
};

digits.forEach((e) => {
  e.addEventListener("click", handleClick);
});
backspace.addEventListener("click", handleBackspace);

resetButton.addEventListener("click", resetFunction);

// OPERATII

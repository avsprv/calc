const calcMathLine = document.getElementById("calc-math-line");
const calcResult = document.getElementById("calc-result");
const calcActions = document.getElementById("calc-actions");

let firstNumber = "";
let secondNumber = "";
let operation = "";

function clearVariables() {
  firstNumber = "";
  secondNumber = "";
  operation = "";
}

calcActions.addEventListener("click", function (e) {
  const button = e.target;
  const buttonValue = button.textContent;

  if (buttonValue === "C") {
    calcMathLine.textContent = "";
    calcResult.textContent = "";
    clearVariables();
  } else if (buttonValue === "=") {
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;

    if (operation === "*") {
      calcResult.textContent = firstNumber * secondNumber;
    } else if (operation === "+") {
      calcResult.textContent = firstNumber + secondNumber;
    } else if (operation === "-") {
      calcResult.textContent = firstNumber - secondNumber;
    } else if (operation === "/") {
      calcResult.textContent = firstNumber / secondNumber;
    }

    clearVariables();
  } else if (buttonValue === ".") {
    const number = operation.length > 0 ? secondNumber : firstNumber;

    if (number.length === 0 || number.match(/\./)) {
      return;
    } else {
      if (operation.length > 0) {
        secondNumber += buttonValue;
      } else {
        firstNumber += buttonValue;
      }
    }
  } else if (button.classList.contains("number")) {
    if (operation.length > 0) {
      secondNumber += buttonValue;
    } else {
      firstNumber += buttonValue;
    }
  } else if (button.classList.contains("operation")) {
    operation = buttonValue;
  }

  calcMathLine.textContent = `${firstNumber} ${operation} ${secondNumber}`;
});

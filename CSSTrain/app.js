const butoane = Array.from(document.querySelectorAll(".buttons"));

const actiuni = Array.from(document.querySelectorAll(".actiuni"));
//primul ecran
const ecranUnu = document.getElementById("screen-one");
// Al doilea ecran
const ecranDoi = document.getElementById("screen-two");
// Ecran Operator
const ecranOperator = document.getElementById("operator-screen");

// variabile globale
let numarUnu;
let numarDoi;
let rezultat;
let operator;
let operatorVechi;

const handleButoane = (e) => {
  ecranUnu.innerText += e.target.innerText;
};

const executaActiune = (semnVechi) => {
  if (semnVechi === "+") {
    rezultat = numarUnu + numarDoi;
    console.log(rezultat);
    ecranDoi.innerText = rezultat;

    ecranUnu.innerText = "";
  } else if (semnVechi === "/") {
    rezultat = numarUnu / numarDoi;
    console.log(rezultat);
    ecranDoi.innerText = rezultat;

    ecranUnu.innerText = "";
  } else if (semnVechi === "-") {
    rezultat = numarUnu - numarDoi;
    console.log(rezultat);
    ecranDoi.innerText = rezultat;

    ecranUnu.innerText = "";
  } else if (semnVechi === "*") {
    rezultat = numarUnu * numarDoi;
    console.log(rezultat);
    ecranDoi.innerText = rezultat;

    ecranUnu.innerText = "";
  } else if (semnVechi === "%") {
    rezultat = numarUnu % numarDoi;
    console.log(rezultat);
    ecranDoi.innerText = rezultat;

    ecranUnu.innerText = "";
  }
};

handleActiune = (e) => {
  // retinem vechium operator, va fi folosit la functia de operatii

  if (
    ecranUnu.innerText === "" &&
    ecranOperator.innerText != "" &&
    ecranDoi.innerText != ""
  ) {
    return;
  }
  if (ecranOperator.innerText != "") {
    operatorVechi = ecranOperator.innerText;
  }

  ecranOperator.innerText = e.target.innerText;
  // trebuie un if check daca ecranele sunt goale pentru a nu continua daca prima accesare este un operator

  operator = ecranOperator.innerText;
  console.log("OperatorNou" + operator);
  if (ecranUnu.innerText != "" && ecranDoi.innerText === "") {
    numarUnu = parseInt(ecranUnu.innerText);
    ecranDoi.innerText = ecranUnu.innerText;
    ecranUnu.innerText = "";
  } else if (ecranDoi != "" && ecranUnu != "") {
    console.log("OperatorVechi" + operatorVechi);
    numarUnu = parseInt(ecranDoi.innerText);
    // trebuie un check pentru operatorul trecut si pentru operatorul curent(momentul clickului)
    console.log("Numar unu " + numarUnu + " " + " Numar doi " + numarDoi);
    numarDoi = parseInt(ecranUnu.innerText);
    ecranUnu.innerText = "";
    executaActiune(operatorVechi);
  }
};

butoane.forEach((buton) => {
  buton.addEventListener("click", handleButoane);
});

actiuni.forEach((actiune) => {
  actiune.addEventListener("click", handleActiune);
});

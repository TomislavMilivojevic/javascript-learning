const butoane = Array.from(document.querySelectorAll(".buttons"));

const actiuni = Array.from(document.querySelectorAll(".actiuni"));
//primul ecran
const ecranUnu = document.getElementById("screen-one");
// Al doilea ecran
const ecranDoi = document.getElementById("screen-two");
// Ecran Operator
const ecranOperator = document.getElementById("operator-screen");

const butonEgal = document.getElementById("egal");

const reset = document.getElementById("reset");
const backSpace = document.getElementById("back");

// variabile globale
let numarUnu;
let numarDoi;
let rezultat;
let operator;
let operatorVechi;

const backFunction = () => {
  ecranUnu.innerText = ecranUnu.innerText.slice(0, -1);
};

const resetFunction = () => {
  ecranUnu.innerText = "";
  ecranDoi.innerText = "";
  ecranOperator.innerText = "";
  numarUnu = "";
  numarDoi = "";
  rezultat = "";
  operator = "";
  operatorVechi = "";
};

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
  } else if (semnVechi === "=") {
    rezultat = numarUnu % numarDoi;
    console.log(rezultat);
    ecranDoi.innerText = rezultat;

    ecranUnu.innerText = "";
  }
};

handleActiune = (e) => {
  // Multiple apasari ale unui buton de semn
  if (
    ecranUnu.innerText === "" &&
    ecranOperator.innerText != "" &&
    ecranDoi.innerText != ""
  ) {
    return;
  }

  // La urmatoarea retinem vechiul operator pentru functia de actiuni, iar noul operator pentru viitorul ciclu.
  if (ecranOperator.innerText != "") {
    operatorVechi = ecranOperator.innerText;
  }

  // Clickul pe un buton de actiuni trimite operatorul pe ecran si salveaza operatorul nou
  ecranOperator.innerText = e.target.innerText;
  operator = ecranOperator.innerText;

  console.log("OperatorNou" + operator);
  if (ecranUnu.innerText != "" && ecranDoi.innerText === "") {
    numarUnu = parseFloat(ecranUnu.innerText);
    ecranDoi.innerText = ecranUnu.innerText;
    ecranUnu.innerText = "";
  } else if (ecranDoi != "" && ecranUnu != "") {
    console.log("OperatorVechi" + operatorVechi);
    numarUnu = parseFloat(ecranDoi.innerText);

    console.log("Numar unu " + numarUnu + " " + " Numar doi " + numarDoi);
    numarDoi = parseFloat(ecranUnu.innerText);
    ecranUnu.innerText = "";
    // ExecutamOperatia
    executaActiune(operatorVechi);
  }
};

butoane.forEach((buton) => {
  buton.addEventListener("click", handleButoane);
});

actiuni.forEach((actiune) => {
  actiune.addEventListener("click", handleActiune);
});

reset.addEventListener("click", resetFunction);

backSpace.addEventListener("click", backFunction);

const butoane = Array.from(document.querySelectorAll(".buttons"));

const actiuni = Array.from(document.querySelectorAll(".actiuni"));
// Primul ecran
const ecranUnu = document.getElementById("screen-one");
// Al doilea ecran
const ecranDoi = document.getElementById("screen-two");
// Ecran Operator
const ecranOperator = document.getElementById("operator-screen");

const butonEgal = document.getElementById("egal");

const reset = document.getElementById("reset");
const backSpace = document.getElementById("back");
/* EXISTA UN BUG ATUNCI CAND PORNIM APLICATIA, NUMARUL DOI APARE CA "undefined" la prima operatie*/
// variabile globale :((
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
  // Fix Bug decimala atunci cand semnul "." este singur in "ecranUnu"
  if (ecranUnu.innerText.length < 1 && e.target.innerText === ".") {
    return;
  }
  // Fix bug atunci cand primul caracter introdus la startul aplicatiei este semnul "-"
  if (
    ecranUnu.innerText === "" &&
    ecranDoi.innerText === "" &&
    ecranOperator.innerText === "-"
  ) {
    ecranUnu.innerText += ecranOperator.innerText;
  }
  // Return standard, concatenare string pe "ecranUnu"
  ecranUnu.innerText += e.target.innerText;
};

const handleEgal = () => {
  if (ecranUnu.innerText === "" || ecranDoi.innerText === "") {
    return;
  } else {
    numarUnu = parseFloat(ecranUnu.innerText);
    numarDoi = parseFloat(ecranDoi.innerText);
    if (ecranOperator.innerText === "+") {
      rezultat = numarUnu + numarDoi;
      console.log(rezultat);
      ecranDoi.innerText = rezultat;

      ecranUnu.innerText = "";
    } else if (ecranOperator.innerText === "/") {
      rezultat = numarUnu / numarDoi;
      console.log(rezultat);
      ecranDoi.innerText = rezultat;

      ecranUnu.innerText = "";
    } else if (ecranOperator.innerText === "-") {
      rezultat = numarUnu - numarDoi;
      console.log(rezultat);
      ecranDoi.innerText = rezultat;

      ecranUnu.innerText = "";
    } else if (ecranOperator.innerText === "*") {
      rezultat = numarUnu * numarDoi;
      console.log(rezultat);
      ecranDoi.innerText = rezultat;

      ecranUnu.innerText = "";
    } else if (ecranOperator.innerText === "%") {
      rezultat = numarUnu % numarDoi;
      console.log(rezultat);
      ecranDoi.innerText = rezultat;

      ecranUnu.innerText = "";
    } else if (ecranOperator.innerText === "=") {
      rezultat = numarUnu % numarDoi;
      console.log(rezultat);
      ecranDoi.innerText = rezultat;

      ecranUnu.innerText = "";
    }
  }
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

const handleActiune = (e) => {
  // Fix bug pentru multiple apasari ale unui buton de semn

  if (
    (ecranUnu.innerText === "" &&
      ecranOperator.innerText != "" &&
      ecranDoi.innerText != "") ||
    (ecranUnu.innerText === "" &&
      ecranOperator.innerText != "" &&
      ecranDoi.innerText == "")
  ) {
    // Pentru multiple apasari ale unui buton/butoane operator, salveaza doar noul semn si iese din functie
    ecranOperator.innerText = e.target.innerText;
    return;
  }

  // Fix bug "Switch operator" vechiul operator pentru functia de actiuni, iar noul operator pentru viitorul ciclu.
  if (ecranOperator.innerText != "") {
    operatorVechi = ecranOperator.innerText;
  }

  // Comportament normal, clickul salveza ecranul operator
  ecranOperator.innerText = e.target.innerText;
  operator = ecranOperator.innerText;

  console.log("OperatorNou" + operator);

  // Logica pentru multiple operatii fara a folosi operatorul "="
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
    // Executie functie calcul, cu operatorul vechi
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

butonEgal.addEventListener("click", handleEgal);

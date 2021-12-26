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

const handleButoane = (e) => {
  ecranUnu.innerText += e.target.innerText;
};

handleActiune = (e) => {
  ecranOperator.innerText = e.target.innerText;
  // trebuie un if check daca ecranele sunt goale pentru a nu continua daca prima accesare este un operator

  let operator = ecranOperator.innerText;
  if (ecranUnu.innerText != "" && ecranDoi.innerText === "") {
    numarUnu = parseInt(ecranUnu.innerText);
    ecranDoi.innerText = ecranUnu.innerText;
    ecranUnu.innerText = "";
  } else if (ecranDoi != "" && ecranUnu != "") {
    numarUnu = parseInt(ecranDoi.innerText);
    // trebuie un check pentru operatorul trecut si pentru operatorul curent(momentul clickului)
    console.log(numarUnu + " " + numarDoi);
    if (ecranUnu.innerText != "") {
      numarDoi = parseInt(ecranUnu.innerText);
      ecranUnu.innerText = "";
    }
    if (operator === "+") {
      rezultat = numarUnu + numarDoi;
      console.log(rezultat);
      ecranDoi.innerText = rezultat;

      ecranUnu.innerText = "";
    } else if (operator === "/") {
      rezultat = numarUnu / numarDoi;
      console.log(rezultat);
      ecranDoi.innerText = rezultat;

      ecranUnu.innerText = "";
    } else if (operator === "-") {
      rezultat = numarUnu - numarDoi;
      console.log(rezultat);
      ecranDoi.innerText = rezultat;

      ecranUnu.innerText = "";
    } else if (operator === "*") {
      rezultat = numarUnu * numarDoi;
      console.log(rezultat);
      ecranDoi.innerText = rezultat;

      ecranUnu.innerText = "";
    } else if (operator === "%") {
      rezultat = numarUnu % numarDoi;
      console.log(rezultat);
      ecranDoi.innerText = rezultat;

      ecranUnu.innerText = "";
    }
  }
};

butoane.forEach((buton) => {
  buton.addEventListener("click", handleButoane);
});

actiuni.forEach((actiune) => {
  actiune.addEventListener("click", handleActiune);
});

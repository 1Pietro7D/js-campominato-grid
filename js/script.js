console.log("hello world");

// global var

const inputHTML = document.querySelector("input");
const grid = document.getElementById("grid");

// Start code

inputHTML.addEventListener("click", function () {
  grid.innerHTML = "";
  console.log("Good, let's go");

  // rendiamo visibile il tutto
  grid.classList.remove("d-none");

  // creo un array dove inserire i miei numeri fino al 100

  const myNumbers = [];
  for (let index = 1; index <= 100; index++) {
    // inserisco il numero di indice nell'array
    myNumbers.push(index.valueOf());
  }
  // creiamo con un ciclo 100 elementi creando una variabile locale

  for (let squareIndex = 0; squareIndex < 100; squareIndex++) {
    const myNumbersquareRandom = getRandomNumber(0, myNumbers.length - 1);

    // creo degli elementi div
    const mySquare = document.createElement("div");
    mySquare.classList.add("my-square");

    // gli inserisco il numero al mySquare dall'array My numbers in ordine casuale
    mySquare.append(myNumbers[myNumbersquareRandom]);
    // /condition for output
    myNumbers.splice(myNumbersquareRandom, 1);

    // gli implemento un evento al click e al doppio click
    mySquare.addEventListener("click", function () {
      console.log("hai cliccato la cella " + squareIndex);
      mySquare.style.color = "white";
      if (getEven(myNumbersquareRandom)) {
        mySquare.style.backgroundColor = "red";
      } else {
        mySquare.style.backgroundColor = " blue";
      }
    });

    mySquare.addEventListener("dblclick", function () {
      mySquare.style.backgroundColor = "";
      mySquare.style.color = "";
    });

    // aggiungo i div creati a grid e lo mettiamo dopo cosi non devo più pensarci

    grid.append(mySquare);
  }
  console.log(myNumbers + "ora la lista è vuota");
  // End code
});

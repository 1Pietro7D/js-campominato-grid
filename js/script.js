console.log("hello world");

// global var

const inputHTML = document.querySelector("input");
const grid = document.getElementById("grid");

// Start code

inputHTML.addEventListener("click", function () {
  inputHTML.classList.add("d-none");
  // log
  console.log("Good, let's go");

  // rendiamo visibile il tutto
  grid.classList.remove("d-none");

  // creiamo con un ciclo 100 elementi creando una variabile locale

  for (let squareIndex = 1; squareIndex <= 100; squareIndex++) {
    // nascondo l'input per evitarne altri

    // creo degli elementi div
    const mySquare = document.createElement("div");

    mySquare.append(squareIndex);
    mySquare.classList.add("my-square");

    // /condition for output

    mySquare.addEventListener("click", function () {
      console.log("hai cliccato la cella " + squareIndex);
      mySquare.style.color = "white";
      if (squareIndex % 2 == 0) {
        mySquare.style.backgroundColor = "red";
      } else {
        mySquare.style.backgroundColor = " blue";
      }
    });

    // aggiungo i div creati a grid

    grid.append(mySquare);
  }

  // End code
});

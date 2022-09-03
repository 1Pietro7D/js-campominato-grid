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

  // creo un array dove inserire i miei numeri fino al 100

  const myNumbersSquare = [];
  for (let index = 1; index <= 100; index++) {
    myNumbersSquare.push(index);
  }
  const myNumbersSquareSort = myNumbersSquare.sort();
  // creiamo con un ciclo 100 elementi creando una variabile locale

  for (let squareIndex = 0; squareIndex < 100; squareIndex++) {
    // nascondo l'input per evitarne altri

    // creo degli elementi div
    const mySquare = document.createElement("div");

    mySquare.classList.add("my-square");
    mySquare.append(myNumbersSquareSort[squareIndex]);
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
  console.log(myNumbersSquare);
  // End code
});

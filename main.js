var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

/* To manage the players turns and set a symbol to selected square */
var turn = "X";
function playGame(event) {
  if (gameIsOver === false) {
    if ($(event.target).text() === "") {
      //prevent to choose one square more than ones

      $(event.target).text(turn); //To select specific square and set it by turn value

      if (turn === "X") {
        turn = "O";
      } else if (turn === "O") {
        turn = "X";
      }
    }
    checkSquares();
  }
}

/* 1 - set symbol to selected square */
let gameIsOver = false;
function checkSquares() {
  var square1 = $("#box1").text();
  var square2 = $("#box2").text();
  var square3 = $("#box3").text();
  var square4 = $("#box4").text();
  var square5 = $("#box5").text();
  var square6 = $("#box6").text();
  var square7 = $("#box7").text();
  var square8 = $("#box8").text();
  var square9 = $("#box9").text();

  if (square1 !== "" && square1 === square2 && square2 === square3) {
    $("#message").text("[" + square1 + "] you are the winner!");
    playcounter(square1);
    gameIsOver = true;
  } else if (square4 !== "" && square4 === square5 && square5 === square6) {
    $("#message").text("[" + square4 + "] you are the winner! ");
    playcounter(square4);
    gameIsOver = true;
  } else if (square7 !== "" && square7 === square8 && square8 === square9) {
    $("#message").text("[" + square7 + "] you are the winner!");
    playcounter(square7);
    gameIsOver = true;
  } else if (square1 !== "" && square1 === square4 && square4 === square7) {
    $("#message").text("[" + square1 + "] you are the winner!");
    playcounter(square1);
    gameIsOver = true;
  } else if (square2 !== "" && square2 === square5 && square5 === square8) {
    $("#message").text("[" + square2 + "] you are the winner!");
    playcounter(square2);
    gameIsOver = true;
  } else if (square3 !== "" && square3 === square6 && square6 === square9) {
    $("#message").text("[" + square3 + "] you are the winner");
    playcounter(square3);
    gameIsOver = true;
  } else if (square1 !== "" && square1 === square5 && square5 === square9) {
    $("#message").text("[" + square1 + "] you are the winner!");
    playcounter(square1);
    gameIsOver = true;
  } else if (square3 !== "" && square3 === square5 && square5 === square7) {
    $("#message").text("[" + square3 + "]you are the winner!");
    playcounter(square3);
    gameIsOver = true;
  } else if (
    square1 !== "" &&
    square2 !== "" &&
    square3 !== "" &&
    square4 !== "" &&
    square5 !== "" &&
    square6 !== "" &&
    square7 !== "" &&
    square8 !== "" &&
    square9 !== ""
  ) {
    $("#message").text("Tie");
    gameIsOver = true;
  }
}

/* reset boxes to 0 */
function reset() {
  var square1 = $("#box1").text("");
  square2 = $("#box2").text("");
  square3 = $("#box3").text("");
  square4 = $("#box4").text("");
  square5 = $("#box5").text("");
  square6 = $("#box6").text("");
  square7 = $("#box7").text("");
  square8 = $("#box8").text("");
  square9 = $("#box9").text("");
  $("#message").text(" "); //remove the msg also
  gameIsOver = false;
}

var x_counter = 0;
var o_counter = 0; // initial counters with zero
function playcounter(symbol) {
  if (symbol === "X") {
    x_counter++;
    $("#playerx").text(x_counter); //need to put it inside the function to execute it each time the function called
  } else if (symbol === "O") {
    o_counter++;
    $("#playero").text(o_counter);
  }
}

$("td").on("click", playGame);

$("button").on("click", reset);

$("#player").on("click", reset);

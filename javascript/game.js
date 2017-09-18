$(document).ready(function() {

var wordsList = [""];

var choosenLetters = [];

var blanksAndSucceses = [];

var wrongGuesses =[];

var lettersGuessed = "";

function startGame() {

  numGuesses = 9;

  choosenLetters = wordsList[Math.floor(Math.random()*wowordsList.length)];

  lettersInChosenWord = chosenWord.split("");


  numBlanks = lettersInChosenWord.length;


  console.log(chosenWord);

  blanksAndSucceses = [];

  wrongGuesses = [];


for (var i =0; i < numBlanks.length; i++) {

  blanksAndSucceses.push("_");
}

  console.log(blanksAndSucceses);


  document.getElementId("guesses-left").innerHTML = numGuesses;


/*
  var letterBtn = $("<button>");
console.log(letterBtn);
//attach class
  letterBtn.addClass("letter-button letter letter-button-color");
//give attribute
  letterBtn.attr("data-letter", letters[i]);
  //attach .text

    letterBtn.text(letters[i]);

    //append letterBtn to $buttons
    $("#buttons").append(letterBtn);
}
//on-click creation
$(".letter-button").on("click", function () {

var hangLetter = $("<div>");

//add color class
hangLetter.addClass("letter hang-color");

//this syntax

hangLetter.text($(this).attr("data-letter"));


//append hangLetter to #display

$("#display").append(hangLetter);

});
//clear the on-click
$("#clear").on("click", function () {
//empty display contents
$("#display").empty();

});
});
*/

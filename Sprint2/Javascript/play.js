sessionStorage.clear();

var round = 1;
var score = 0;
var tries_left = 4;


var def1 = document.getElementById("def1");
var def2 = document.getElementById("def2");
var hints = document.getElementById("hints");
var tries = document.getElementById("tries");
const gameStart = document.getElementById("gameStart");
const gameButton = document.getElementById("gameButton");
gameButton.onclick = startGame;



function gameLoop(){
	var word;
	var hint_text;
	var round_data = [];

	def1.innerHTML = "- Definition PlaceHolder";
	def2.innerHTML = "- Need dictionary (Backend)";
	tries.textContent = "Tries Left: " + tries_left;

	var checkGuess = function() {
		//Place holder
		alert("Can't check input, no dictionary available.");
		window.location.reload();
	}

	document.getElementById("enter").onclick = checkGuess;
}



function startGame() {
	var text;

	// Change the attributes of game button
	gameButton.textContent = "Quit";
	gameStart.textContent = "Press the button to quit. Scores will not be saved";
	gameButton.onclick = quitGame;

	//Initialize hints
	hints.textContent = "(No hints yet)";

	//Print game stats
	printStats();

	//Enable word input
	document.getElementById("word_input").disabled = false;
	document.getElementById("enter").disabled = false;

	gameLoop();
}

function quitGame() {
	window.location.href = "home.html";
}

function printStats(){
	document.getElementById("score").innerHTML = score;
	document.getElementById("round").innerHTML = "Round: " + round;
}



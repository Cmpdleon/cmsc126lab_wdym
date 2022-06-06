sessionStorage.clear();
var round = 1;
var score = 0;


var def1 = document.getElementById("def1");
var def2 = document.getElementById("def2");
var hints = document.getElementById("hints");
const gameStart = document.getElementById("gameStart");
const gameButton = document.getElementById("gameButton");
gameButton.onclick = startGame;



function gameLoop(){
	var def1_text;
	var def2_text;
	var word;
	var tries = 4;
	var hint_text;
	var round_data = [];

	//Max round for the Demo since there are only 10 words
	if(round == 11){
		sessionStorage.setItem(`num`, round - 1);
		sessionStorage.setItem(`score`, score);
		location.replace("review.html");
	}

	//Get definition using fetch API
	fetch("http://localhost:3000/definition/")
	.then((res) =>{
		if (res.ok){
			return res.json();
		}
	})

	.then((rows) => {

		def1_text = rows[0].def;

		try{
			def2_text = rows[1].def;
		}
		catch(err){
			console.log(err);
			def2_text = "---";
		}

		word = rows[0].word;
		len = word.length;
		console.log(word);
		console.log(def1_text);
		console.log(def2_text);

		// Display the two difinitions
		def1.textContent = "- " + def1_text;
		def2.textContent = "- " + def2_text;
		//------------------------------//


		//Save data function for saving game stats in the session storage
		var saveData = function(){

			round_data.push(word);
			round_data.push(tries);
			sessionStorage.setItem(`round${round}`, round_data);
		}

		//check game state if we should continue
		var checkState = function(){

			//get the input of the user
			var guess = document.getElementById("word_input").value;
			document.getElementById("word_input").value = '';
			if(guess == word){
				score += tries;
				saveData();

				round ++;			
				printStats();
				hints.innerHTML = "(No hints yet)";

				return gameLoop();
			}

			if(guess != word){
				tries --;
			}

			if (tries > 0){
	
				if(tries == 3){
					hint_text = '';
					for (let i = 0; i < len; i++){
						hint_text += "_ "
					}
				}

				else if (tries == 2){
					hint_text = word[0];
					for (let i = 0; i < len-1; i++){
						hint_text += " _"
					}
				}

				else if (tries == 1){
					hint_text = word[0];
					for (let i = 0; i < len-2; i++){
						hint_text += " _"
					}
					hint_text += ' ';
					hint_text += word[len-1];
				}

				hints.innerHTML = hint_text;
			}

			if (tries == 0){
				saveData();
				sessionStorage.setItem(`num`, round);
				sessionStorage.setItem(`score`, score);
				location.replace("review.html");
			}

			document.getElementById("tries").innerHTML = "Tries Left: " + tries;
		}

		document.getElementById("tries").innerHTML = "Tries Left: " + tries;
		document.getElementById("enter").onclick = checkState;
	
		return JSON.stringify(rows);

	})
	.catch(console.log);
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



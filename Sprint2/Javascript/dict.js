function display(){
	var def1_text = "Definition PlaceHolder";
	var def2_text = "Need back end";
	var word_text = document.getElementById('search').value;

	if (word_text == ""){
		alert("Blank input.");
		window.location.reload();

	}
	else{
		def1.textContent = "- " + def1_text;
		def2.textContent = "- " + def2_text;
		word.textContent = "" + word_text;
	}
}

var def1 = document.getElementById('def1');
var def2 = document.getElementById('def2');
var word = document.getElementById('word');
document.getElementById('search_button').onclick = display;
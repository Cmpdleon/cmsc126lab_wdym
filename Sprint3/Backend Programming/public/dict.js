function display(){
	var def1_text;
	var def2_text;
	var word_text;

	var word_input = document.getElementById('search').value;

	if (word_input == ""){
		alert("Blank input.");
		window.location.reload();
		return;
	}

	const params = new URLSearchParams({
		search_dict: word_input
	});
	var string_params = params.toString();

	fetch(`http://localhost:3000/search?${string_params}`)
	    .then((res) =>{
			if (res.ok){
				return res.json();
			}
		})

	    .then((rows) => {
	    	try{
	    		def1_text = rows[0].def;
	    	}
	    	catch(err){
	    		if(err instanceof TypeError){
	    			alert(`\"${word_input}\" is not in the dictionary.`);
					window.location.reload();
	    		}
	    	}
	        

	        try{
				def2_text = rows[1].def;
			}
			catch(err){
				console.log(err);
				def2_text = "---";
			}
			word_text = rows[0].word;


			def1.textContent = "- " + def1_text;
			def2.textContent = "- " + def2_text;
			word.textContent = "" + word_text;

	    })
	    .catch(console.log);
}

var def1 = document.getElementById('def1');
var def2 = document.getElementById('def2');
var word = document.getElementById('word');
document.getElementById('search_button').onclick = display;
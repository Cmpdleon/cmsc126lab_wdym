var topNumber = 10;
var user;
var text;
var div = document.querySelector(".container");

for(let i = 1; i <= topNumber; i++){
	user = document.createElement("h3");
	user.setAttribute("id", i);
	text = document.createTextNode(i); //Place holder for the actual user and score
	user.appendChild(text);
	// console.log(user.textContent);
	div.append(user);
}


fetch("http://localhost:3000/ladderboard")
	.then((res) =>{
		if (res.ok){
			return res.json();
		}
	})

	.then((rows) => {
		var len = rows.length;
		for(let i = 1; i < len; i++){
			user = rows[i]['user'];
			var score = rows[i]['score'];
			var line = document.getElementById(i);
			line.innerHTML = `${user} -------- ${score}`
		}

	})
	.catch(console.log);
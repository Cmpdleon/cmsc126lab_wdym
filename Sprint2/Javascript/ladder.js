var topNumber = 10;
var user;
var text;
var div = document.querySelector(".container");

for(let i = 1; i <= topNumber; i++){
	user = document.createElement("h3");
	user.setAttribute("id", i);
	text = document.createTextNode(i); //Place holder for the actual user and score
	user.appendChild(text);
	div.append(user);
}
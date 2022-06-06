var answer;

var num = sessionStorage.getItem("num");
var score = sessionStorage.getItem("score");


//Get each round stats from session storage
for (let i = 1; i <= num; i++){

	answer = sessionStorage.getItem(`round${i}`);
	ans_array = answer.split(/,(.*)/s);
	console.log(ans_array);

	var table = document.getElementById("gamerev");
	var row = table.insertRow(i);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	cell1.innerHTML = ans_array[0];
	cell2.innerHTML = ans_array[1];
	cell3.innerHTML = ans_array[1];
}

document.getElementById("total").innerHTML = `Total: ${score}`;


document.getElementById("scoreID").value = score;
console.log(document.getElementById("scoreID").value);

sessionStorage.clear();
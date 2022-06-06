const express = require('express');
const app = express();
const router = express.Router();
const path = require("path");
var bodyParser = require('body-parser');
var mysql = require('mysql');

var exclude = [];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "79777",
	database: "wdymProj",
})

app.use(express.static('public'));

app.get('/definition', function (req, res){
	

	function randomInt(max){
		var x = Math.floor(Math.random() * max) + 1;
		if (exclude.includes(x)){
			return randomInt(10);
		}
		else{
			exclude.push(x);
			return x;
		}
	}
	
	var num = randomInt(10);

	conn.query(`SELECT * FROM dict WHERE num = ${num}`, function (err, rows, fields){
		if(err){
			return console.log(err);
		}
		res.json(rows);
	})
})


app.get('/ladderboard', function (req, res){

	conn.query('SELECT * FROM results ORDER BY score DESC LIMIT 10', function(err, rows, fields){
		if (err){
			return console.log(err);
		}
		res.json(rows);
	})
})

router.post('/review', urlencodedParser, function(req,res){
	
	var user = req.body['user'];
	var score = req.body['score'];
	console.log(req.body);
	var sql = "INSERT INTO results (user, score) VALUES (?)";
	var values = [
		[`${user}`,`${score}`]
	]
	conn.query(sql, values, function(err, rows){
		if(err){
			return console.log(err);
		}
		res.sendFile(path.join(__dirname, "/public/ladder.html"));
	});
	
})

// router.post('/search', urlencodedParser, function(req,res){
// 	console.log(req.body);
// });

//HERE
app.get('/search', function (req, res){
	var word = req.query['search_dict'];
	var sql = "SELECT * FROM dict WHERE word = ?";
	var values = [`${word}`]

	conn.query(sql, values, function(err, rows, fields){
		if (err){
			return console.log(err);
		}
		res.json(rows);
	})
});
//


router.get('/', function (req, res){
	res.sendFile(path.join(__dirname, "/public/home.html"));
})

app.use("/", router);

app.listen(3000, function(){
	console.log("Server starting at 3000");
});
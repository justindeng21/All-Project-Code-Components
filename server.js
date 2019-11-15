const express = require('express'); // Add the express framework has been added
let app = express();

const bodyParser = require('body-parser'); // Add the body-parser tool has been added
app.use(bodyParser.json());              // Add support for JSON encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Add support for URL encoded bodies


////////////////////////////////////////////////
/*
	Database connection to a mySQL database
*/

const mysql = require('mysql');  //mysql node driver
var connection = mysql.createConnection({	
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'CUThere',
})
connection.connect()
////////////////////////////////////////////////


function testDB()
{
	console.log('Testing Database connection')
	connection.query('select * from eventDetails', function(err,rows, fields){
	if(err) throw err

	console.log(rows[0].dateOfEvent)
})}


testDB()




app.get('/',function(req,res)
{
	res.sendFile(__dirname + '/index.html')
})

app.get('/home',function(req,res)
{
	res.sendFile(__dirname + '/index.html')
	connection.query('select * from eventDetails', function(err,rows, fields){
		if(err) throw err
	
		console.log(rows[0])
	})
})

app.get('/x',function(req,res)
{
	res.sendFile(__dirname + '/googlemaps.html')
})

app.get('/application',function(req,res)
{
	res.sendFile(__dirname + '/application.html')
})

app.listen(3000)
console.log('Server is being hosted on port 3000')
